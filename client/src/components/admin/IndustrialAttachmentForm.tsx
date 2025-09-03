import React from 'react';
import { IndustrialAttachment } from '../../types/industrialAttachment';
import { useIndustrialAttachmentForm } from '../../hooks/useIndustrialAttachmentForm';
import { FormHeader } from './FormHeader';
import { FormTabs } from './FormTabs';
import { FormContent } from './FormContent';
import { FormFooter } from './FormFooter';

interface Props {
  attachment?: Partial<IndustrialAttachment>;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const IndustrialAttachmentForm: React.FC<Props> = ({ attachment, isOpen, onClose, onSuccess }) => {
  const {
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
  } = useIndustrialAttachmentForm(attachment, onSuccess, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <FormHeader
          currentAttachment={currentAttachment}
          onClose={onClose}
        />

        <FormTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <FormContent
          activeTab={activeTab}
          currentAttachment={currentAttachment}
          handleInputChange={handleInputChange}
          handleReferenceChange={handleReferenceChange}
          setCurrentAttachment={setCurrentAttachment}
          institutions={institutions}
          courses={courses}
          departments={departments}
          loading={loading}
        />

        <FormFooter
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          currentAttachment={currentAttachment}
          isSubmitting={isSubmitting}
          onClose={onClose}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
