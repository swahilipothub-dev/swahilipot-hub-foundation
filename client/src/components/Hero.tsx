import { Button } from "@/components/ui/button";
import CountOnHover from "./CountOnHover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const heroStats = [
  { count: 5000, suffix: "+", label: "Youth Impacted" },
  { count: 200, suffix: "+", label: "Projects Launched" },
  { count: 150, suffix: "+", label: "Startups Incubated" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero/hero1.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-swahilipot-950/75"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-swahilipot-950/90 via-swahilipot-950/60 to-transparent"></div>

      <div className="container-custom relative z-10 py-24">
        <div className="max-w-2xl">
          <span className="inline-block bg-swahilipot-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded mb-6 reveal reveal-left" data-reveal>
            Empowering East African Youth
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 reveal reveal-left" data-reveal>
            Building a <span className="text-swahilipot-400">Brighter Future</span>{" "}
            For Our Youth
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl reveal reveal-right" data-reveal>
            Swahilipot Hub Foundation nurtures youth talent through technology, arts,
            and entrepreneurship in the heart of East Africa.
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

          <div className="mt-14 flex flex-wrap gap-8">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="text-center reveal reveal-up" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <p className="text-3xl font-bold text-swahilipot-400">
                  <CountOnHover target={stat.count} suffix={stat.suffix} />
                </p>
                <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-10">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
