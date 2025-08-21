import { useState, useEffect } from 'react';
import { industrialAttachmentsApi } from '../../../../services/adminApi';
import { toast } from 'react-toastify';
import { IndustrialAttachment } from '../../../../types/industrialAttachment';
import { defaultAttachment, TOTAL_STEPS, STEP_VALIDATION_FIELDS } from '../constants';

export const useFormLogic = (
  attachment: Partial<IndustrialAttachment> | undefined, 
  isOpen: boolean, 
  onClose: () => void, 
  onSuccess: () => void
) => {
  const [currentAttachment, setCurrentAttachment] = useState<Partial<IndustrialAttachment>>(defaultAttachment);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  // Reset form when attachment prop changes or modal opens
  useEffect(() => {
    if (isOpen) {
      if (attachment) {
        setCurrentAttachment(attachment);
      } else {
        setCurrentAttachment(defaultAttachment);
      }
      setActiveStep(1);
      setIsSubmitting(false);
    }
  }, [attachment, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentAttachment(prev => ({ ...prev, [name]: value }));
  };

  const handleReferenceChange = (field: 'institution' | 'course' | 'department', value: string) => {
    setCurrentAttachment(prev => ({ ...prev, [field]: { _id: '', name: value } }));
  };

  const handleCheckboxChange = (field: string, value: boolean) => {
    setCurrentAttachment(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (activeStep < TOTAL_STEPS) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const validateCurrentStep = () => {
    switch (activeStep) {
      case 1:
        const step1Fields = STEP_VALIDATION_FIELDS[1];
        const missingStep1 = step1Fields.filter(field => !currentAttachment[field as keyof IndustrialAttachment]);
        if (missingStep1.length > 0) {
          toast.error(`Please fill in all required fields: ${missingStep1.join(', ')}`);
          return false;
        }
        return true;
      case 2:
        const step2Fields = STEP_VALIDATION_FIELDS[2];
        const missingStep2 = step2Fields.filter(field => !currentAttachment[field as keyof IndustrialAttachment]);
        
        if (!currentAttachment.institution?.name) missingStep2.push('institution');
        if (!currentAttachment.course?.name) missingStep2.push('course');
        if (!currentAttachment.department?.name) missingStep2.push('department');
        
        if (missingStep2.length > 0) {
          toast.error(`Please fill in all required fields: ${missingStep2.join(', ')}`);
          return false;
        }
        return true;
      case 3:
        if (!currentAttachment.agree_terms) {
          toast.error('You must agree to the terms');
          return false;
        }
        return true;
      case 4:
        const step4Fields = STEP_VALIDATION_FIELDS[4];
        const missingStep4 = step4Fields.filter(field => !currentAttachment[field as keyof IndustrialAttachment]);
        if (missingStep4.length > 0) {
          toast.error(`Please fill in all required fields: ${missingStep4.join(', ')}`);
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeStep < TOTAL_STEPS) {
      return;
    }

    const basicRequiredFields = ['first_name', 'last_name', 'phone_number', 'email', 'residential_location', 'date_of_birth', 'gender', 'year_of_study', 'expected_graduation_date', 'about_yourself', 'community_engagement_statement', 'understanding_of_swahilipot'];
    
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
        // Ensure institution, course, and department are sent as objects with name property
        institution: currentAttachment.institution?.name ? { name: currentAttachment.institution.name } : undefined,
        course: currentAttachment.course?.name ? { name: currentAttachment.course.name } : undefined,
        department: currentAttachment.department?.name ? { name: currentAttachment.department.name } : undefined,
      };
      
      console.log('Sending attachment data:', attachmentData);
      
      if (currentAttachment._id) {
        const { _id, ...updateData } = attachmentData;
        await industrialAttachmentsApi.update(_id, updateData);
        toast.success('Application updated successfully');
      } else {
        await industrialAttachmentsApi.create(attachmentData);
        toast.success('Application created successfully');
      }
      
      onClose();
      onSuccess();
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to save application';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentAttachment,
    isSubmitting,
    activeStep,
    handleInputChange,
    handleReferenceChange,
    handleCheckboxChange,
    nextStep,
    prevStep,
    validateCurrentStep,
    handleSubmit,
  };
};
