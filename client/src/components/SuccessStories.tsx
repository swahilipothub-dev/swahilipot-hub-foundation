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
  name: "John Washe Tsuma",
  location: "Rabai Kisurutini, Kilifi County",
  program: "V2T Mentorship Program",
  programBg: "bg-swahilipot-100",
  programText: "text-swahilipot-700",
  quote:
    "Don't let your current circumstances define your future. Keep learning, seek mentorship, and stay ready \u2014 opportunities come to those who prepare for them.",
  story:
    "From Rabai Kisurutini, Kilifi County, John Washe Tsuma joined the V2T Mentorship Program after facing prolonged unemployment and uncertainty about his future. Through mentorship, he developed essential employability skills, including CV writing, interview preparation, professional communication, and confidence building, which empowered him to proactively pursue opportunities. Today, John is employed at Coca-Cola Coastal Bottlers, has achieved financial independence, supports his family, and actively mentors and mobilizes other young people in his community to embrace mentorship, build their skills, and believe in their potential.",
  outcome: "Employed at Coca-Cola Coastal Bottlers",
  image: "/images/success-stories/JOHN%20WASHE.jpeg",
};

const stories = [
  {
    name: "Edgar Mogonchi",
    age: 21,
    location: "Kibera, Nairobi",
    program: "V2T Mentorship",
    programBg: "bg-orange-100",
    programText: "text-orange-700",
    accentBorder: "border-orange-400",
    quote: "I would sit back, stay silent, and let life happen to me. Now I know who I am.",
    story:
      "Edgar grew up carrying low self-esteem and deep uncertainty about his own worth. He joined the V2T mentorship program scared, but made one quiet, courageous decision — he kept showing up. Week after week, in group sessions and one-on-one meetings with his mentor Collins, he gave his first speech with a trembling voice, drew his life on paper, and heard others say they understood. Today he speaks with confidence, leads with purpose, and carries a clear sense of who he is.",
    stat: "V2T Mentorship Program Graduate",
    statBg: "bg-orange-50 text-orange-700",
    image: "/images/success-stories/edgar.jpg",
  },
  {
    name: "Rachael Katuku",
    location: "Zimmerman, Nairobi",
    program: "V2T Mentorship",
    programBg: "bg-teal-100",
    programText: "text-teal-700",
    accentBorder: "border-teal-400",
    quote:
      "I was working hard every day, but I felt like I was only surviving. Today, I'm building a business, creating jobs, and securing a better future for my child.",
    story:
      "A single mother from Zimmerman, Nairobi, Rachael joined the V2T Mentorship Program while running a small barber shop that barely provided enough to support her family. Through mentorship, entrepreneurship training, and a business grant, she gained the skills, confidence, and resources to grow her enterprise. Today her barber shop provides a stable income and employs two young people.",
    stat: "Business grown \u00b7 2 young people employed",
    statBg: "bg-teal-50 text-teal-700",
    image: "/images/success-stories/rachael%20katuku.jpeg",
  },
  {
    name: "Nahya Yahya Abdalla",
    location: "Kilifi County",
    program: "V2T Mentorship",
    programBg: "bg-purple-100",
    programText: "text-purple-700",
    accentBorder: "border-purple-400",
    quote:
      "Choosing myself was not giving up — it was choosing dignity, healing, and the future I deserve.",
    story:
      "From Kilifi County, Nahya joined the V2T Mentorship Program after enduring emotional and physical abuse in her marriage. Through mentorship, she rebuilt her confidence, rediscovered her self-worth, and realized that everyone deserves to be treated with dignity and respect. Today she is pursuing her education, rebuilding her life with courage and independence, and inspiring other young women to choose safety, healing, and hope over silence and fear.",
    stat: "Pursuing education · Inspiring other young women",
    statBg: "bg-purple-50 text-purple-700",
    image: "/images/success-stories/Nahiya%20Yahya%20.jpg.jpeg",
    imagePosition: "50% 22%",
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
          <p className="text-gray-800 max-w-2xl mx-auto rounded-md bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm text-base leading-relaxed">
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
                className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
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
                    {featured.location}
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
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: s.imagePosition ?? "center" }}
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
                    {s.location}{s.age ? ` · Age ${s.age}` : ""}
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
          <p className="inline-block rounded-md bg-white/80 px-5 py-3 text-gray-800 text-sm mb-5 shadow-sm backdrop-blur-sm">
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
