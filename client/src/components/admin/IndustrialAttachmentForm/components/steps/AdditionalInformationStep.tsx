import React from 'react';
import { FiLink, FiFileText } from 'react-icons/fi';
import { StepProps } from '../../types';
import { InputField } from '../InputField';
import { IndustrialAttachment } from '../../../../../types/industrialAttachment';

export const AdditionalInformationStep: React.FC<StepProps> = ({ currentAttachment, onInputChange, onCheckboxChange }) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
      <p className="text-sm text-gray-500">Links, documents, and preferences</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="LinkedIn URL"
        name="linkedin_url"
        type="url"
        value={currentAttachment.linkedin_url || ''}
        onChange={onInputChange}
        placeholder="https://linkedin.com/in/username"
        icon={<FiLink />}
      />
      
      <InputField
        label="GitHub URL"
        name="github_url"
        type="url"
        value={currentAttachment.github_url || ''}
        onChange={onInputChange}
        placeholder="https://github.com/username"
        icon={<FiLink />}
      />
      
      <InputField
        label="Resume URL"
        name="resume_url"
        type="url"
        value={currentAttachment.resume_url || ''}
        onChange={onInputChange}
        placeholder="https://example.com/resume.pdf"
        icon={<FiFileText />}
      />
      
      <InputField
        label="Cover Letter URL"
        name="cover_letter_url"
        type="url"
        value={currentAttachment.cover_letter_url || ''}
        onChange={onInputChange}
        placeholder="https://example.com/cover-letter.pdf"
        icon={<FiFileText />}
      />
    </div>
    
    <div className="space-y-4">
      {[
        { name: 'can_attend_onsite', label: 'Can attend onsite' },
        { name: 'agree_terms', label: 'I agree to the terms and conditions *', required: true },
        { name: 'agree_communications', label: 'I agree to receive communications' },
        { name: 'is_accepted', label: 'Application Accepted' },
        { name: 'is_archived', label: 'Application Archived' },
      ].map(({ name, label, required }) => (
        <div key={name} className="flex items-center">
          <input
            type="checkbox"
            name={name}
            checked={currentAttachment[name as keyof IndustrialAttachment] as boolean || false}
            onChange={(e) => onCheckboxChange(name, e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required={required}
          />
          <label className="ml-3 block text-sm text-gray-900">{label}</label>
        </div>
      ))}
    </div>
  </div>
);
