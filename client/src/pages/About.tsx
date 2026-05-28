
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Heart, Target, Clock } from "lucide-react";
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
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
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
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-gray-700 mb-8">
                Whether you're a youth looking to develop your skills, a mentor wanting to share your expertise, 
                or a donor interested in supporting our cause, there are many ways to get involved with 
                Swahilipot Hub Foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe8xVQEK2VP89CYE4166i6Vr6iriaA1x1D5ecVBCVY5MuqP3g/viewform?usp=dialog" target="_blank">
                  <Button className="btn-primary">Join the Youth Database</Button>
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

export default About;
