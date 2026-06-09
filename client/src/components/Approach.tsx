import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGraduationCap,
  faHandshake,
  faRocket,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    num: "01",
    icon: faMagnifyingGlass,
    title: "Identify",
    desc: "We seek out talented, ambitious young people across the Coast who lack access to platforms that match their potential — and open our doors wide.",
    accent: "from-swahilipot-600 to-swahilipot-700",
    border: "border-swahilipot-200",
    textAccent: "text-swahilipot-600",
    bgLight: "bg-swahilipot-50",
  },
  {
    num: "02",
    icon: faGraduationCap,
    title: "Equip",
    desc: "Through structured programmes in technology, creative arts, and entrepreneurship, we give youth practical skills and the confidence to use them.",
    accent: "from-amber-500 to-amber-600",
    border: "border-amber-200",
    textAccent: "text-amber-600",
    bgLight: "bg-amber-50",
  },
  {
    num: "03",
    icon: faHandshake,
    title: "Mentor",
    desc: "Every participant is paired with a dedicated mentor and supported by our Case Management team — ensuring no one walks the journey alone.",
    accent: "from-teal-600 to-teal-700",
    border: "border-teal-200",
    textAccent: "text-teal-600",
    bgLight: "bg-teal-50",
  },
  {
    num: "04",
    icon: faRocket,
    title: "Launch",
    desc: "We connect graduates to investors, employers, and markets — then continue supporting them as they grow, scale, and give back to the next cohort.",
    accent: "from-purple-600 to-purple-700",
    border: "border-purple-200",
    textAccent: "text-purple-600",
    bgLight: "bg-purple-50",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal reveal-up" data-reveal>
          <div>
            <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Approach
            </h2>
            <div className="w-12 h-1 bg-swahilipot-600 mt-4" />
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-md md:text-right">
            A four-step model that takes a young person from untapped potential to
            confident contributor — and beyond.
          </p>
        </div>

        {/* ── Steps ──────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative rounded-2xl border ${step.border} ${step.bgLight} p-7 flex flex-col group hover:shadow-lg transition-all duration-300 reveal reveal-up`}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number badge */}
              <span className={`absolute -top-3.5 left-6 inline-block bg-gradient-to-br ${step.accent} text-white text-xs font-black tracking-widest px-3 py-1 rounded-full shadow`}>
                {step.num}
              </span>

              {/* Icon circle */}
              <div className={`w-12 h-12 rounded-xl ${step.bgLight} border ${step.border} flex items-center justify-center mb-5 mt-3 group-hover:scale-110 transition-transform`}>
                <FontAwesomeIcon icon={step.icon} className={`${step.textAccent} text-lg`} />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${step.textAccent}`}>{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{step.desc}</p>

              {/* Connector arrow for large screens */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm">
                  <FontAwesomeIcon icon={faArrowRight} className="text-gray-400 text-xs" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom row: quote + CTA ─────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Quote card */}
          <div
            className="relative rounded-2xl overflow-hidden text-white p-8 md:p-10 reveal reveal-left"
            data-reveal
            style={{
              backgroundImage: "url('/images/theme-color/SPH Brand Pattern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-swahilipot-950/75" />
            <div className="relative z-10">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-amber-400/40 text-4xl mb-4 block" />
              <p className="text-white text-lg md:text-xl font-semibold leading-snug mb-6">
                "The approach here is different. They don't just train you — they stay with you until you make it."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-swahilipot-600 flex items-center justify-center font-bold text-white text-sm">
                  SK
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Salma Khamisi</p>
                  <p className="text-white/45 text-xs">Scale Up alumni · Mombasa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why it works */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 reveal reveal-right" data-reveal>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Why it works</h3>
            <p className="text-gray-500 text-sm mb-6">
              Our model is built on three convictions that guide every decision we make.
            </p>
            <ul className="space-y-5">
              {[
                { title: "Holistic support", body: "Skills training alone isn't enough. Mentorship, case management, and community are just as critical." },
                { title: "Long-term relationships", body: "We don't hand off and move on. Alumni stay connected to the ecosystem and pay it forward." },
                { title: "Local context", body: "Every programme is designed with and for the Coast — honouring its culture, languages, and economy." },
              ].map((pt) => (
                <li key={pt.title} className="flex gap-4">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-swahilipot-600 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10.28 2.28L4 8.56 1.72 6.28A1 1 0 0 0 .28 7.72l3 3a1 1 0 0 0 1.44 0l7-7a1 1 0 0 0-1.44-1.44z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{pt.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{pt.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-swahilipot-600 font-semibold text-sm hover:text-swahilipot-800 transition-colors group"
            >
              Read more about us
              <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Approach;
