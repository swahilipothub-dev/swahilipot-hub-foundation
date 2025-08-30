import React from 'react';
import { FiAward, FiBook, FiCalendar } from 'react-icons/fi';
import { IndustrialAttachment, yearOfStudyOptions } from '../../types/industrialAttachment';

interface AcademicInfoTabProps {
  currentAttachment: Partial<IndustrialAttachment>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleReferenceChange: (field: 'institution' | 'course' | 'department', value: string) => void;
}

export const AcademicInfoTab: React.FC<AcademicInfoTabProps> = ({
  currentAttachment,
  handleInputChange,
  handleReferenceChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Institution *</label>
          <div className="relative">
            <FiAward className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              name="institution"
              value={currentAttachment.institution?.name || ''}
              onChange={(e) => handleReferenceChange('institution', e.target.value)}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Course *</label>
          <div className="relative">
            <FiBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              name="course"
              value={currentAttachment.course?.name || ''}
              onChange={(e) => handleReferenceChange('course', e.target.value)}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Department *</label>
          <div className="relative">
            <FiBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              name="department"
              value={currentAttachment.department?.name || ''}
              onChange={(e) => handleReferenceChange('department', e.target.value)}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Year of Study *</label>
          <select
            name="year_of_study"
            value={currentAttachment.year_of_study || 'Year 2'}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            {yearOfStudyOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Expected Graduation Date *</label>
          <div className="relative">
            <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="date"
              name="expected_graduation_date"
              value={currentAttachment.expected_graduation_date || ''}
              onChange={handleInputChange}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
