import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faBullseye, faClock, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAboutPageSEO } from "@/hooks/useSEO";
import AnimatedWord from "@/components/AnimatedWord";
import Typewriter from "@/components/Typewriter";

const heroImages = [
  "/images/about/about-hero-1.jpg",
  "/images/about/about-hero-2.jpg",
  "/images/about/about-hero.jpg"
];

const values = [
  { icon: faUsers, title: "Community", description: "We believe in the power of community collaboration and support." },
  { icon: faHeart, title: "Empowerment", description: "We strive to give youth the tools and confidence to succeed." },
  { icon: faBullseye, title: "Innovation", description: "We encourage creative solutions to local and global challenges." },
  { icon: faClock, title: "Sustainability", description: "We focus on long-term impact and sustainable development." },

  {
    icon: Users,
    title: "Community",
    description: "We build partnerships, share resources, and uplift each other through collaboration."
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We equip youth with skills, mentorship, and real opportunities to lead change."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We solve local challenges with creative thinking, digital tools, and youth-led ideas."
  },
  {
    icon: Clock,
    title: "Sustainability",
    description: "We create lasting impact through green practices and future-focused programs."
  }

];

const About = () => {
  useAboutPageSEO();

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleValues, setVisibleValues] = useState<boolean[]>(new Array(values.length).fill(false));
  const valueRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleValues[index]) {
            setVisibleValues((prev) => {
              if (prev[index]) {
                return prev;
              }
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    valueRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleValues]);

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

        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[520px]">
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url('${image}')` }}
                aria-hidden="true"
              />
            ))}
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-gradient-blue">Swahilipot Hub Foundation</span>
              </h1>
              <p className="text-xl text-gray-100 font-medium tracking-wide">
                <Typewriter words={["Driving Community Innovation"]} />
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-story-slide">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-swahilipot-600 text-white font-bold">01</span>
                    <p className="text-sm md:text-base uppercase tracking-wide text-swahilipot-600 font-semibold">Our Story</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                    A bold journey from community roots to youth-led innovation.
                  </h2>
                </div>
                <div
                  className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_28px_70px_rgba(13,141,222,0.16)] p-8 md:p-10 story-font bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/about/about-hero-3.jpg')" }}
                >
                  <div className="absolute inset-0 bg-slate-950/70" aria-hidden="true" />
                  <div className="relative">
                    <p className="story-paragraph mb-6 text-white">
                      Swahilipot Hub Foundation is a non-profit organization that meaningfully engages and empowers
                      youth aged 18 to 35, helping them unlock their full potential. Based in the coastal city of
                      Mombasa, Kenya, we are registered with the NGO Coordination Board of Kenya.
                    </p>
                    <p className="story-paragraph mb-6 text-white">
                      In 2016, Mahmoud Noor (also known as Mentor001) founded Swahilipot Hub with support from the National
                      Museums of Kenya (NMK), Seacom, the ICT Authority, and Cisco.
                    </p>
                    <p className="story-paragraph text-white">
                      We began as a community-based organization (CBO) focused on technology and innovation. Since then,
                      we have grown into a registered NGO with a diverse range of programs that support youth skills,
                      entrepreneurship, employment, and sustainable community development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="documentary-frame mx-auto w-full rounded-[2.5rem] bg-swahilipot-950/5 overflow-hidden shadow-[0_35px_90px_rgba(15,23,42,0.18)] animate-story-slide-right">
                  <div className="inner-video relative aspect-video overflow-hidden rounded-[2.5rem] bg-slate-950/95 shadow-[0_30px_60px_rgba(15,23,42,0.28)]">
                    <iframe
                        src="https://www.youtube.com/embed/bscypssE8Ms?autoplay=0"
                        className="w-full h-full object-cover bg-black"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Swahilipot Documentary YouTube video"
                    ></iframe>
                    <button
                        onClick={() => window.open('https://www.youtube.com/watch?v=bscypssE8Ms', '_blank')}
                        className="absolute inset-0 flex items-center justify-center bg-black/70 hover:bg-black/60 transition duration-300"
                    >
                      <p className="text-white text-2xl font-bold">Play Documentary</p>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-center animate-story-slide-right">
                  <div className="logo-badge flex items-center justify-center rounded-3xl bg-white/95 p-4 shadow-lg shadow-slate-950/20">
                    <img
                      src="/sph-logo.png"
                      alt="Swahilipot Hub Foundation Logo"
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>

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

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-700 mx-auto max-w-2xl mb-4">
                Our values are the foundation for every program, partnership, and impact we create.
              </p>
              <p className="text-gray-600 mx-auto max-w-2xl">
                We center community, empowerment, innovation, and sustainability in everything we do.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const isVisible = visibleValues[index];
                return (
                  <div
                    key={index}
                    ref={(el) => (valueRefs.current[index] = el)}
                    data-index={index}
                    className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-700 ${
                      isVisible ? "animate-pop-in" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
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
