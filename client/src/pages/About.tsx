import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faBullseye, faClock, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAboutPageSEO } from "@/hooks/useSEO";

const values = [
  { icon: faUsers, title: "Community", description: "We believe in the power of community collaboration and support." },
  { icon: faHeart, title: "Empowerment", description: "We strive to give youth the tools and confidence to succeed." },
  { icon: faBullseye, title: "Innovation", description: "We encourage creative solutions to local and global challenges." },
  { icon: faClock, title: "Sustainability", description: "We focus on long-term impact and sustainable development." },
];

const About = () => {
  useAboutPageSEO();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Banner */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero/hero1.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Us</h1>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-swahilipot-300">About Us</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Swahilipot Hub Foundation</h2>
                <div className="w-12 h-1 bg-swahilipot-600 mb-6"></div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Swahilipot Hub Foundation is a non-profit organization that meaningfully engages and empowers
                  youth (18 to 35 years) to enable them to unleash their full potential. Based in the coastal city
                  of Mombasa in Kenya, it is regulated by the NGO Coordination Board of Kenya.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  In 2016, Mahmoud Noor (alias Mentor001) took action and founded Swahilipot Hub with support from
                  National Museums of Kenya (NMK), Seacom, ICT Authority, and Cisco.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  It started as a community-based organization (CBO) with programs focused on technology &amp;
                  innovation. It has grown over the years to become a non-profit organization (NGO) with diverse
                  program areas and reach.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Founded 2016", "NGO Regulated", "Mombasa, Kenya", "Youth 18-35"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 text-sm text-swahilipot-700 bg-swahilipot-50 px-3 py-1.5 rounded-full font-medium">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-xs" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/bscypssE8Ms?autoplay=0"
                    className="w-full h-full object-cover rounded-2xl"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Swahilipot Documentary"
                  ></iframe>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-swahilipot-100 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-swahilipot-50 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-14">
              <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">What Guides Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Core Values</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and impact at Swahilipot Hub Foundation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group text-center">
                  <div className="w-14 h-14 rounded-full bg-swahilipot-100 group-hover:bg-swahilipot-600 flex items-center justify-center mb-5 mx-auto transition-colors">
                    <FontAwesomeIcon icon={value.icon} className="text-xl text-swahilipot-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Mission CTA */}
        <section className="py-16 md:py-24 bg-swahilipot-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you're a youth looking to develop your skills, a mentor wanting to share your expertise,
              or a donor interested in supporting our cause, there are many ways to get involved with
              Swahilipot Hub Foundation.
            </p>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSe8xVQEK2VP89CYE4166i6Vr6iriaA1x1D5ecVBCVY5MuqP3g/viewform?usp=dialog"
              target="_blank"
              className="inline-block bg-white text-swahilipot-700 hover:bg-swahilipot-50 font-semibold px-10 py-3.5 rounded transition-colors"
            >
              Join the Youth Database
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
