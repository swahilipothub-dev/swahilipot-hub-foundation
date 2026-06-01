import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

const IndustrialAttachment: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Banner */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero/hero1.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Industrial Attachment Program</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4">
              Gain hands-on experience in technology, entrepreneurship, and social impact at Swahilipot Hub.
            </p>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/programs" className="hover:text-white transition-colors">Programs</a>
              <span>/</span>
              <span className="text-swahilipot-300">Industrial Attachment</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">About the Program</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Join Our Attachment Program</h2>
                <div className="w-12 h-1 bg-swahilipot-600 mb-6"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join SwahiliPot Hub's Industrial Attachment program and immerse yourself in a vibrant community of
                  innovators, creators, and leaders. This program is designed for students eager to gain hands-on
                  experience in technology, entrepreneurship, and social impact.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsZT6FAg_dt9OOmPJZCC6k4lrMn1iUoZi-B_c3k9sVrLXOJw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-8 py-3 rounded font-semibold transition-colors"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose SwahiliPot Hub?</h3>
                <ul className="space-y-3">
                  {[
                    "Work on real-world projects and build your portfolio",
                    "Collaborate with experienced mentors and industry professionals",
                    "Access workshops, networking events, and career guidance",
                    "Engage in community-driven initiatives and make a difference",
                    "Flexible opportunities for both on-site and remote participation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-white rounded-lg shadow-sm p-4 border-l-4 border-swahilipot-600">
                      <CheckCircle2 size={16} className="text-swahilipot-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-14">
              <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Details</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Program Highlights</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              {[
                { title: "Eligibility", desc: "Open to students in Year 1–Year 6 from recognized institutions." },
                { title: "Departments", desc: "Tech, Engineering, Creatives, Communication, Community Engagement, and more." },
                { title: "Duration", desc: "Flexible start dates, typically 3–6 months." },
                { title: "Support", desc: "Guidance from mentors, access to resources, and career development support." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-swahilipot-600 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* How to Apply */}
            <div className="bg-swahilipot-600 rounded-2xl p-10 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">How to Apply</h3>
                <div className="w-10 h-1 bg-white/40 mx-auto"></div>
              </div>
              <ol className="space-y-4 max-w-xl mx-auto mb-8">
                {[
                  "Review the program details and eligibility criteria above.",
                  "Prepare your resume/CV and cover letter (URLs required).",
                  "Click Apply Now to fill out the application form.",
                  "Submit your application and await confirmation with your reference ID.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-white/90 text-sm leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsZT6FAg_dt9OOmPJZCC6k4lrMn1iUoZi-B_c3k9sVrLXOJw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-swahilipot-700 hover:bg-swahilipot-50 font-semibold px-10 py-3.5 rounded transition-colors"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
                <p className="mt-4 text-white/70 text-sm">
                  Questions?{" "}
                  <a href="/contact" className="text-white underline hover:text-swahilipot-200">Contact our team</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndustrialAttachment;
