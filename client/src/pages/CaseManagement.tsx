import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faUsers, faCalendarDays, faCommentDots, faArrowRight, faHeartPulse, faHandHoldingHeart, faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const CaseManagement = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Program" title="Case Management" subtitle="Personalized support that walks with youth through every challenge, every step of the way." image="/img/general-people/image5.jpeg" breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: "Case Management" }]} />
        <MarqueeStrip items={["Personalized Support", "Youth Guidance", "Case Management", "Holistic Care", "Mentorship"]} />

        {/* S1 */}
        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">01 — How It Works</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading text="A program built around each individual." accentWords={[4, 5]} accentClass="text-swahilipot-600" />
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left data-ht-d="2">
                  <p>Our Case Management program provides comprehensive, personalized support to youth facing various life challenges. We connect individuals with dedicated case managers who take time to understand each person's unique situation.</p>
                  <p>Together, they develop actionable plans — accessing resources, coordinating services, and navigating systems that can feel overwhelming to face alone. Whether it's employment, mental health, family challenges, or skills development, we walk alongside each young person until they reach stable ground.</p>
                  <p>Case managers follow up regularly, adapt plans as circumstances change, and ensure every youth has a consistent, trusted point of contact throughout their journey with us.</p>
                </div>
                <div className="mt-10 relative rounded-2xl overflow-hidden heritage-card" data-ht-left data-ht-d="3">
                  <img src="/img/general-people/image9.jpeg" alt="Case management session" className="w-full h-64 object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "/img/communityspace.jpg"; }} />
                  <div className="absolute inset-0 bg-swahilipot-900/40" />
                  <span className="absolute bottom-4 left-4 bg-swahilipot-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">One-on-one sessions</span>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { icon: faTableList, title: "Personalised Assessment", body: "We start by listening — understanding where each youth is, what they need, and what they're working toward.", border: "border-swahilipot-600", badge: "bg-swahilipot-600" },
                  { icon: faUsers, title: "Support Network", body: "We connect youth to a wider ecosystem of services, partners, and peers so no one faces challenges in isolation.", border: "border-teal-600", badge: "bg-teal-600" },
                  { icon: faCalendarDays, title: "Regular Check-ins", body: "Consistent scheduled sessions track progress, adjust plans, and celebrate milestones along the way.", border: "border-amber-400", badge: "bg-amber-400" },
                  { icon: faCommentDots, title: "Ongoing Guidance", body: "Case managers remain available between sessions, providing guidance through life's unexpected turns.", border: "border-purple-500", badge: "bg-purple-500" },
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

        {/* Quote */}
        <section className="relative py-24 overflow-hidden">
          <img src="/img/case-management/img00.jpg" alt="" onError={(e) => { (e.target as HTMLImageElement).src = "/img/communityspace.jpg"; }} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-swahilipot-950/80" />
          <div className="relative container-custom">
            <div className="max-w-4xl mx-auto text-center" data-ht>
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">Our Promise</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`No young person should have to navigate life's hardest moments `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 60}ms` }}>{w}{" "}</span>)}
                <span className="text-amber-400 q-word" style={{ transitionDelay: "1.5s" }}>alone.</span>
              </p>
              <div className="mt-12 w-16 h-1 bg-amber-400 mx-auto" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-b border-gray-100 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "250+", label: "Youth served through case management annually", color: "text-swahilipot-600" },
                { value: "85%", label: "Report significant progress toward goals within 6 months", color: "text-amber-500" },
                { value: "15", label: "Partner organisations providing wraparound services", color: "text-teal-600" },
                { value: "100%", label: "Of case managers are trained youth development professionals", color: "text-swahilipot-600" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center" data-ht-scale data-ht-d={String(i + 1)}>
                  <div className={`text-5xl md:text-6xl font-black tabular-nums mb-3 stat-pop ${stat.color}`}>{stat.value}</div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S2 */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-amber-500 text-xs font-black uppercase tracking-[0.35em]">02 — Areas of Support</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="We support the whole person." accentWords={[3, 4]} accentClass="text-amber-500" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: faHeartPulse, title: "Mental & Emotional Wellbeing", body: "Connecting youth with counselling, psychosocial support, and safe spaces to process challenges.", bg: "bg-swahilipot-900", text: "text-white", sub: "text-white/60", ic: "text-amber-400" },
                { icon: faHandHoldingHeart, title: "Livelihood Support", body: "Helping youth access job placements, skills training, internships, and income-generating opportunities.", bg: "bg-amber-400", text: "text-swahilipot-900", sub: "text-swahilipot-800", ic: "text-swahilipot-900" },
                { icon: faShieldHeart, title: "Family & Social Systems", body: "Navigating family dynamics, community reintegration, and social safety net connections.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faTableList, title: "Goal Setting & Planning", body: "Co-creating structured action plans that are realistic, measurable, and centred on the youth's own aspirations.", bg: "bg-swahilipot-600", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faUsers, title: "Peer Networks", body: "Building connections with alumni and fellow participants who provide encouragement and lived experience.", bg: "bg-purple-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faCalendarDays, title: "Long-term Follow-up", body: "We don't disappear after graduation — our case managers continue checking in and celebrating milestones.", bg: "bg-gray-800", text: "text-white", sub: "text-white/60", ic: "text-amber-400" },
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

        {/* CTA */}
        <section className="bg-white py-24">
          <div className="container-custom text-center" data-ht>
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Join the Program</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"><SplitHeading text="Need support, or know someone who does?" accentWords={[2, 3, 4, 5, 6]} accentClass="text-swahilipot-600" /></h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">Our case managers are ready to listen. Reach out and let's figure out the next step — together.</p>
            <MagneticLink to="/contact">Get in Touch <FontAwesomeIcon icon={faArrowRight} /></MagneticLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default CaseManagement;
