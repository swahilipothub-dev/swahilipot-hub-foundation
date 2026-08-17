import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faLightbulb, faHandshake, faArrowRight, faBullseye, faGears, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const V2T = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Program" title="V2T" subtitle="Vijana2Thrive — connecting youth with transformative opportunities through technology, mentorship, and enterprise development." image="/img/general-people/image12.jpeg" breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: "V2T" }]} accentColor="bg-teal-500 text-white" />
        <MarqueeStrip items={["Vijana", "Thrive", "Innovation", "Enterprise", "Mentorship", "Technology"]} bg="bg-teal-600" text="text-white" />

        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-teal-600 text-xs font-black uppercase tracking-[0.35em]">01 — About V2T</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading text="From visionary ideas to real transformation." accentWords={[3, 4, 5]} accentClass="text-teal-600" />
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left data-ht-d="2">
                  <p>V2T — Vijana To Thrive — is a flagship program designed to connect ambitious youth with the opportunities, tools, and networks they need to turn bold ideas into real-world impact.</p>
                  <p>The program operates at the intersection of technology, mentorship, and enterprise development. We work with young people who already have a spark — and we provide the fuel to make it a flame.</p>
                  <p>Through structured cohorts, workshop intensives, and one-on-one mentorship, V2T participants move from having an idea to validating, prototyping, and launching solutions that address real community challenges.</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { icon: faLightbulb, title: "Idea Validation", body: "Structured workshops that help participants test assumptions, understand their users, and refine their concept before building.", border: "border-teal-600", badge: "bg-teal-600" },
                  { icon: faGears, title: "Build & Prototype", body: "Access to tools, technical mentors, and co-working space to move from idea to working prototype in weeks, not years.", border: "border-amber-400", badge: "bg-amber-400" },
                  { icon: faHandshake, title: "Mentorship Network", body: "Paired with experienced entrepreneurs, technologists, and investors who provide guidance throughout the program.", border: "border-swahilipot-600", badge: "bg-swahilipot-600" },
                  { icon: faNetworkWired, title: "Market Access", body: "Connecting graduates with networks, distribution channels, and communities that enable their ventures to grow and scale.", border: "border-purple-500", badge: "bg-purple-500" },
                ].map((card, i) => (
                  <div key={card.title} className={`flex gap-5 border-l-4 ${card.border} pl-6 py-2 heritage-card`} data-ht-right data-ht-d={String(i + 1)}>
                    <div className={`w-9 h-9 rounded-lg ${card.badge} flex items-center justify-center flex-shrink-0 mt-0.5`}><FontAwesomeIcon icon={card.icon} className="text-white text-sm" /></div>
                    <div><h3 className="font-bold text-gray-900 text-base mb-1">{card.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{card.body}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-swahilipot-950 py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center" data-ht>
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">The V2T Ethos</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`Every young person carries the seed of a solution. V2T gives them the `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 55}ms` }}>{w}{" "}</span>)}
                <span className="text-teal-400 q-word" style={{ transitionDelay: "1.8s" }}>soil to grow it.</span>
              </p>
              <div className="mt-12 w-16 h-1 bg-teal-400 mx-auto" />
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-100 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "3mo", label: "Intensive cohort cycle with structured milestones", color: "text-teal-600" },
                { value: "40+", label: "Farmers connected through one V2T graduate's platform", color: "text-amber-500" },
                { value: "35%", label: "Average income uplift achieved by program graduates", color: "text-swahilipot-600" },
                { value: "Open", label: "Applications accepted on a rolling cohort basis", color: "text-teal-600" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center" data-ht-scale data-ht-d={String(i + 1)}>
                  <div className={`text-5xl md:text-6xl font-black tabular-nums mb-3 stat-pop ${stat.color}`}>{stat.value}</div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image break */}
        <section className="relative h-72 md:h-[460px] overflow-hidden" data-ht>
          <img src="/img/general-people/image12.jpeg" alt="V2T youth in action" className="w-full h-full object-cover" style={{ objectPosition: "center 35%" }} />
          <div className="absolute inset-0 bg-swahilipot-950/55 flex items-end">
            <div className="container-custom pb-10 md:pb-14">
              <p className="text-teal-400 text-xs font-black uppercase tracking-[0.35em] mb-3">Vijana To Thrive</p>
              <p className="text-white text-xl md:text-3xl font-black max-w-xl leading-snug">Ideas are only the beginning — V2T turns them into reality.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-teal-600 text-xs font-black uppercase tracking-[0.35em]">02 — The Journey</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Four phases. One transformation." accentWords={[2, 3, 4]} accentClass="text-teal-600" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: faLightbulb, num: "01", title: "Discover", body: "Deep-dive sessions to understand problems worth solving, user needs, and the competitive landscape.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faBullseye, num: "02", title: "Define", body: "Narrowing focus to the most impactful opportunity and crafting a clear value proposition and theory of change.", bg: "bg-amber-400", text: "text-swahilipot-900", sub: "text-swahilipot-800", ic: "text-swahilipot-900" },
                { icon: faGears, num: "03", title: "Build", body: "Rapid prototyping, user testing, and iterating toward a minimum viable product with technical and business mentors.", bg: "bg-swahilipot-800", text: "text-white", sub: "text-white/60", ic: "text-teal-300" },
                { icon: faRocket, num: "04", title: "Launch", body: "Demo day, investor connections, market access partnerships, and ongoing alumni support as ventures go live.", bg: "bg-swahilipot-600", text: "text-white", sub: "text-white/60", ic: "text-white" },
              ].map((card, i) => (
                <div key={card.title} className={`rounded-2xl p-7 heritage-card ${card.bg}`} {...(i % 2 === 0 ? { "data-ht-left": "" } : { "data-ht-right": "" })} data-ht-d={String(i + 1)}>
                  <span className={`text-xs font-black uppercase tracking-widest mb-4 block ${card.sub}`}>{card.num}</span>
                  <FontAwesomeIcon icon={card.icon} className={`text-2xl mb-4 ${card.ic} opacity-80`} />
                  <h3 className={`font-black text-base mb-2 ${card.text}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed ${card.sub}`}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom text-center" data-ht>
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Apply Now</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"><SplitHeading text="Got an idea that could change your community?" accentWords={[2, 3, 4, 5, 6, 7]} accentClass="text-teal-600" /></h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">The next V2T cohort is open. Bring your vision — we'll help you build it.</p>
            <MagneticLink to="/contact" className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-xl text-sm">Apply to V2T <FontAwesomeIcon icon={faArrowRight} /></MagneticLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default V2T;
