import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faGamepad, faUsers, faLightbulb, faMobileAlt, faArrowRight, faVrCardboard, faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const Heritage = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Program" title="Heritage" subtitle="Bridging the gap between coastal heritage and the digital world — making culture accessible to every young person." image="/img/general-people/fort-jesus.webp" breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: "Heritage" }]} />
        <MarqueeStrip items={["Digital Heritage", "Jiwe Studios", "Coastal Stories", "Youth & Culture", "Fort Jesus"]} />

        {/* S1 */}
        <section className="bg-white border-t border-gray-200 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">01 — Digital Practices</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading text="Intersection of Heritage & Digital Practices" accentWords={[4, 5, 6]} accentClass="text-swahilipot-600" />
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left data-ht-d="2">
                  <p>At Swahilipot Hub, we remain intentional in our approach to bridge the heritage-digital divide, with the sole aim of mainstreaming heritage in digital spaces that are more accessible to the youth.</p>
                  <p>One of such programs is the collaborative structure with <strong className="text-gray-900">Jiwe Studios</strong>. The hub, through this collaboration, supported a game play workshop where Jiwe presented a game, <strong className="text-gray-900">Umoja</strong>, developed around Fort Jesus, Old Town, Lamu and featuring coastal histories and slavery.</p>
                  <p>This collaboration will see the construction of the <strong className="text-gray-900">Jiwe Coastal Story Lab</strong> which will be anchored at Swahilipot. The lab will work in training youth on game development tools, VR experiences and multiple ways of interacting with authentic sources of history that are crucial in enabling the presence of indigenous narratives through digital heritage.</p>
                </div>
                <div className="mt-10 inline-flex items-center gap-4 border border-gray-200 rounded-2xl px-6 py-4 bg-gray-50 heritage-card" data-ht-left data-ht-d="3">
                  <div className="w-10 h-10 rounded-xl bg-swahilipot-600 flex items-center justify-center flex-shrink-0"><FontAwesomeIcon icon={faMobileAlt} className="text-white" /></div>
                  <div><p className="text-gray-900 font-bold text-sm">Umoja — Free to Download</p><p className="text-gray-400 text-xs mt-0.5">Available on Android &amp; iOS</p></div>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { icon: faChessKnight, title: "Jiwe Studios Collaboration", body: "A joint initiative bringing game-based storytelling to coastal heritage through the Umoja game — covering Fort Jesus, Old Town, Lamu, and slavery histories.", border: "border-swahilipot-600", badge: "bg-swahilipot-600" },
                  { icon: faVrCardboard, title: "Jiwe Coastal Story Lab", body: "A dedicated lab anchored at Swahilipot Hub training youth on game development, VR experiences, and digital tools for interacting with authentic historical sources.", border: "border-amber-400", badge: "bg-amber-400" },
                  { icon: faLandmark, title: "Indigenous Narratives", body: "Enabling authentic coastal histories to live in accessible digital spaces — so that every young person can engage with their heritage on their own terms.", border: "border-teal-600", badge: "bg-teal-600" },
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
        <section className="relative border-t border-gray-200 py-24 overflow-hidden">
          <img src="/img/general-people/image17.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-swahilipot-950/85" />
          <div className="relative container-custom">
            <div className="max-w-4xl mx-auto text-center" data-ht>
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">The Core Belief</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`Youth are not a demographic with little appreciation for cultural heritage — they are a `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 55}ms` }}>{w}{" "}</span>)}
                <span className="text-amber-400 q-word" style={{ transitionDelay: "1.8s" }}>stakeholder</span>
                {` whose ideas are crucial for continuity and sustainability.`.split(" ").map((w, i) => <span key={`b${i}`} className="q-word" style={{ transitionDelay: `${1900 + i * 55}ms` }}>{" "}{w}</span>)}
              </p>
              <div className="mt-12 w-16 h-1 bg-amber-400 mx-auto" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-t border-b border-gray-200 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "90%", label: "of youth never revisit museums after school trips", color: "text-swahilipot-600" },
                { value: "2-Day", label: "Ideathon workshop with youth & heritage stakeholders", color: "text-amber-500" },
                { value: "3+", label: "Heritage sites featured in Umoja", color: "text-teal-600" },
                { value: "1 Lab", label: "Jiwe Coastal Story Lab anchored at Swahilipot", color: "text-swahilipot-600" },
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
        <section className="relative border-t border-gray-200 h-72 md:h-[460px] overflow-hidden" data-ht>
          <img src="/img/general-people/image18.jpeg" alt="Heritage youth workshop" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0 bg-swahilipot-950/55 flex items-end">
            <div className="container-custom pb-10 md:pb-14">
              <p className="text-amber-400 text-xs font-black uppercase tracking-[0.35em] mb-3">Youth & Heritage</p>
              <p className="text-white text-xl md:text-3xl font-black max-w-xl leading-snug">Bringing coastal stories to life through digital innovation.</p>
            </div>
          </div>
        </section>

        {/* S2 */}
        <section className="relative border-t border-gray-200 py-24 md:py-32 overflow-hidden">
          <img src="/img/general-people/ornaments.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-gray-50/70" />
          <div className="relative container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-amber-500 text-xs font-black uppercase tracking-[0.35em]">02 — Youth-Museum Workshop</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Why youth no longer visit museums." accentWords={[5, 6]} accentClass="text-amber-500" />
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left>
                <p>The question on why youth no longer visit museums and heritage sites is no longer a mere assumption but a lived reality in the modern context. Over the years the hub has been interacting with youth in regards to cultural heritage, we have established that a majority of young people only visited museums and heritage sites like Fort Jesus primarily as mandatory school trips.</p>
                <p>Beyond this, <strong className="text-gray-900">90% of young people never go back to museums.</strong></p>
                <p>Through a partnership with <strong className="text-gray-900">Expertise France</strong>, the implementing partner of the Africa-European Museum Partnership, we were able to support a two-day ideathon workshop that addressed challenges that make young people shun museums.</p>
              </div>
              <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-right data-ht-d="2">
                <p>Some of the points raised were the static and unchanging nature of museums with little or no regard to structures that are youth-friendly. The workshop also established that elders and youth must work together to improve these experiences.</p>
                <p>Museums and heritage sites need to embrace digital means of presenting programs that allow for co-creation with the youth.</p>
                <p>We must adopt an approach that sees youth, not as a demographic that has little appreciation for cultural heritage but as a stakeholder whose ideas and input are crucial in ensuring continuity and sustainability in preservation of culture.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: faLandmark, title: "Static Exhibitions", body: "Museums rarely update content, offering little incentive for return visits.", bg: "bg-swahilipot-900", text: "text-white", sub: "text-white/60", ic: "text-amber-400" },
                { icon: faUsers, title: "Generational Divide", body: "Elders and youth must collaborate to reimagine heritage spaces together.", bg: "bg-amber-400", text: "text-swahilipot-900", sub: "text-swahilipot-800", ic: "text-swahilipot-900" },
                { icon: faLightbulb, title: "Co-Creation", body: "Youth input is essential in designing inclusive, engaging museum experiences.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faGamepad, title: "Digital Access", body: "Digital tools are the bridge between heritage preservation and youth engagement.", bg: "bg-swahilipot-600", text: "text-white", sub: "text-white/60", ic: "text-white" },
              ].map((card, i) => (
                <div key={card.title} className={`rounded-2xl p-7 heritage-card ${card.bg}`} data-ht-left={i % 2 === 0 ? "" : undefined} data-ht-right={i % 2 !== 0 ? "" : undefined} data-ht-d={String(i + 1)}>
                  <FontAwesomeIcon icon={card.icon} className={`text-2xl mb-5 ${card.ic} opacity-80`} />
                  <h3 className={`font-black text-base mb-2 ${card.text}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed ${card.sub}`}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border-t border-gray-200 py-24">
          <div className="container-custom text-center" data-ht>
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Get Involved</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"><SplitHeading text="Ready to bridge heritage and the digital world?" accentWords={[3, 4, 5, 6, 7]} accentClass="text-swahilipot-600" /></h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">Join Swahilipot Hub Foundation in creating spaces where coastal culture and technology come together for youth.</p>
            <MagneticLink to="/contact">Contact Us <FontAwesomeIcon icon={faArrowRight} /></MagneticLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Heritage;
