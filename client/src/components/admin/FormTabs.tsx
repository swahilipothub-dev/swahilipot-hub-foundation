import React from 'react';
import { FiUser, FiAward, FiFileText, FiBook, FiCheckCircle } from 'react-icons/fi';

interface FormTabsProps {
  activeTab: 'personal' | 'academic' | 'documents' | 'statements' | 'settings';
  setActiveTab: (tab: 'personal' | 'academic' | 'documents' | 'statements' | 'settings') => void;
}

export const FormTabs: React.FC<FormTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: FiUser },
    { id: 'academic', label: 'Academic Info', icon: FiAward },
    { id: 'documents', label: 'Documents & Links', icon: FiFileText },
    { id: 'statements', label: 'Statements', icon: FiBook },
    { id: 'settings', label: 'Settings', icon: FiCheckCircle },
  ];

  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'personal' | 'academic' | 'documents' | 'statements' | 'settings')}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
