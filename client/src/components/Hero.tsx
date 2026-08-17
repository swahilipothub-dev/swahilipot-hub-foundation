import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const heroSlides = [
  "/img/theatre.jpg",
  "/img/general-people/image5.jpeg",
  "/img/general-people/image7.jpeg",
  "/img/general-people/image17.jpeg",
  "/img/general-people/image19.jpeg",
];

const SLIDE_DURATION = 6000;

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-x-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100 hero-slide-active" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={slide}
              alt=""
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradients — lighter so images show through */}
      <div className="absolute inset-0 bg-swahilipot-950/60"></div>

      {/* Content */}
      <div className="container-custom relative z-10 py-24 pb-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-swahilipot-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded mb-6 reveal reveal-left" data-reveal>
            Empowering East African Youth
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 reveal reveal-left" data-reveal>
            Building a <span className="text-swahilipot-400">Brighter Future</span> For Our Youth
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl reveal reveal-right" data-reveal>
            Swahilipot Hub Foundation nurtures youth talent through technology, arts, and entrepreneurship in the heart of East Africa.
          </p>

          <div className="flex flex-wrap gap-4 reveal reveal-up" data-reveal>
            <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-500 text-white px-8 h-12 text-base font-semibold rounded transition-all duration-300 shadow-lg shadow-swahilipot-900/40" asChild>
              <Link to="/programs" className="flex items-center gap-2">
                Discover Programs <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-swahilipot-800 px-8 h-12 text-base font-semibold rounded transition-all duration-300 bg-transparent" asChild>
              <Link to="/about" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCirclePlay} /> Our Story
              </Link>
            </Button>
          </div>

          {/* Mission & Vision */}
          <div className="mt-14 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-300 mb-3">Mission</p>
              <p className="text-slate-100 leading-relaxed text-sm">
                To empower and transform youth by providing access to safe spaces, building their capacity, promoting collaboration and linking them to opportunities for their holistic growth and development.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-300 mb-3">Vision</p>
              <p className="text-slate-200 leading-relaxed text-sm">
                'Transformed youth, thriving communities'
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-10">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
