import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faLandmark, faLightbulb, faRoute, faRadio, faUsers, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MarqueeStrip, PageHero, SplitHeading, usePageReveal } from "@/components/PageAnimations";

const programCategories = [
  {
    id: "tech",
    label: "Technology & Innovation",
    icon: faCode,
    programs: [
      { title: "Technology", description: "Building practical technology skills and access to tools that help young people participate in the digital economy." },
      { title: "Digital Innovation", description: "Supporting young people to explore, test, and develop new digital ideas that respond to real community needs." },
      { title: "ICT Solutions", description: "Encouraging ICT and technology-driven solutions that create useful, locally relevant change." },
    ],
  },
  {
    id: "arts",
    label: "Creative & Arts",
    icon: faPalette,
    programs: [
      { title: "Creative Arts", description: "Creating room for artists and makers to develop their craft, share ideas, and turn creative talent into opportunity." },
      { title: "Performing Arts", description: "Supporting performance, music, dance, and other live art forms that connect young people and audiences." },
      { title: "Cultural Expression", description: "Celebrating cultural and artistic expression as a living source of identity, dialogue, and possibility." },
    ],
  },
  {
    id: "heritage",
    label: "Heritage",
    icon: faLandmark,
    programs: [
      { title: "Heritage Preservation", description: "Protecting and sharing the heritage that anchors communities and connects young people to place." },
      { title: "Culture", description: "Keeping culture present in the work of the hub through learning, participation, and creative exchange." },
      { title: "Community History & Identity", description: "Making space for community stories, shared history, and the identities that shape the Coast." },
    ],
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship Support",
    icon: faLightbulb,
    programs: [
      { title: "Entrepreneurship Development", description: "Helping young people grow the confidence, skills, and ideas needed to start and sustain ventures." },
      { title: "Business Support", description: "Providing practical support that helps entrepreneurs strengthen how they plan, operate, and connect." },
      { title: "Enterprise Growth & Innovation", description: "Supporting enterprise growth and fresh approaches that open up new markets and opportunities." },
    ],
  },
  {
    id: "pathways",
    label: "Opportunity Youth & Pathways",
    icon: faRoute,
    programs: [
      { title: "Hospitality & Tourism", description: "Linking young people to skills and opportunities across the Coast's hospitality and tourism economy." },
      { title: "Blue & Green Economy", description: "Opening pathways in sustainable coastal enterprise, environmental stewardship, and emerging green work." },
      { title: "Health", description: "Connecting young people with health-focused knowledge, opportunities, and community support." },
      { title: "Youth Pathways & Opportunities", description: "Creating routes into learning, work, enterprise, and the networks that help young people move forward." },
    ],
  },
  {
    id: "fm",
    label: "Swahilipot FM",
    icon: faRadio,
    programs: [
      { title: "Swahilipot's Radio Platform", description: "A youth-centred radio platform that brings the hub's conversations, talent, and opportunities to wider audiences." },
      { title: "Community Communication", description: "Using radio to share relevant information, surface local voices, and strengthen community engagement." },
      { title: "Youth Media & Programming", description: "Creating youth-focused media and programming that informs, inspires, and makes room for participation." },
    ],
  },
];

const categoryStyles = {
  tech: { accent: "text-swahilipot-600", border: "border-swahilipot-600", icon: "bg-swahilipot-600", tint: "bg-swahilipot-50" },
  arts: { accent: "text-orange-500", border: "border-orange-500", icon: "bg-orange-500", tint: "bg-orange-50" },
  heritage: { accent: "text-amber-600", border: "border-amber-500", icon: "bg-amber-500", tint: "bg-amber-50" },
  entrepreneurship: { accent: "text-purple-600", border: "border-purple-600", icon: "bg-purple-600", tint: "bg-purple-50" },
  pathways: { accent: "text-teal-600", border: "border-teal-600", icon: "bg-teal-600", tint: "bg-teal-50" },
  fm: { accent: "text-rose-600", border: "border-rose-600", icon: "bg-rose-600", tint: "bg-rose-50" },
};

const strategicPriorities = [
  {
    number: "01",
    icon: faUsers,
    title: "Safe Spaces, Support & Civic Participation",
    outcome: "Youth have access to safe and conducive spaces, holistic support, and services to enhance their civic participation and effect change in their communities.",
    focus: ["Safe and inclusive spaces", "Holistic youth support", "Civic participation", "Community engagement"],
    areas: ["Creatives & Arts", "Heritage", "Swahilipot FM", "Opportunity Youth"],
    accent: "text-swahilipot-600",
    iconBg: "bg-swahilipot-600",
    chip: "bg-swahilipot-50 text-swahilipot-700",
  },
  {
    number: "02",
    icon: faLightbulb,
    title: "Partnerships, Collaboration & Opportunities",
    outcome: "Partnerships and collaboration strengthen ecosystems and institutions, increase youth opportunities, and catalyze systemic change.",
    focus: ["Strategic partnerships", "Stakeholder collaboration", "Stronger youth-serving ecosystems", "More youth opportunities"],
    areas: ["Entrepreneurship Support", "Opportunity Youth", "Technology & Innovation"],
    accent: "text-amber-600",
    iconBg: "bg-amber-500",
    chip: "bg-amber-50 text-amber-700",
  },
  {
    number: "03",
    icon: faCode,
    title: "Positive Youth Development",
    outcome: "Positive youth development programs build young people's capacity, agency, and assets.",
    focus: ["Capacity building", "Skills development", "Youth agency and leadership", "Individual and community assets"],
    areas: ["Technology & Innovation", "Entrepreneurship Support", "Creatives & Arts", "Opportunity Youth"],
    accent: "text-teal-600",
    iconBg: "bg-teal-600",
    chip: "bg-teal-50 text-teal-700",
  },
];

