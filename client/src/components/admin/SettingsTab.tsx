import React from 'react';
import { IndustrialAttachment } from '../../types/industrialAttachment';

interface SettingsTabProps {
  currentAttachment: Partial<IndustrialAttachment>;
  setCurrentAttachment: React.Dispatch<React.SetStateAction<Partial<IndustrialAttachment>>>;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  currentAttachment,
  setCurrentAttachment,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-700 mb-4">Application Settings</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Can attend onsite</label>
              <p className="text-xs text-gray-500">Student can attend physical location</p>
            </div>
            <input
              type="checkbox"
              name="can_attend_onsite"
              checked={currentAttachment.can_attend_onsite || false}
              onChange={(e) => setCurrentAttachment(prev => ({ ...prev, can_attend_onsite: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Agree to terms *</label>
              <p className="text-xs text-gray-500">Student agrees to terms and conditions</p>
            </div>
            <input
              type="checkbox"
              name="agree_terms"
              checked={currentAttachment.agree_terms || false}
              onChange={(e) => setCurrentAttachment(prev => ({ ...prev, agree_terms: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Agree to communications</label>
              <p className="text-xs text-gray-500">Student agrees to receive communications</p>
            </div>
            <input
              type="checkbox"
              name="agree_communications"
              checked={currentAttachment.agree_communications || false}
              onChange={(e) => setCurrentAttachment(prev => ({ ...prev, agree_communications: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Application Accepted</label>
              <p className="text-xs text-gray-500">Mark application as accepted</p>
            </div>
            <input
              type="checkbox"
              name="is_accepted"
              checked={currentAttachment.is_accepted || false}
              onChange={(e) => setCurrentAttachment(prev => ({ ...prev, is_accepted: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Application Archived</label>
              <p className="text-xs text-gray-500">Archive this application</p>
            </div>
            <input
              type="checkbox"
              name="is_archived"
              checked={currentAttachment.is_archived || false}
              onChange={(e) => setCurrentAttachment(prev => ({ ...prev, is_archived: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
