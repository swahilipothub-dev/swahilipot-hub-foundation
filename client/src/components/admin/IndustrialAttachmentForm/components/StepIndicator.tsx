import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

interface StepIndicatorProps {
  activeStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ activeStep, totalSteps }) => (
  <div className="flex items-center justify-center mb-8">
    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
      <div key={step} className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
          step <= activeStep 
            ? 'bg-blue-600 border-blue-600 text-white' 
            : 'bg-white border-gray-300 text-gray-500'
        }`}>
          {step < activeStep ? (
            <FiCheckCircle className="w-4 h-4" />
          ) : (
            <span className="text-sm font-medium">{step}</span>
          )}
        </div>
        {step < totalSteps && (
          <div className={`w-16 h-0.5 mx-2 ${
            step < activeStep ? 'bg-blue-600' : 'bg-gray-300'
          }`} />
        )}
      </div>
    ))}
  </div>
);