const Programs = () => {
  usePageReveal();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Programs"
          title="Skills, spaces, and pathways to thrive."
          subtitle="Six commitment areas connecting young people to skills, expression, heritage, enterprise, opportunity, and community voice."
          image="/img/general-people/image9.jpeg"
          imagePosition="center 35%"
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs" }]}
        />
        <MarqueeStrip items={["Technology & Innovation", "Creatives & Arts", "Heritage", "Entrepreneurship Support", "Opportunity Youth", "Swahilipot FM"]} />

        {/* Programs Tabs */}
        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">01 — What We Engage In</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="max-w-3xl mb-14" data-ht-left>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                <SplitHeading text="Six areas of work. One shared future." accentWords={[4, 5]} accentClass="text-swahilipot-600" />
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
                Swahilipot engages deeply rooted, dynamic, and complex issues through connected areas of need that help young people and communities thrive.
              </p>
            </div>

            <Tabs defaultValue="tech" className="w-full">
              <TabsList className="flex h-auto w-full flex-wrap justify-start gap-3 mb-12 bg-transparent p-0">
                {programCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center gap-2.5 rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-600 shadow-sm data-[state=active]:border-swahilipot-600 data-[state=active]:bg-swahilipot-600 data-[state=active]:text-white transition-all"
                  >
                    <FontAwesomeIcon icon={cat.icon} className="text-sm" />
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {programCategories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {cat.programs.map((program, idx) => {
                      const style = categoryStyles[cat.id as keyof typeof categoryStyles];

                      return (
                      <article key={program.title} className={`border-t-4 ${style.border} bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl heritage-card`}>
                        <div className="flex items-start justify-between gap-5 mb-8">
                          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${style.icon} text-white shadow-lg`}>
                            <FontAwesomeIcon icon={cat.icon} className="text-lg" />
                          </div>
                          <span className={`text-xs font-black uppercase tracking-[0.2em] ${style.accent}`}>Path {String(idx + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="text-xl font-black leading-snug text-gray-900 mb-3">{program.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">{program.description}</p>
                        <div className={`grid grid-cols-2 gap-3 border-t border-gray-100 pt-5 text-xs ${style.accent}`}>
                            <span className={`flex flex-col gap-1 rounded-md ${style.tint} px-3 py-2.5`}>
                              <span className="font-bold text-gray-700">Hub area</span>
                              <span className="text-gray-400">{cat.label}</span>
                            </span>
                            <span className={`flex flex-col gap-1 rounded-md ${style.tint} px-3 py-2.5`}>
                              <span className="font-bold text-gray-700">Hub activity</span>
                              <span className="text-gray-400">Community-led</span>
                            </span>
                        </div>
                      </article>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center mt-10">
              <a
                href="https://www.swahilipotfm.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-8 py-3 rounded font-semibold transition-colors"
              >
                Listen to Swahilipot FM <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-amber-600 text-xs font-black uppercase tracking-[0.35em]">02 — Our Approach</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight" data-ht-left>
                <SplitHeading text="How we create meaningful youth impact." accentWords={[4, 5]} accentClass="text-swahilipot-600" />
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl" data-ht-right>
                Our programs are the practical expression of three strategic priorities that build youth agency, strengthen communities, and create lasting opportunity.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {strategicPriorities.map((priority) => (
                <article key={priority.number} className="bg-white border border-gray-200 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl heritage-card">
                  <div className="flex items-start justify-between gap-4 mb-7">
                    <div className={`w-12 h-12 rounded-lg ${priority.iconBg} text-white flex items-center justify-center shadow-lg`}>
                      <FontAwesomeIcon icon={priority.icon} className="text-lg" />
                    </div>
                    <span className={`text-xs font-black tracking-[0.2em] ${priority.accent}`}>{priority.number}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 leading-snug mb-4">{priority.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{priority.outcome}</p>
                  <ul className="space-y-2.5 border-y border-gray-100 py-5 mb-6">
                    {priority.focus.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full ${priority.iconBg}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Connected Program Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {priority.areas.map((area) => (
                      <span key={area} className={`px-2.5 py-1.5 rounded-md text-[11px] font-bold ${priority.chip}`}>{area}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 bg-swahilipot-950 px-6 py-8 md:px-10 md:py-9" data-ht>
              <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                <p className="text-amber-400 text-xs font-black uppercase tracking-[0.25em] whitespace-nowrap">Our Impact Pathway</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-bold text-white">
                  <span>Approach</span><span className="text-amber-400">→</span><span>Strategic Priorities</span><span className="text-amber-400">→</span><span>Program Areas</span><span className="text-amber-400">→</span><span>Activities</span><span className="text-amber-400">→</span><span>Youth Outcomes</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
