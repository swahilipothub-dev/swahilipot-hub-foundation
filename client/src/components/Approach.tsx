import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandshake,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const priorities = [
  {
    num: "01",
    icon: faUsers,
    title: "Safe Spaces, Support & Civic Participation",
    outcome: "Youth have access to safe and conducive spaces, holistic support, and services to enhance their civic participation and effect change in their communities.",
    focus: ["Safe and inclusive spaces", "Holistic youth support", "Civic participation", "Community engagement"],
    areas: ["Creatives & Arts", "Heritage", "Swahilipot FM", "Opportunity Youth"],
    accent: "bg-swahilipot-600",
    textAccent: "text-swahilipot-600",
    chip: "bg-swahilipot-50 text-swahilipot-700",
  },
  {
    num: "02",
    icon: faHandshake,
    title: "Partnerships, Collaboration & Opportunities",
    outcome: "Partnerships and collaboration strengthen ecosystems and institutions, increase youth opportunities, and catalyze systemic change.",
    focus: ["Strategic partnerships", "Stakeholder collaboration", "Stronger youth-serving ecosystems", "More youth opportunities"],
    areas: ["Entrepreneurship Support", "Opportunity Youth", "Technology & Innovation"],
    accent: "bg-amber-500",
    textAccent: "text-amber-600",
    chip: "bg-amber-50 text-amber-700",
  },
  {
    num: "03",
    icon: faGraduationCap,
    title: "Positive Youth Development",
    outcome: "Positive youth development programs build young people's capacity, agency, and assets.",
    focus: ["Capacity building", "Skills development", "Youth agency and leadership", "Individual and community assets"],
    areas: ["Technology & Innovation", "Entrepreneurship Support", "Creatives & Arts", "Opportunity Youth"],
    accent: "bg-teal-600",
    textAccent: "text-teal-600",
    chip: "bg-teal-50 text-teal-700",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-white/80" />
      <div className="container-custom relative z-10">

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
            Three strategic priorities connect our programs to stronger youth agency,
            community participation, and lasting opportunity.
          </p>
        </div>

        {/* ── Strategic priorities ───────────────────────────────── */}
        <div className="space-y-3 mb-10">
          {priorities.map((priority, index) => (
            <article
              key={priority.num}
              className="grid lg:grid-cols-[150px_minmax(0,1.25fr)_minmax(280px,0.75fr)] border border-gray-200 bg-white/95 shadow-sm transition-shadow duration-300 hover:shadow-xl reveal reveal-up"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className={`${priority.accent} relative flex min-h-[160px] flex-col justify-between p-7 text-white`}>
                <span className="text-xs font-black tracking-[0.25em] text-white/65">PRIORITY {priority.num}</span>
                <FontAwesomeIcon icon={priority.icon} className="text-4xl" />
                <span className="text-xs font-bold text-white/75">Strategic approach</span>
              </div>
              <div className="p-7 md:p-8">
                <h3 className={`text-2xl font-bold leading-snug mb-4 ${priority.textAccent}`}>{priority.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{priority.outcome}</p>
              </div>
              <div className="border-t lg:border-t-0 lg:border-l border-gray-100 p-7">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-4">Key Focus</p>
                <ul className="grid gap-2 mb-6">
                  {priority.focus.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${priority.accent}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-3">Program Areas</p>
                <div className="flex flex-wrap gap-2">
                  {priority.areas.map((area) => (
                    <span key={area} className={`px-2.5 py-1 rounded text-[11px] font-bold ${priority.chip}`}>{area}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-swahilipot-950 px-6 py-7 md:px-10 reveal reveal-up" data-reveal>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span className="text-amber-400 text-xs font-black uppercase tracking-[0.25em] whitespace-nowrap">Impact Pathway</span>
            <p className="text-white text-sm font-semibold leading-relaxed">
              Strategic priorities connect program areas and activities to stronger youth outcomes and lasting community change.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Approach;
