import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faLightbulb, faUsers, faBookOpen, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const programCategories = [
  {
    id: "tech",
    label: "Technology",
    icon: faCode,
    programs: [
      { title: "Industrial Attachment", description: "A structured program offering hands-on experience in software development, IT infrastructure, and digital innovation. Students work on real projects while receiving mentorship from industry professionals.", duration: "3 months", frequency: "Intake" },
      { title: "DataCamp Scholarship Program", description: "In partnership with DataCamp, Swahilipot Hub offers comprehensive data science and analytics learning scholarships. Selected participants receive full access to DataCamp's premium courses, projects, and certifications.", duration: "6 months", frequency: "Quarterly intake" },
      { title: "Digital Literacy Program (Digital Boat)", description: "A hands-on, community-driven program designed to bridge the digital divide by equipping learners with practical computer, internet, data, and introductory AI skills aligned with real-world needs.", duration: "12 weeks", frequency: "Ongoing" },
      { title: "SPH Cisco Networking Academy", description: "Internationally aligned Cisco curriculum through structured, instructor-led classes providing industry-relevant training and lab practice while maintaining affordability.", duration: "8–12 weeks", frequency: "Intake" },
      { title: "DigiKen (Digital Platforms Kenya)", description: "Supported by a UN Joint SDG Programme, DigiKen utilizes a hybrid learning model to ensure Kenya's digital transformation leaves no one behind.", duration: "36-month programme", frequency: "Intake" },
      { title: "Programming Foundation", description: "An introductory software development program designed to equip learners with essential programming knowledge and practical development skills.", duration: "3 months", frequency: "Ongoing" },
    ],
  },
  {
    id: "arts",
    label: "Creative & Arts",
    icon: faPalette,
    programs: [
      { title: "Talent to Income", description: "A comprehensive program that helps individuals transform their creative talents into sustainable income streams through market exposure.", duration: "8 weeks", frequency: "Quarterly" },
      { title: "SCEP", description: "Swahilipothub Creatives Empowerment Program — A comprehensive initiative empowering artists through skill development, networking, and professional growth opportunities.", duration: "4 weeks", frequency: "Bi-monthly" },
      { title: "Partnership & Collaboration", description: "Connecting artists with opportunities through partnerships with galleries, art organizations, and cultural institutions.", duration: "Ongoing", frequency: "Weekly sessions" },
    ],
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    icon: faLightbulb,
    programs: [
      { title: "Business Fundamentals", description: "Introduction to business planning, marketing, and financial management.", duration: "4 weeks", frequency: "Monthly" },
      { title: "Pitch Perfect", description: "Training and practice in pitching business ideas to investors.", duration: "2 weeks", frequency: "Quarterly" },
      { title: "Mentorship Program", description: "One-on-one guidance from established entrepreneurs and professionals.", duration: "3 months", frequency: "Quarterly" },
    ],
  },
  {
    id: "youth",
    label: "Youth Development",
    icon: faUsers,
    programs: [
      { title: "Leadership Academy", description: "Developing leadership skills and community engagement strategies.", duration: "8 weeks", frequency: "Bi-annually" },
      { title: "Peer Mentoring", description: "Training youth to become mentors in their communities.", duration: "6 weeks", frequency: "Quarterly" },
      { title: "Career Guidance", description: "Workshops on career planning, resume building, and job searching.", duration: "2 weeks", frequency: "Monthly" },
      { title: "Campus Ambassador Program", description: "A strategic partnership with academic institutions designed to bridge the gap between academic learning and industry requirements.", duration: "Year-long", frequency: "Ongoing" },
    ],
  },
];

const Programs = () => {
  return (
    <>
      <Navbar />
      <main className="theme-bg-pattern-1">
        {/* Page Banner */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 theme-bg-pattern-2"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Programs</h1>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-swahilipot-300">Programs</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Programs Tabs */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-14">
              <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Explore</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">All Programs</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how we're empowering youth through our specialized programs in technology,
                arts, entrepreneurship, and more.
              </p>
            </div>

            <Tabs defaultValue="tech" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent h-auto">
                {programCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center gap-2 px-5 py-2.5 rounded border border-gray-200 data-[state=active]:bg-swahilipot-600 data-[state=active]:text-white data-[state=active]:border-swahilipot-600 text-gray-700 transition-all"
                  >
                    <FontAwesomeIcon icon={cat.icon} className="text-sm" />
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {programCategories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {cat.programs.map((program, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                        <div className="bg-swahilipot-600 px-6 py-4">
                          <h3 className="text-white font-bold text-base">{program.title}</h3>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 text-sm leading-relaxed mb-5">{program.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
                            <span className="flex items-center gap-1.5">
                              <FontAwesomeIcon icon={faBookOpen} className="text-swahilipot-500 text-xs" />
                              {program.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FontAwesomeIcon icon={faClock} className="text-swahilipot-500 text-xs" />
                              {program.frequency}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center mt-10">
              <a
                href="https://www.swahilipotfm.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-8 py-3 rounded font-semibold transition-colors"
              >
                Listen to Swahilipot FM <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </section>

        {/* Program Approach */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">How We Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Program Approach</h2>
                <div className="w-12 h-1 bg-swahilipot-600 mb-6"></div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At Swahilipot Hub, we believe in a holistic approach to youth development. Our programs are
                  designed to not only build technical skills but also to foster critical thinking, collaboration,
                  and creativity.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Each program includes hands-on projects, mentorship from industry professionals, and
                  opportunities to connect with a community of like-minded peers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We continually update our curriculum to ensure it remains relevant to current industry needs
                  and provides participants with the skills needed for success in a rapidly changing world.
                </p>
              </div>
              <div className="bg-swahilipot-600 rounded-2xl p-10 text-white text-center">
                <h3 className="text-2xl font-bold mb-6">Ready to join a program?</h3>
                <p className="text-white/80 mb-8">Apply now and start your journey with Swahilipot Hub Foundation.</p>
                <Link
                  to="/industrial-attachment/apply"
                  className="inline-block bg-white text-swahilipot-700 hover:bg-swahilipot-50 font-semibold px-8 py-3 rounded transition-colors"
                >
                  Apply for Attachment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
