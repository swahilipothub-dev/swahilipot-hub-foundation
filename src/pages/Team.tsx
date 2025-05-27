import { useEffect } from 'react';

function TeamSection() {
  useEffect(() => {
    // You can add component mount logic here if needed
  }, []);

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        "At Swahilipot Hub, we're driven by a passionate and diverse team of innovators, creators, and visionaries. 
        Each member brings unique expertise—from tech development and design to strategic leadership—united by a shared mission to empower communities through technology and creativity. 
        Together, we foster collaboration, mentorship, and groundbreaking solutions, ensuring Swahilipot Hub remains a catalyst for growth and opportunity in the digital space."
      </p>
    </div>
  );
}

export default TeamSection;