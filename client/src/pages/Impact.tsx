import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faWifi,
  faGraduationCap,
  faSeedling,
  faFileInvoiceDollar,
  faChartLine,
  faShieldHalved,
  faGlobeAfrica,
  faArrowRight,
  faHandHoldingDollar,
  faQuoteLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const successStories = [
  {
    name: "Riziki Khalfan",
    role: "Entrepreneur, Vijana2Thrive (V2T) — Likoni Sub-county",
    quote: "Small beginnings should never define your future. With the right support, skills, and determination, you can build a business that transforms your life and inspires others to dream bigger.",
    title: "From a Few Items to a Thriving Fashion Business",
    story: "Driven by a passion for business and financial independence, a young entrepreneur from Likoni Sub-county transformed her small ladies' fashion business through the Vijana2Thrive (V2T) program implemented by Swahilipot Hub Foundation. Before joining the program, limited capital and business management skills meant she could only stock a few items, making it difficult to meet customer demand and grow her income. Through V2T's entrepreneurship training, mentorship, and financial management sessions, she gained practical skills to strengthen her business and build confidence as an entrepreneur. A business grant enabled her to expand her stock, diversify her products, and improve the quality of her business, resulting in increased sales, a growing customer base, and more stable income. Today, she is able to support herself, contribute to her family, and save towards expanding her business while inspiring other young women in Likoni to pursue entrepreneurship with confidence and determination.",
    image: "/img/success-stories/story-1.jpg",
  },
  {
    name: "Zahra Stanley",
    role: "Entrepreneur, V2T Mentee — Cohort 3",
    quote: "Never let a setback define your future. With the right support, skills, and determination, you can rebuild your business, regain your confidence, and create the life you deserve.",
    title: "Turning Setbacks into Stepping Stones",
    story: "At 32 years old, Zahra Stanley, a mentee under Fatma Yahya (Cohort 3), turned a period of uncertainty into a story of resilience and growth through the Vijana2Thrive (V2T) Mentorship Programme. After her beauty and fashion business struggled and she lost hope, V2T equipped her with practical skills in entrepreneurship, financial management, and marketing, alongside entrepreneurship support that helped her restock, diversify her products, and expand her customer base. Today, Zahra runs a thriving business with renewed confidence and is inspiring other young people to believe that setbacks can become stepping stones to success.",
    image: "/img/success-stories/zahra-stanley.jpg",
  },
  {
    name: "Faith Muthoni",
    role: "Entrepreneur & Mentor, Case Management Mentorship Program",
    quote: "Mentorship helped me see that my story is not just about surviving it's about growing, believing in myself, and creating opportunities for others. Every small step I took became the foundation for a better future.",
    title: "From Surviving to Thriving — and Mentoring Others",
    story: "Faith Muthoni's journey is a testament to the power of resilience, mentorship, and determination. Faced with the challenges of single motherhood and financial hardship, she started a modest food vending business to provide for her children. Through the Case Management Mentorship Program, Faith gained confidence, strengthened her entrepreneurial skills, embraced a culture of saving, and steadily expanded her business from selling snacks to offering a wider range of products. Today, she is not only a thriving entrepreneur but also a community leader who mentors other young people and has helped several of them start their own businesses, proving that empowerment grows when it is shared.",
    image: "/img/success-stories/story-3.jpg",
  },
];

const reportStats = [
  { value: "87%", label: "of participants find employment within 6 months" },
  { value: "90%", label: "of our startups survive beyond 2 years" },
  { value: "65%", label: "of our members are from underserved communities" },
  { value: "4.8/5", label: "average satisfaction rating from participants" },
];

