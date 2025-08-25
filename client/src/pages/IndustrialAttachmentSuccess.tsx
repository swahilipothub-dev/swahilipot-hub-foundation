import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const IndustrialAttachmentSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ref = location.state?.ref || '';
  return (
    <div className="max-w-xl mx-auto py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
      <p className="mb-4">Thank you for applying to the Industrial Attachment program. Your reference ID is:</p>
      <div className="font-mono text-lg bg-gray-100 p-2 mb-6">{ref}</div>
      <p className="mb-6">We will review your application and contact you with next steps. For questions, reach out to our team.</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default IndustrialAttachmentSuccess;
