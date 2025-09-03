import React from 'react';
import { IndustrialAttachment } from '../../types/industrialAttachment';

interface StatementsTabProps {
  currentAttachment: Partial<IndustrialAttachment>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const StatementsTab: React.FC<StatementsTabProps> = ({
  currentAttachment,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">About Yourself *</label>
          <textarea
            name="about_yourself"
            value={currentAttachment.about_yourself || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Tell us about yourself, your background, and interests..."
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Community Engagement Statement *</label>
          <textarea
            name="community_engagement_statement"
            value={currentAttachment.community_engagement_statement || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Describe your community engagement experience and commitment..."
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Understanding of Swahilipot *</label>
          <textarea
            name="understanding_of_swahilipot"
            value={currentAttachment.understanding_of_swahilipot || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Share your understanding of Swahilipot's mission and values..."
            required
          />
        </div>
      </div>
    </div>
  );
};