const Impact = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Impact"
          title="Proof that investing in youth pays off."
          subtitle="Five years of measurable transformation across East Africa — and a model built to scale with the right partners."
          image="/img/general-people/image11.jpeg"
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Impact" }]}
        />
        <MarqueeStrip items={["5,000+ Youth Reached", "87% Employment Rate", "Transparent Reporting", "Measurable Outcomes", "Partner With Us"]} />

        {/* S1 — Impact at a Glance */}
        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">01 — Impact at a Glance</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Numbers that make the case for investment." accentWords={[4, 5]} accentClass="text-swahilipot-600" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "5,000+", label: "Youth directly impacted since founding", color: "text-swahilipot-600" },
                { value: "10+", label: "Community innovation hubs established", color: "text-amber-500" },
                { value: "87%", label: "Of participants find employment within 6 months", color: "text-teal-600" },
                { value: "90%", label: "Of supported startups survive beyond 2 years", color: "text-swahilipot-600" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center" data-ht-scale data-ht-d={String(i + 1)}>
                  <div className={`text-5xl md:text-6xl font-black tabular-nums mb-3 stat-pop ${stat.color}`}>{stat.value}</div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="relative py-24 overflow-hidden">
          <img src="/img/general-people/image14.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-swahilipot-950/80" />
          <div className="relative container-custom">
            <div className="max-w-4xl mx-auto text-center" data-ht>
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">Why It Matters</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`Every partner investment becomes a `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 60}ms` }}>{w}{" "}</span>)}
                <span className="text-amber-400 q-word" style={{ transitionDelay: "1.5s" }}>multiplier</span>
                {` — turning opportunity into livelihoods, and livelihoods into thriving communities.`.split(" ").map((w, i) => <span key={`b${i}`} className="q-word" style={{ transitionDelay: `${1600 + i * 55}ms` }}>{" "}{w}</span>)}
              </p>
              <div className="mt-12 w-16 h-1 bg-amber-400 mx-auto" />
            </div>
          </div>
        </section>

        {/* S2 — Theory of Change */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-amber-500 text-xs font-black uppercase tracking-[0.35em]">02 — Our Framework</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 max-w-2xl" data-ht-left>
              <SplitHeading text="A clear path from opportunity to transformation." accentWords={[5]} accentClass="text-amber-500" />
            </h2>
            <p className="text-gray-500 max-w-2xl mb-16 text-[15px] leading-relaxed" data-ht-left data-ht-d="2">
              We track every young person through three measurable stages — giving our funders a transparent, auditable view of outcomes, not just activity.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: faWifi,
                  stage: "Stage 01",
                  title: "Opportunity Youth Connected",
                  subtitle: "Reached and Engaged",
                  description: "Opportunity Youth (OY) reached and engaged through outreach and awareness activities, including social media, community events, workshops, seminars, forums, and program registrations.",
                  image: "/img/general-people/image22.jpeg",
                  overlay: "bg-swahilipot-900/75",
                },
                {
                  icon: faGraduationCap,
                  stage: "Stage 02",
                  title: "Opportunity Youth Improved",
                  subtitle: "Skills and Capacity",
                  description: "Opportunity Youth (OY) who actively participated in our programs, resulting in enhanced knowledge, skills, confidence, networks, or readiness for employment and entrepreneurship.",
                  image: "/img/general-people/image20.jpeg",
                  overlay: "bg-teal-900/75",
                },
                {
                  icon: faSeedling,
                  stage: "Stage 03",
                  title: "Opportunity Youth Transformed",
                  subtitle: "Sustainable Livelihoods",
                  description: "Opportunity Youth (OY) who achieved sustainable livelihood outcomes — paid internships, dignified employment, improved wages or working conditions, or income-generating businesses.",
                  image: "/img/general-people/image7.jpeg",
                  overlay: "bg-green-900/75",
                },
              ].map((card, i) => (
                <div key={card.title} className="relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group min-h-96 heritage-card" {...(i % 2 === 0 ? { "data-ht-left": "" } : { "data-ht-right": "" })} data-ht-d={String(i + 1)}>
                  <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className={`absolute inset-0 ${card.overlay}`} />
                  <div className="relative z-10 flex flex-col justify-end h-full p-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 block">{card.stage}</span>
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={card.icon} className="text-xl text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold leading-snug mb-2">{card.title}</h3>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-white/20 backdrop-blur-sm text-white border border-white/20 self-start">
                      {card.subtitle}
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S3 — Success Stories */}
        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">03 — Real Lives, Real Change</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="max-w-2xl mb-16" data-ht-left>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
                <SplitHeading text="Success Stories" accentClass="text-swahilipot-600" accentWords={[1]} />
              </h2>
              <div className="w-12 h-1 bg-swahilipot-600 mb-6"></div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Our impact goes beyond numbers. Here are real stories of youth whose lives have been transformed through our programs.
              </p>
            </div>

            <div className="space-y-10">
              {successStories.map((story, i) => (
                <div
                  key={story.name}
                  className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden heritage-card`}
                  {...(i % 2 === 0 ? { "data-ht-left": "" } : { "data-ht-right": "" })}
                  data-ht-d={String(i + 1)}
                >
                  {/* Photo */}
                  <div className="relative md:w-2/5 flex-shrink-0 min-h-[280px] md:min-h-[420px]">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/img/communityspace.jpg";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 md:p-12 md:w-3/5">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-swahilipot-100 text-4xl mb-4 block" />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
                      {story.title}
                    </h3>
                    <blockquote className="border-l-4 border-swahilipot-600 pl-4 italic text-gray-700 text-base leading-relaxed mb-5">
                      "{story.quote}"
                    </blockquote>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 whitespace-pre-line">
                      {story.story}
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-bold text-gray-900 text-base">{story.name}</p>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                          <FontAwesomeIcon icon={faLocationDot} className="text-swahilipot-400" />
                          {story.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S4 — Impact Report */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-amber-500 text-xs font-black uppercase tracking-[0.35em]">04 — By the Numbers</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <div className="bg-swahilipot-600 rounded-2xl p-8 md:p-12 text-white heritage-card max-w-4xl mx-auto" data-ht-scale>
              <span className="inline-block text-swahilipot-200 font-semibold uppercase tracking-wider text-xs mb-3">By the Numbers</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Impact Report</h2>
              <div className="w-10 h-1 bg-white/40 mb-6"></div>
              <p className="text-white/80 mb-8 text-sm leading-relaxed max-w-2xl">
                Our annual impact reports showcase the measurable change we're making in communities across East Africa — built for funders who want evidence, not anecdotes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {reportStats.map((stat) => (
                  <div key={stat.value} className="bg-white/15 rounded-xl p-4 text-center">
                    <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                    <p className="text-white/75 text-xs leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
              <a href="#download-report" className="inline-flex items-center gap-2 bg-white text-swahilipot-700 hover:bg-swahilipot-50 font-semibold px-6 py-3 rounded transition-colors text-sm">
                <FontAwesomeIcon icon={faDownload} className="text-sm" /> Download 2024 Impact Report
              </a>
            </div>
          </div>
        </section>

        {/* S5 — Why Partner With Us */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-amber-500 text-xs font-black uppercase tracking-[0.35em]">05 — For Funders & Partners</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Why organisations choose to fund us." accentWords={[3, 4]} accentClass="text-amber-500" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: faFileInvoiceDollar, title: "Transparent Reporting", body: "Quarterly and annual reports with audited financials, so partners always know exactly how funds are used.", bg: "bg-swahilipot-900", text: "text-white", sub: "text-white/60", ic: "text-amber-400" },
                { icon: faChartLine, title: "Proven Track Record", body: "Five years of consistent outcomes — 87% employment placement and 90% startup survival rates speak for themselves.", bg: "bg-amber-400", text: "text-swahilipot-900", sub: "text-swahilipot-800", ic: "text-swahilipot-900" },
                { icon: faShieldHalved, title: "Rigorous M&E", body: "Every cohort is tracked through our Opportunity Youth framework, giving funders auditable, stage-by-stage evidence of impact.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faGlobeAfrica, title: "Aligned with the SDGs", body: "Our work directly advances SDG 4, 8, and 10 — making every contribution easy to map to global development goals.", bg: "bg-swahilipot-600", text: "text-white", sub: "text-white/60", ic: "text-white" },
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
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Join Us in Scaling Impact</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              <SplitHeading text="Ready to invest in East Africa's youth?" accentWords={[3, 4, 5]} accentClass="text-swahilipot-600" />
            </h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">
              Whether you're a funder, corporate partner, or institution, our team is ready to align your goals with measurable youth outcomes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticLink to="/contact">
                Become a Funding Partner <FontAwesomeIcon icon={faHandHoldingDollar} />
              </MagneticLink>
              <MagneticLink to="/donate" className="inline-flex items-center gap-3 bg-white border-2 border-swahilipot-600 text-swahilipot-600 hover:bg-swahilipot-50 font-bold px-10 py-4 rounded-xl text-sm">
                Donate Now <FontAwesomeIcon icon={faArrowRight} />
              </MagneticLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Impact;
