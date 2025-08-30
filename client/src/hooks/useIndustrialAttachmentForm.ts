import { useState } from 'react';
import { industrialAttachmentsApi } from '../services/adminApi';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentAttachment(prev => ({ ...prev, [name]: value }));
  };

  const handleReferenceChange = (field: 'institution' | 'course' | 'department', value: string) => {
    setCurrentAttachment(prev => ({ ...prev, [field]: { _id: '', name: value } }));
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
  };
};
