import React from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar } from 'react-icons/fi';
import { StepProps } from '../../types';
import { InputField } from '../InputField';
import { genderOptions } from '../../../../../types/industrialAttachment';

export const PersonalInformationStep: React.FC<StepProps> = ({ currentAttachment, onInputChange }) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
      <p className="text-sm text-gray-500">Basic details about the applicant</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="First Name *"
        name="first_name"
        value={currentAttachment.first_name || ''}
        onChange={onInputChange}
        required
        icon={<FiUser />}
      />
      
      <InputField
        label="Last Name *"
        name="last_name"
        value={currentAttachment.last_name || ''}
        onChange={onInputChange}
        required
        icon={<FiUser />}
      />
      
      <InputField
        label="Middle Name"
        name="middle_name"
        value={currentAttachment.middle_name || ''}
        onChange={onInputChange}
        icon={<FiUser />}
      />
      
      <InputField
        label="Email *"
        name="email"
        type="email"
        value={currentAttachment.email || ''}
        onChange={onInputChange}
        required
        icon={<FiMail />}
      />
      
      <InputField
        label="Phone Number *"
        name="phone_number"
        type="tel"
        value={currentAttachment.phone_number || ''}
        onChange={onInputChange}
        required
        icon={<FiPhone />}
      />
      
      <InputField
        label="Residential Location *"
        name="residential_location"
        value={currentAttachment.residential_location || ''}
        onChange={onInputChange}
        required
        icon={<FiMapPin />}
      />
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Gender *</label>
        <select
          name="gender"
          value={currentAttachment.gender || 'Male'}
          onChange={onInputChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      
      <InputField
        label="Date of Birth *"
        name="date_of_birth"
        type="date"
        value={currentAttachment.date_of_birth || ''}
        onChange={onInputChange}
        required
        icon={<FiCalendar />}
      />
    </div>
  </div>
);
