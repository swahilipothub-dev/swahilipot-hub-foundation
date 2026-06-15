import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faChartLine, faHandshake, faArrowRight, faCoins, faUsers, faBullseye, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const ScaleUp = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Program" title="Scale Up" subtitle="Accelerating growth for youth entrepreneurs through mentorship, funding access, and market connections." image="/img/team/miriam.jpg" breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: "Scale Up" }]} accentColor="bg-purple-600 text-white" />
        <MarqueeStrip items={["Entrepreneurship", "Accelerator", "Mentorship", "Market Access", "Funding", "Growth"]} bg="bg-purple-600" text="text-white" />

        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-purple-600 text-xs font-black uppercase tracking-[0.35em]">01 — The Accelerator</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading text="From side hustle to real business." accentWords={[3, 4, 5]} accentClass="text-purple-600" />
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left data-ht-d="2">
                  <p>Scale Up is Swahilipot Hub's business acceleration program designed specifically for youth entrepreneurs who already have a venture — and are ready to grow it into something sustainable.</p>
                  <p>Whether you're operating a micro-enterprise, a creative business, or a tech startup, Scale Up provides the structure, resources, and connections that turn promising ventures into thriving businesses.</p>
                  <p>The program is built around three pillars: business skills development, mentorship from experienced entrepreneurs, and access to networks of investors, buyers, and distribution partners. We've seen participants grow from one-person operations to established employers in as little as 18 months.</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { icon: faBullseye, title: "Business Fundamentals", body: "Practical training in business planning, financial management, marketing, and operations tailored to the Coast's unique market dynamics.", border: "border-purple-600", badge: "bg-purple-600" },
                  { icon: faHandshake, title: "1-on-1 Mentorship", body: "Paired with established entrepreneurs and business professionals who provide guidance, accountability, and real-world perspective.", border: "border-amber-400", badge: "bg-amber-400" },
                  { icon: faCoins, title: "Funding Pathways", body: "Introductions to micro-grants, angel investors, and development finance institutions — plus pitch training to maximise success.", border: "border-teal-600", badge: "bg-teal-600" },
                  { icon: faChartLine, title: "Market Access", body: "Connecting youth entrepreneurs with buyers, bulk-material suppliers, distribution partners, and exhibition opportunities.", border: "border-green-500", badge: "bg-green-600" },
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
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">From Our Alumni</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`"Mentorship here changed how I think about `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 60}ms` }}>{w}{" "}</span>)}
                <span className="text-purple-400 q-word" style={{ transitionDelay: "1.4s" }}>growing a business</span>
                {` entirely."`.split(" ").map((w, i) => <span key={`b${i}`} className="q-word" style={{ transitionDelay: `${1500 + i * 60}ms` }}>{" "}{w}</span>)}
              </p>
              <p className="text-white/30 text-sm mt-6" style={{ animation: "none" }}>— Kevin Mwangi, Scale Up Alumni · 6× business growth in 18 months</p>
              <div className="mt-12 w-16 h-1 bg-purple-400 mx-auto" />
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-100 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "6×", label: "Average business growth achieved by Scale Up participants in 18 months", color: "text-purple-600" },
                { value: "3mo", label: "Core accelerator program with continued alumni support", color: "text-amber-500" },
                { value: "6+", label: "Full-time employees created by a single Scale Up graduate", color: "text-teal-600" },
                { value: "Open", label: "Applications accepted quarterly — youth entrepreneurs welcome", color: "text-purple-600" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center" data-ht-scale data-ht-d={String(i + 1)}>
                  <div className={`text-5xl md:text-6xl font-black tabular-nums mb-3 stat-pop ${stat.color}`}>{stat.value}</div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-purple-600 text-xs font-black uppercase tracking-[0.35em]">02 — What We Offer</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Everything you need to grow and thrive." accentWords={[3, 4, 5, 6, 7]} accentClass="text-purple-600" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: faBullseye, title: "Business Model Workshop", body: "Intensive sessions on building a business model that's both viable and aligned with your community's realities.", bg: "bg-purple-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faTrophy, title: "Pitch Perfect", body: "Training and practice in pitching your business to investors — from story structure to financial projections to Q&A handling.", bg: "bg-amber-400", text: "text-swahilipot-900", sub: "text-swahilipot-800", ic: "text-swahilipot-900" },
                { icon: faHandshake, title: "Mentor Matching", body: "One-on-one mentorship from established entrepreneurs and professionals matched to your sector and stage.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faCoins, title: "Micro-Grant Access", body: "Select participants receive micro-grants to fund critical purchases — like Kevin's sewing machine that started a 6-person workshop.", bg: "bg-green-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faUsers, title: "Peer Cohort", body: "A cohort of fellow entrepreneurs who challenge, support, and refer each other — often the most valuable part of the program.", bg: "bg-swahilipot-800", text: "text-white", sub: "text-white/60", ic: "text-purple-300" },
                { icon: faChartLine, title: "Alumni Network", body: "Graduates stay connected through a thriving alumni network that shares leads, opportunities, and collective wisdom.", bg: "bg-gray-800", text: "text-white", sub: "text-white/60", ic: "text-purple-400" },
              ].map((card, i) => (
                <div key={card.title} className={`rounded-2xl p-7 heritage-card ${card.bg}`} {...(i % 2 === 0 ? { "data-ht-left": "" } : { "data-ht-right": "" })} data-ht-d={String((i % 3) + 1)}>
                  <FontAwesomeIcon icon={card.icon} className={`text-2xl mb-5 ${card.ic} opacity-80`} />
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
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"><SplitHeading text="Ready to scale your business to the next level?" accentWords={[3, 4, 5, 6, 7, 8]} accentClass="text-purple-600" /></h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">Applications open quarterly. Bring your existing venture and the ambition to grow it into something bigger.</p>
            <MagneticLink to="/contact" className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-xl text-sm">Apply to Scale Up <FontAwesomeIcon icon={faArrowRight} /></MagneticLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default ScaleUp;
