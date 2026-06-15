import Navbar from "@/components/Navbar";
import ImpactSection from "@/components/Impact";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faWifi, faGraduationCap, faSeedling } from "@fortawesome/free-solid-svg-icons";

const successStories = [
  {
    name: "Maria Kimani",
    role: "Tech Entrepreneur",
    quote: "Swahilipot Hub gave me the skills and confidence to start my own tech company. Today, I employ five other youths from my community.",
    title: "Maria's Tech Journey",
  },
  {
    name: "James Odhiambo",
    role: "Visual Artist",
    quote: "The arts program at Swahilipot helped me find my voice. Our collective now showcases East African art internationally.",
    title: "James' Art Collective",
  },
];

const reportStats = [
  { value: "87%", label: "of participants find employment within 6 months" },
  { value: "90%", label: "of our startups survive beyond 2 years" },
  { value: "65%", label: "of our members are from underserved communities" },
  { value: "4.8/5", label: "average satisfaction rating from participants" },
];

const Impact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow theme-bg-pattern-1">
        {/* Page Banner */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/img/general-people/image9.jpeg')", backgroundPosition: "center 20%" }}></div>
          <div className="absolute inset-0 bg-swahilipot-900/75"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Impact</h1>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-swahilipot-300">Impact</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Stats */}
        <ImpactSection />

        {/* Opportunity Youth Cards */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Our Framework</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Opportunity Youth</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We measure our success through three stages of transformation for every young person we serve.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: faWifi,
                  stage: "Stage 01",
                  title: "Opportunity Youth Connected",
                  subtitle: "Reached and Engaged",
                  description: "Opportunity Youth (OY) who have been reached and engaged by Swahilipot Hub Foundation through outreach and awareness activities, including social media platforms, community events, workshops, seminars, forums, and registrations on Swahilipot Hub programs and platforms.",
                  image: "/img/general-people/image22.jpeg",
                  overlay: "bg-swahilipot-900/75",
                },
                {
                  icon: faGraduationCap,
                  stage: "Stage 02",
                  title: "Opportunity Youth Improved",
                  subtitle: "Skills and Capacity",
                  description: "Opportunity Youth (OY) who have actively participated in Swahilipot Hub Foundation programs and services, resulting in enhanced knowledge, skills, confidence, networks, or readiness for employment, entrepreneurship, and personal development.",
                  image: "/img/general-people/image20.jpeg",
                  overlay: "bg-teal-900/75",
                },
                {
                  icon: faSeedling,
                  stage: "Stage 03",
                  title: "Opportunity Youth Transformed",
                  subtitle: "Sustainable Livelihoods",
                  description: "Opportunity Youth (OY) who have achieved sustainable livelihood outcomes as a result of Swahilipot Hub Foundation interventions. This includes securing paid internships, obtaining dignified and stable employment, improving the quality of existing employment through better wages or working conditions, or establishing income-generating businesses. Transformation has also been supported through enabling services such as mentorship, and psychosocial support.",
                  image: "/img/general-people/image7.jpeg",
                  overlay: "bg-green-900/75",
                },
              ].map((card) => (
                <div key={card.title} className="relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group min-h-96">
                  {/* Background image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Solid colour overlay */}
                  <div className={`absolute inset-0 ${card.overlay}`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 block">{card.stage}</span>
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={card.icon} className="text-xl text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold leading-snug mb-2">{card.title}</h3>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-white/20 backdrop-blur-sm text-white border border-white/20 self-start">
                      {card.subtitle}
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories + Report */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              {/* Stories */}
              <div>
                <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Real Lives Changed</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Success Stories</h2>
                <div className="w-12 h-1 bg-swahilipot-600 mb-6"></div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our impact goes beyond numbers. Here are real stories of youths whose lives have been transformed through our programs.
                </p>

                <div className="space-y-6">
                  {successStories.map((story) => (
                    <div key={story.name} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-swahilipot-600 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{story.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">"{story.quote}"</p>
                      <p className="text-swahilipot-600 font-semibold text-sm">{story.name}, {story.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Report */}
              <div className="bg-swahilipot-600 rounded-2xl p-8 text-white">
                <span className="inline-block text-swahilipot-200 font-semibold uppercase tracking-wider text-xs mb-3">By the Numbers</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Impact Report</h2>
                <div className="w-10 h-1 bg-white/40 mb-6"></div>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  Our annual impact reports showcase the measurable change we're making in communities across East Africa.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {reportStats.map((stat) => (
                    <div key={stat.value} className="bg-white/15 rounded-xl p-4 text-center">
                      <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                      <p className="text-white/75 text-xs leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#download-report"
                  className="inline-flex items-center gap-2 bg-white text-swahilipot-700 hover:bg-swahilipot-50 font-semibold px-6 py-3 rounded transition-colors text-sm"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-sm" /> Download 2024 Impact Report
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
