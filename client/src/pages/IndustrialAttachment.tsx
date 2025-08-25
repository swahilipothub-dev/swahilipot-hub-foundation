import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IndustrialAttachment: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen w-full py-0 px-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col md:flex-row gap-10 items-stretch">
        <div className="flex-1 flex flex-col justify-center gap-10 px-12 py-16">
          <div className="mb-6">
            <h1 className="text-5xl font-extrabold mb-4 text-blue-700 drop-shadow-lg tracking-tight">
              Industrial Attachment Program
            </h1>
            <p className="mb-6 text-xl text-gray-700 leading-relaxed">
              Join SwahiliPot Hub’s Industrial Attachment program and immerse yourself in a vibrant community of innovators,
              creators, and leaders. This program is designed for students eager to gain hands-on experience in technology,
              entrepreneurship, and social impact.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScsZT6FAg_dt9OOmPJZCC6k4lrMn1iUoZi-B_c3k9sVrLXOJw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 transition-transform duration-200"
            >
              Apply Now
            </a>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3 text-blue-600">Why Choose SwahiliPot Hub?</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-800">
              <li className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-400">Work on real-world projects and build your portfolio</li>
              <li className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-400">Collaborate with experienced mentors and industry professionals</li>
              <li className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-400">Access workshops, networking events, and career guidance</li>
              <li className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-400">Engage in community-driven initiatives and make a difference</li>
              <li className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-400">Flexible opportunities for both on-site and remote participation</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">Program Highlights</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-100 p-6 rounded-xl shadow-lg border border-blue-300">
                <h3 className="font-bold mb-2 text-blue-700">Eligibility</h3>
                <p>Open to students in Year 1–Year 6 from recognized institutions.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl shadow-lg border border-blue-300">
                <h3 className="font-bold mb-2 text-blue-700">Departments</h3>
                <p>Tech, Engineering, Creatives, Communication, Community Engagement, and more.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl shadow-lg border border-blue-300">
                <h3 className="font-bold mb-2 text-blue-700">Duration</h3>
                <p>Flexible start dates, typically 3–6 months.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl shadow-lg border border-blue-300">
                <h3 className="font-bold mb-2 text-blue-700">Support</h3>
                <p>Guidance from mentors, access to resources, and career development support.</p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">How to Apply</h2>
            <ol className="list-decimal pl-8 text-gray-800 space-y-2 text-lg">
              <li>Review the program details and eligibility criteria above.</li>
              <li>Prepare your resume/CV and cover letter (URLs required).</li>
              <li>Click <span className="font-bold">Apply Now</span> to fill out the application form.</li>
              <li>Submit your application and await confirmation with your reference ID.</li>
            </ol>
          </div>
          <div className="mb-4 text-center text-gray-600">
            <span className="inline-block bg-blue-50 px-4 py-2 rounded-full shadow">
              Questions? <a href="/contact" className="text-blue-600 underline font-semibold">Contact our team</a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndustrialAttachment;