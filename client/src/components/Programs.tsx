import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const programs = [
  {
    title: "Tech Programs",
    category: "Technology",
    tag: "TECH · ONGOING",
    description: "Providing resources, mentorship, and workspace for tech startups and innovators across the Kenyan coast.",
    status: "Open now",
    ages: "Ages 18–35",
    link: "/programs",
    image: "/img/communityspace.jpg",
    overlay: "from-blue-900/80 to-blue-700/50",
    dotColor: "bg-blue-500",
    categoryColor: "text-blue-600",
    watermark: "Tech",
  },
  {
    title: "Creative & Arts",
    category: "Creative Arts",
    tag: "ARTS · ONGOING",
    description: "Promoting creative expression through music, film, dance, and visual arts programs.",
    status: "Open now",
    ages: "Ages 18–35",
    link: "/programs",
    image: "/img/team/kiplangat.jpg",
    overlay: "from-orange-900/80 to-orange-600/50",
    dotColor: "bg-orange-500",
    categoryColor: "text-orange-600",
    watermark: "Sanaa",
  },
  {
    title: "Entrepreneurship",
    category: "Entrepreneurship",
    tag: "INCUBATOR · ONGOING",
    description: "Developing business skills and connecting youth entrepreneurs with funding and market opportunities.",
    status: "Open now",
    ages: "Ages 18–35",
    link: "/programs",
    image: "/img/team/atrash.jpg",
    overlay: "from-yellow-900/80 to-yellow-700/50",
    dotColor: "bg-yellow-500",
    categoryColor: "text-yellow-700",
    watermark: "Biashara",
  },
  {
    title: "Case Management",
    category: "Youth Support",
    tag: "SUPPORT · ONGOING",
    description: "Supporting youth with personalized guidance and resources to navigate challenges and achieve their goals.",
    status: "Open enrollment",
    ages: "Ages 18–35",
    link: "/programs/case-management",
    image: "/img/case-management/cm1.jpg",
    overlay: "from-swahilipot-900/80 to-swahilipot-600/50",
    dotColor: "bg-swahilipot-500",
    categoryColor: "text-swahilipot-600",
    watermark: "Msaada",
  },
  {
    title: "Tourism Innovation Lab",
    category: "Innovation",
    tag: "TECH · ONGOING",
    description: "Developing innovative solutions to transform Mombasa's tourism sector and create new youth opportunities.",
    status: "Open now",
    ages: "Ages 18–35",
    link: "/programs/tourism-innovation-lab",
    image: "/img/tourism/til1.jpg",
    overlay: "from-teal-900/80 to-teal-600/50",
    dotColor: "bg-teal-500",
    categoryColor: "text-teal-600",
    watermark: "Pwani",
  },
  {
    title: "Campus Ambassador",
    category: "Leadership",
    tag: "PROGRAM · YEAR-LONG",
    description: "Connecting university students with Swahilipot Hub to co-lead initiatives and build campus impact.",
    status: "Open enrollment",
    ages: "Ages 18–29",
    link: "/programs/campus-ambassador",
    image: "/img/team/miriam.jpg",
    overlay: "from-indigo-900/80 to-indigo-600/50",
    dotColor: "bg-indigo-500",
    categoryColor: "text-indigo-600",
    watermark: "Uongozi",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-14 reveal reveal-up" data-reveal>
          <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3 reveal reveal-left" data-reveal>
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 reveal reveal-left" data-reveal>
            Our Programs
          </h2>
          <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5 reveal reveal-right" data-reveal></div>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-right" data-reveal>
            Discover how Swahilipot Hub is nurturing the next generation of innovators,
            artists, and entrepreneurs through our specialized programs.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Link
              key={program.title}
              to={program.link}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col reveal reveal-up"
              data-reveal
            >
              {/* Image with overlay + watermark */}
              <div className="relative h-52 overflow-hidden flex-shrink-0 reveal-img" data-reveal>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/img/communityspace.jpg";
                  }}
                />
                {/* Color overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.overlay}`}></div>
                {/* Watermark text */}
                <span className="absolute inset-0 flex items-center justify-center text-white/25 text-5xl font-black italic pointer-events-none select-none">
                  {program.watermark}
                </span>
                {/* Tag pill */}
                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {program.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category */}
                <span className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-2 ${program.categoryColor}`}>
                  <span className={`w-2 h-2 rounded-full ${program.dotColor}`}></span>
                  {program.category}
                </span>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-xl mb-2 leading-snug group-hover:text-swahilipot-600 transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {program.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between border-t pt-3 mt-auto">
                  <span className={`flex items-center gap-1.5 text-xs font-semibold ${program.categoryColor}`}>
                    <span className={`w-2 h-2 rounded-full ${program.dotColor} animate-pulse`}></span>
                    {program.status}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{program.ages}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            View All Programs <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
