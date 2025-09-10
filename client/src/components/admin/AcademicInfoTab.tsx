import React from 'react';
import { FiAward, FiBook, FiCalendar } from 'react-icons/fi';
import { IndustrialAttachment, yearOfStudyOptions } from '../../types/industrialAttachment';

interface AcademicInfoTabProps {
  currentAttachment: Partial<IndustrialAttachment>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleReferenceChange: (field: 'institution' | 'course' | 'department', value: string) => void;
  institutions: Array<{ _id: string; name: string; county: string }>;
  courses: Array<{ _id: string; name: string; certification: string; institution: { _id: string; name: string } }>;
  departments: Array<{ _id: string; name: string; description?: string }>;
  loading: boolean;
}

export const AcademicInfoTab: React.FC<AcademicInfoTabProps> = ({
  currentAttachment,
  handleInputChange,
  handleReferenceChange,
  institutions,
  courses,
  departments,
  loading,
}) => {
  return (
    <div className="space-y-6">
      {loading && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">Loading form data...</p>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Institution *</label>
          <div className="relative">
            <FiAward className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              name="institution"
              value={currentAttachment.institution?._id || ''}
              onChange={(e) => handleReferenceChange('institution', e.target.value)}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              disabled={loading}
            >
              <option value="">Select an institution</option>
              {institutions.map((institution) => (
                <option key={institution._id} value={institution._id}>
                  {institution.name} - {institution.county}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Course *</label>
          <div className="relative">
            <FiBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              name="course"
              value={currentAttachment.course?._id || ''}
              onChange={(e) => handleReferenceChange('course', e.target.value)}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              disabled={loading || !currentAttachment.institution?._id}
            >
              <option value="">Select a course</option>
              {courses
                .filter(course => !currentAttachment.institution?._id || course.institution._id === currentAttachment.institution._id)
                .map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.name} ({course.certification})
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Department *</label>
          <div className="relative">
            <FiBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              name="department"
              value={currentAttachment.department?._id || ''}
              onChange={(e) => handleReferenceChange('department', e.target.value)}
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              disabled={loading}
            >
              <option value="">Select a department</option>
              {departments.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.name}
                </option>
              ))}
            </select>
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
