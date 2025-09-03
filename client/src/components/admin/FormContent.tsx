import React from 'react';
import { IndustrialAttachment } from '../../types/industrialAttachment';
import { PersonalInfoTab } from './PersonalInfoTab';
import { AcademicInfoTab } from './AcademicInfoTab';
import { DocumentsTab } from './DocumentsTab';
import { StatementsTab } from './StatementsTab';
import { SettingsTab } from './SettingsTab';

interface FormContentProps {
  activeTab: 'personal' | 'academic' | 'documents' | 'statements' | 'settings';
  currentAttachment: Partial<IndustrialAttachment>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleReferenceChange: (field: 'institution' | 'course' | 'department', value: string) => void;
  setCurrentAttachment: React.Dispatch<React.SetStateAction<Partial<IndustrialAttachment>>>;
  institutions: Array<{ _id: string; name: string; county: string }>;
  courses: Array<{ _id: string; name: string; certification: string; institution: { _id: string; name: string } }>;
  departments: Array<{ _id: string; name: string; description?: string }>;
  loading: boolean;
}

export const FormContent: React.FC<FormContentProps> = ({
  activeTab,
  currentAttachment,
  handleInputChange,
  handleReferenceChange,
  setCurrentAttachment,
  institutions,
  courses,
  departments,
  loading,
}) => {
  return (
    <div className="overflow-y-auto max-h-[60vh]">
      <div className="p-6">
        {activeTab === 'personal' && (
          <PersonalInfoTab
            currentAttachment={currentAttachment}
            handleInputChange={handleInputChange}
          />
        )}

        {activeTab === 'academic' && (
          <AcademicInfoTab
            currentAttachment={currentAttachment}
            handleInputChange={handleInputChange}
            handleReferenceChange={handleReferenceChange}
            institutions={institutions}
            courses={courses}
            departments={departments}
            loading={loading}
          />
        )}

        {activeTab === 'documents' && (
          <DocumentsTab
            currentAttachment={currentAttachment}
            handleInputChange={handleInputChange}
          />
        )}

        {activeTab === 'statements' && (
          <StatementsTab
            currentAttachment={currentAttachment}
            handleInputChange={handleInputChange}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsTab
            currentAttachment={currentAttachment}
            setCurrentAttachment={setCurrentAttachment}
          />
        )}
      </div>
    </div>
  );
};
