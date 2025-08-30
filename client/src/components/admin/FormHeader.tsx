import React from 'react';
import { FiX } from 'react-icons/fi';
import { IndustrialAttachment } from '../../types/industrialAttachment';

interface FormHeaderProps {
  currentAttachment: Partial<IndustrialAttachment>;
  onClose: () => void;
}

export const FormHeader: React.FC<FormHeaderProps> = ({
  currentAttachment,
  onClose,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">
            {currentAttachment?._id ? 'Edit' : 'Add New'} Industrial Attachment Application
          </h3>
          <p className="text-blue-100 text-sm mt-1">
            {currentAttachment?._id ? 'Update application details' : 'Create a new application'}
          </p>
        </div>
        <button 
          onClick={onClose} 
          className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        >
          <FiX className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
