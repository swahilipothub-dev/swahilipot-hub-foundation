import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>

      <div className="animate-slideUp bg-white rounded-3xl shadow-2xl p-12 max-w-md text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src="/sph-logo.png" alt="Swahilipot Hub Logo" className="h-20 w-auto" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Welcome to Swahilipot Hub
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Our website is currently being updated with new features and improvements.
        </p>

        <p className="text-gray-500 text-sm mb-8">
          Thank you for your patience. We'll be back soon with an even better experience!
        </p>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>Continue</span>
          <FontAwesomeIcon icon={faTimes} className="text-sm" />
        </button>

        {/* Dismiss info */}
        <p className="text-gray-400 text-xs mt-6">
          Click Continue to explore the site
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
