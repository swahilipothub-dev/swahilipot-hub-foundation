import React from 'react';
import { FiFileText, FiLink } from 'react-icons/fi';
import { IndustrialAttachment } from '../../types/industrialAttachment';

interface DocumentsTabProps {
  currentAttachment: Partial<IndustrialAttachment>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const DocumentsTab: React.FC<DocumentsTabProps> = ({
  currentAttachment,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Resume URL</label>
          <div className="relative">
            <FiFileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="url"
              name="resume_url"
              value={currentAttachment.resume_url || ''}
              onChange={handleInputChange}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://example.com/resume.pdf"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Cover Letter URL</label>
          <div className="relative">
            <FiFileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="url"
              name="cover_letter_url"
              value={currentAttachment.cover_letter_url || ''}
              onChange={handleInputChange}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://example.com/cover-letter.pdf"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
          <div className="relative">
            <FiLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="url"
              name="linkedin_url"
              value={currentAttachment.linkedin_url || ''}
              onChange={handleInputChange}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
          <div className="relative">
            <FiLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="url"
              name="github_url"
              value={currentAttachment.github_url || ''}
              onChange={handleInputChange}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://github.com/username"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
