import React from 'react';
import { FiHome, FiBook, FiCalendar } from 'react-icons/fi';
import { StepProps } from '../../types';
import { InputField } from '../InputField';
import { yearOfStudyOptions } from '../../../../../types/industrialAttachment';

export const AcademicInformationStep: React.FC<StepProps> = ({ currentAttachment, onInputChange, onReferenceChange }) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Academic Information</h3>
      <p className="text-sm text-gray-500">Educational background and institution details</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="Institution *"
        name="institution"
        value={currentAttachment.institution?.name || ''}
        onChange={(e) => onReferenceChange('institution', e.target.value)}
        required
        icon={<FiHome />}
      />
      
      <InputField
        label="Course *"
        name="course"
        value={currentAttachment.course?.name || ''}
        onChange={(e) => onReferenceChange('course', e.target.value)}
        required
        icon={<FiBook />}
      />
      
      <InputField
        label="Department *"
        name="department"
        value={currentAttachment.department?.name || ''}
        onChange={(e) => onReferenceChange('department', e.target.value)}
        required
        icon={<FiBook />}
      />
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Year of Study *</label>
        <select
          name="year_of_study"
          value={currentAttachment.year_of_study || 'Year 2'}
          onChange={onInputChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          {yearOfStudyOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      
      <InputField
        label="Expected Graduation Date *"
        name="expected_graduation_date"
        type="date"
        value={currentAttachment.expected_graduation_date || ''}
        onChange={onInputChange}
        required
        icon={<FiCalendar />}
      />
      
      <InputField
        label="Available Start Date"
        name="available_start_date"
        type="date"
        value={currentAttachment.available_start_date || ''}
        onChange={onInputChange}
        icon={<FiCalendar />}
      />
    </div>
  </div>
);
