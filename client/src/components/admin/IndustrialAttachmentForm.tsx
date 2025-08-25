import React from 'react';
import { FiX } from 'react-icons/fi';
import { Props } from './IndustrialAttachmentForm/types';
import { TOTAL_STEPS } from './IndustrialAttachmentForm/constants';
import { useFormLogic } from './IndustrialAttachmentForm/hooks/useFormLogic';
import { StepIndicator } from './IndustrialAttachmentForm/components/StepIndicator';
import { 
  PersonalInformationStep,
  AcademicInformationStep,
  AdditionalInformationStep,
  PersonalStatementsStep
} from './IndustrialAttachmentForm/components/steps';

// Main Component
export const IndustrialAttachmentForm: React.FC<Props> = ({ attachment, isOpen, onClose, onSuccess }) => {
  const {
    currentAttachment,
    isSubmitting,
    activeStep,
    handleInputChange,
    handleReferenceChange,
    handleCheckboxChange,
    nextStep,
    prevStep,
    validateCurrentStep,
    handleSubmit,
  } = useFormLogic(attachment, isOpen, onClose, onSuccess);

  const renderStepContent = () => {
    const stepProps = {
      currentAttachment,
      onInputChange: handleInputChange,
      onReferenceChange: handleReferenceChange,
      onCheckboxChange: handleCheckboxChange,
    };

    switch (activeStep) {
      case 1:
        return <PersonalInformationStep {...stepProps} />;
      case 2:
        return <AcademicInformationStep {...stepProps} />;
      case 3:
        return <AdditionalInformationStep {...stepProps} />;
      case 4:
        return <PersonalStatementsStep {...stepProps} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[95vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {currentAttachment?._id ? 'Edit' : 'Add New'} Industrial Attachment Application
              </h3>
              <p className="text-blue-100 text-sm mt-1">Step {activeStep} of {TOTAL_STEPS}</p>
            </div>
            <button 
              type="button"
              onClick={onClose} 
              className="text-white hover:text-blue-200 transition-colors"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="px-6 py-4 bg-gray-50 flex-shrink-0">
          <StepIndicator activeStep={activeStep} totalSteps={TOTAL_STEPS} />
        </div>
        
        {/* Form Content */}
        <div className="px-6 py-6 overflow-y-auto flex-1">
          {renderStepContent()}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t flex-shrink-0">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={prevStep}
              disabled={activeStep === 1}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                activeStep === 1
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Previous
            </button>
            
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              
              {activeStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={() => {
                    if (validateCurrentStep()) {
                      nextStep();
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : (currentAttachment?._id ? 'Update' : 'Create')}
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
