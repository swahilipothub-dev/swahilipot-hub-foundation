import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faArrowRight,
  faLocationDot,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const featured = {
  name: "Amina Hassan",
  age: 24,
  location: "Mombasa, Kenya",
  program: "Case Management",
  programBg: "bg-swahilipot-100",
  programText: "text-swahilipot-700",
  quote:
    "Swahilipot didn't just give me a skill — they gave me back my belief in myself.",
  story:
    "At 21, Amina arrived at Swahilipot carrying the weight of unemployment and a difficult home situation. The Case Management team connected her with counselling, life-skills training, and a digital-marketing internship. Three years later she runs her own social-media consultancy serving five Mombasa businesses — and mentors new programme entrants on Saturdays.",
  outcome: "Now employs 2 youth assistants",
  image: "/img/case-management/cm1.jpg",
};

const stories = [
  {
    name: "Brian Odhiambo",
    age: 23,
    location: "Kisauni, Mombasa",
    program: "Creative & Arts",
    programBg: "bg-orange-100",
    programText: "text-orange-700",
    accentBorder: "border-orange-400",
    quote: "The studio gave me a professional platform I never thought I'd have.",
    story:
      "Brian joined the music production track with nothing but raw talent and a phone voice-memo library. Within 12 months he released his debut EP, which has since racked up thousands of streams and earned him a slot at a regional arts festival.",
    stat: "Debut EP released · 3 k+ streams",
    statBg: "bg-orange-50 text-orange-700",
    image: "/img/team/kiplangat.jpg",
  },
  {
    name: "Fatuma Said",
    age: 26,
    location: "Old Town, Mombasa",
    program: "V2T",
    programBg: "bg-teal-100",
    programText: "text-teal-700",
    accentBorder: "border-teal-400",
    quote: "I walked in with an idea and walked out with a business.",
    story:
      "Fatuma's agri-tech platform connects smallholder farmers in the Coastal region directly to urban buyers, cutting out middlemen and boosting farmer income by up to 35 %. She built the first prototype inside the V2T lab's weekend hackathon.",
    stat: "40+ farmers connected · 35 % income uplift",
    statBg: "bg-teal-50 text-teal-700",
    image: "/img/team/miriam.jpg",
  },
  {
    name: "Kevin Mwangi",
    age: 28,
    location: "Bamburi, Mombasa",
    program: "Scale Up",
    programBg: "bg-purple-100",
    programText: "text-purple-700",
    accentBorder: "border-purple-400",
    quote: "Mentorship here changed how I think about growing a business entirely.",
    story:
      "Kevin walked into Scale Up with a single sewing machine and a Facebook page. The accelerator gave him a business-model workshop, a micro-grant, and connections to bulk-fabric suppliers. His tailoring workshop now employs six people full-time.",
    stat: "6-person workshop · 6× growth in 18 months",
    statBg: "bg-purple-50 text-purple-700",
    image: "/img/team/atrash.jpg",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

const SuccessStories = () => {
  return (
    <section id="success-stories" className="section-padding bg-transparent">
      <div className="container-custom">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="text-center mb-16 reveal reveal-up" data-reveal>
          <span className="inline-flex items-center gap-2 text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">
            <FontAwesomeIcon icon={faSeedling} />
            Real People. Real Change.
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Stories of Impact
          </h2>
          <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Behind every number in our reports is a young person whose life changed direction.
            Here are a few of their stories.
          </p>
        </div>

        {/* ── Featured story ─────────────────────────────────────── */}
        <div
          className="bg-white rounded-3xl shadow-lg overflow-hidden mb-10 reveal reveal-up"
          data-reveal
        >
          <div className="flex flex-col md:flex-row min-h-[420px]">
            {/* Image panel */}
            <div className="relative md:w-[42%] flex-shrink-0 min-h-[280px] md:min-h-0">
              <img
                src={featured.image}
                alt={featured.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/img/communityspace.jpg";
                }}
              />
              {/* Gradient scrim for the quote overlay on mobile */}
              <div className="absolute inset-0 bg-swahilipot-950/60 md:hidden" />
            </div>

            {/* Text panel */}
            <div className="flex flex-col justify-center p-8 md:p-12 md:w-[58%]">
              {/* Program badge */}
              <span
                className={`inline-block self-start text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 ${featured.programBg} ${featured.programText}`}
              >
                {featured.program}
              </span>

              {/* Quote */}
              <div className="mb-6">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-swahilipot-200 text-4xl mb-3 block"
                />
                <p className="text-gray-900 text-xl md:text-2xl font-bold leading-snug">
                  {featured.quote}
                </p>
              </div>

              {/* Story */}
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                {featured.story}
              </p>

              {/* Name + location */}
              <div className="flex flex-wrap items-center gap-4 mb-7">
                <div>
                  <p className="font-bold text-gray-900 text-base">{featured.name}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <FontAwesomeIcon icon={faLocationDot} className="text-swahilipot-400" />
                    {featured.location} · Age {featured.age}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {featured.outcome}
                </span>
              </div>

              <Link
                to="/impact"
                className="self-start inline-flex items-center gap-2 text-swahilipot-600 font-semibold text-sm hover:text-swahilipot-800 transition-colors group"
              >
                Read her full story
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Story cards grid ────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-7">
          {stories.map((s, i) => (
            <div
              key={s.name}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group border-t-4 ${s.accentBorder} reveal reveal-up`}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/img/communityspace.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gray-900/50" />
                {/* Program badge on image */}
                <span
                  className={`absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${s.programBg} ${s.programText}`}
                >
                  {s.program}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Name + location */}
                <div className="mb-4">
                  <p className="font-bold text-gray-900 text-base">{s.name}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <FontAwesomeIcon icon={faLocationDot} className="text-swahilipot-400" />
                    {s.location} · Age {s.age}
                  </p>
                </div>

                {/* Pull quote */}
                <blockquote className="border-l-2 border-gray-200 pl-3 text-gray-600 italic text-sm leading-relaxed mb-4">
                  "{s.quote}"
                </blockquote>

                {/* Story */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {s.story}
                </p>

                {/* Stat chip */}
                <span
                  className={`self-start inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${s.statBg}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                  {s.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer CTA ──────────────────────────────────────────── */}
        <div className="text-center mt-14 reveal reveal-up" data-reveal>
          <p className="text-gray-500 text-sm mb-5">
            These are just three of the thousands of stories we carry with us every day.
          </p>
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-8 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            Explore all impact stories <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
