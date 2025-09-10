import React from 'react';
import { IndustrialAttachment } from '../../types/industrialAttachment';

interface FormFooterProps {
  activeTab: 'personal' | 'academic' | 'documents' | 'statements' | 'settings';
  setActiveTab: (tab: 'personal' | 'academic' | 'documents' | 'statements' | 'settings') => void;
  currentAttachment: Partial<IndustrialAttachment>;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const FormFooter: React.FC<FormFooterProps> = ({
  activeTab,
  setActiveTab,
  currentAttachment,
  isSubmitting,
  onClose,
  onSubmit,
}) => {
  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'academic', label: 'Academic Info' },
    { id: 'documents', label: 'Documents & Links' },
    { id: 'statements', label: 'Statements' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'personal' | 'academic' | 'documents' | 'statements' | 'settings')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Saving...</span>
              </div>
            ) : (
              currentAttachment?._id ? 'Update Application' : 'Create Application'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
