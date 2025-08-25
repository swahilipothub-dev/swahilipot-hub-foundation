import React from 'react';
import { StepProps } from '../../types';

export const PersonalStatementsStep: React.FC<StepProps> = ({ currentAttachment, onInputChange }) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Personal Statements</h3>
      <p className="text-sm text-gray-500">Tell us more about yourself and your goals</p>
    </div>
    
    <div className="space-y-6">
      {[
        { 
          name: 'about_yourself', 
          label: 'About Yourself *', 
          placeholder: 'Tell us about your background, interests, and what drives you...' 
        },
        { 
          name: 'community_engagement_statement', 
          label: 'Community Engagement Statement *', 
          placeholder: 'Describe your experience with community service and how you plan to contribute...' 
        },
        { 
          name: 'understanding_of_swahilipot', 
          label: 'Understanding of Swahilipot *', 
          placeholder: 'What do you know about Swahilipot Hub and how do you see yourself fitting in?' 
        },
      ].map(({ name, label, placeholder }) => (
        <div key={name} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <textarea
            name={name}
            value={currentAttachment[name as keyof typeof currentAttachment] as string || ''}
            onChange={onInputChange}
            placeholder={placeholder}
            rows={4}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none"
            required
          />
        </div>
      ))}
    </div>
  </div>
);
