import { useState, useEffect } from 'react';
import { industrialAttachmentsApi, institutionsApi, coursesApi, departmentsApi } from '../services/adminApi';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { IndustrialAttachment } from '../types/industrialAttachment';

const defaultAttachment: Partial<IndustrialAttachment> = {
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  institution: { _id: '', name: '' },
  course: { _id: '', name: '' },
  department: { _id: '', name: '' },
  residential_location: '',
  date_of_birth: format(new Date(new Date().setFullYear(new Date().getFullYear() - 20)), 'yyyy-MM-dd'),
  resume_url: '',
  cover_letter_url: '',
  gender: 'Male',
  year_of_study: 'Year 2',
  expected_graduation_date: format(new Date(new Date().setFullYear(new Date().getFullYear() + 2)), 'yyyy-MM-dd'),
  available_start_date: format(new Date(), 'yyyy-MM-dd'),
  can_attend_onsite: true,
  agree_terms: false,
  agree_communications: false,
  is_accepted: false,
  is_archived: false,
  about_yourself: '',
  community_engagement_statement: '',
  understanding_of_swahilipot: '',
};

export const useIndustrialAttachmentForm = (
  attachment?: Partial<IndustrialAttachment>,
  onSuccess?: () => void,
  onClose?: () => void
) => {
  const [currentAttachment, setCurrentAttachment] = useState<Partial<IndustrialAttachment>>(
    attachment || defaultAttachment
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'personal' | 'academic' | 'documents' | 'statements' | 'settings'>('personal');
  
  // Data for dropdowns
  const [institutions, setInstitutions] = useState<Array<{ _id: string; name: string; county: string }>>([]);
  const [courses, setCourses] = useState<Array<{ _id: string; name: string; certification: string; institution: { _id: string; name: string } }>>([]);
  const [departments, setDepartments] = useState<Array<{ _id: string; name: string; description?: string }>>([]);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentAttachment(prev => ({ ...prev, [name]: value }));
  };

  // Fetch data for dropdowns
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [institutionsRes, coursesRes, departmentsRes] = await Promise.all([
          institutionsApi.getAll(),
          coursesApi.getAll(),
          departmentsApi.getAll()
        ]);
        
        setInstitutions(institutionsRes.data);
        setCourses(coursesRes.data);
        setDepartments(departmentsRes.data);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
        toast.error('Failed to load form data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleReferenceChange = (field: 'institution' | 'course' | 'department', value: string) => {
    if (field === 'institution') {
      const selectedInstitution = institutions.find(inst => inst._id === value);
      setCurrentAttachment(prev => ({ 
        ...prev, 
        institution: selectedInstitution ? { _id: selectedInstitution._id, name: selectedInstitution.name } : { _id: '', name: '' },
        course: { _id: '', name: '' } // Reset course when institution changes
      }));
    } else if (field === 'course') {
      const selectedCourse = courses.find(course => course._id === value);
      setCurrentAttachment(prev => ({ 
        ...prev, 
        course: selectedCourse ? { _id: selectedCourse._id, name: selectedCourse.name } : { _id: '', name: '' }
      }));
    } else if (field === 'department') {
      const selectedDepartment = departments.find(dept => dept._id === value);
      setCurrentAttachment(prev => ({ 
        ...prev, 
        department: selectedDepartment ? { _id: selectedDepartment._id, name: selectedDepartment.name } : { _id: '', name: '' }
      }));
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const basicRequiredFields = [
      'first_name', 'last_name', 'phone_number', 'email', 'residential_location', 
      'date_of_birth', 'gender', 'year_of_study', 'expected_graduation_date', 
      'about_yourself', 'community_engagement_statement', 'understanding_of_swahilipot'
    ];
    
    const missingBasicFields = basicRequiredFields.filter(field => !currentAttachment[field as keyof IndustrialAttachment]);
    
    const missingObjectFields = [];
    if (!currentAttachment.institution?.name) missingObjectFields.push('institution');
    if (!currentAttachment.course?.name) missingObjectFields.push('course');
    if (!currentAttachment.department?.name) missingObjectFields.push('department');
    
    const allMissingFields = [...missingBasicFields, ...missingObjectFields];
    
    if (allMissingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${allMissingFields.join(', ')}`);
      return;
    }
    
    if (!currentAttachment.agree_terms) {
      toast.error('You must agree to the terms');
      return;
    }

    try {
      setIsSubmitting(true);
      const attachmentData = {
        ...currentAttachment,
        date_of_birth: new Date(currentAttachment.date_of_birth || ''),
        expected_graduation_date: new Date(currentAttachment.expected_graduation_date || ''),
        available_start_date: currentAttachment.available_start_date ? new Date(currentAttachment.available_start_date) : undefined,
      };
      
      if (currentAttachment._id) {
        const { _id, ...updateData } = attachmentData;
        await industrialAttachmentsApi.update(_id, updateData);
        toast.success('Application updated successfully');
      } else {
        await industrialAttachmentsApi.create(attachmentData);
        toast.success('Application created successfully');
      }
      
      onClose?.();
      onSuccess?.();
    } catch (err: unknown) {
      const errorMessage = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to save application';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentAttachment,
    setCurrentAttachment,
    isSubmitting,
    activeTab,
    setActiveTab,
    handleInputChange,
    handleReferenceChange,
    handleSubmit,
    institutions,
    courses,
    departments,
    loading,
  };
};
