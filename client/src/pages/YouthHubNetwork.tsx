import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired, faUsers, faLocationDot, faArrowRight, faHandshake, faBullhorn, faHouse } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const YouthHubNetwork = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Program" title="Youth Hub Network" subtitle="Connecting youth across the region through a growing network of innovation hubs, community spaces, and shared opportunities." image="/img/communityspace.jpg" breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: "Youth Hub Network" }]} accentColor="bg-green-500 text-white" />
        <MarqueeStrip items={["Community Spaces", "Regional Network", "Youth Connection", "Innovation Hubs", "Collaboration"]} bg="bg-green-600" text="text-white" />

        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-green-600 text-xs font-black uppercase tracking-[0.35em]">01 — Our Network</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading text="No youth should grow in isolation." accentWords={[4, 5]} accentClass="text-green-600" />
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left data-ht-d="2">
                  <p>The Youth Hub Network is our commitment to ensuring that geography is never a barrier to opportunity. By building and connecting a network of hubs, co-working spaces, and community centres, we bring Swahilipot's energy and resources closer to where youth actually are.</p>
                  <p>Each hub in the network provides access to safe spaces, digital infrastructure, programming, and a community of peers working toward similar goals. Hubs share resources, host joint events, and maintain a consistent standard of support regardless of location.</p>
                  <p>Beyond physical spaces, the network facilitates digital connections — enabling youth from different locations to collaborate, learn from each other, and collectively access opportunities that no single hub could provide alone.</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { icon: faHouse, title: "Safe Community Spaces", body: "Physical hubs designed to be welcoming, inclusive, and equipped with the infrastructure youth need to learn, create, and connect.", border: "border-green-600", badge: "bg-green-600" },
                  { icon: faNetworkWired, title: "Digital Connectivity", body: "All network hubs are digitally connected, enabling youth to access online resources, remote mentors, and virtual program opportunities.", border: "border-amber-400", badge: "bg-amber-400" },
                  { icon: faHandshake, title: "Shared Programming", body: "Network hubs co-host events, workshops, and speaker sessions — multiplying impact and reducing duplication of effort.", border: "border-swahilipot-600", badge: "bg-swahilipot-600" },
                  { icon: faBullhorn, title: "Regional Amplification", body: "Youth voices and success stories from across the network are amplified through shared platforms, media, and advocacy.", border: "border-teal-600", badge: "bg-teal-600" },
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
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">Our Vision</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`When youth are connected to each other, they become `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 60}ms` }}>{w}{" "}</span>)}
                <span className="text-green-400 q-word" style={{ transitionDelay: "1.4s" }}>unstoppable.</span>
              </p>
              <div className="mt-12 w-16 h-1 bg-green-400 mx-auto" />
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-100 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "1", label: "Flagship hub anchored in Mombasa, Kenya", color: "text-green-600" },
                { value: "51k+", label: "Youth connected across the network since founding", color: "text-amber-500" },
                { value: "7/7", label: "Days a week the hub is open to youth members", color: "text-swahilipot-600" },
                { value: "Growing", label: "Network actively expanding to new locations across the region", color: "text-green-600" },
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
              <span className="text-green-600 text-xs font-black uppercase tracking-[0.35em]">02 — What Hubs Offer</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Everything a young person needs to thrive." accentWords={[4, 5, 6, 7]} accentClass="text-green-600" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: faHouse, title: "Safe Physical Space", body: "Welcoming environments where youth can study, create, connect, and access programs without barriers.", bg: "bg-green-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faNetworkWired, title: "Internet & Digital Tools", body: "Reliable high-speed internet, computers, and digital tools available to all members during hub hours.", bg: "bg-amber-400", text: "text-swahilipot-900", sub: "text-swahilipot-800", ic: "text-swahilipot-900" },
                { icon: faUsers, title: "Peer Community", body: "A built-in community of motivated peers, mentors, and alumni who support and inspire each other.", bg: "bg-swahilipot-900", text: "text-white", sub: "text-white/60", ic: "text-green-400" },
                { icon: faLocationDot, title: "Local Relevance", body: "Hubs are rooted in their communities — programming reflects local culture, language, economy, and needs.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faBullhorn, title: "Events & Activations", body: "Regular workshops, speaker series, hackathons, and community events hosted at or coordinated through each hub.", bg: "bg-swahilipot-600", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faHandshake, title: "Partner Ecosystem", body: "Each hub connects youth to a wider ecosystem of employers, NGOs, government bodies, and social enterprises.", bg: "bg-gray-800", text: "text-white", sub: "text-white/60", ic: "text-green-400" },
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
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Connect With Us</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"><SplitHeading text="Want to join or partner with the network?" accentWords={[3, 4, 5, 6, 7]} accentClass="text-green-600" /></h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">Whether you're a youth looking for a hub near you or an organisation wanting to collaborate, we'd love to hear from you.</p>
            <MagneticLink to="/contact" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl text-sm">Get Connected <FontAwesomeIcon icon={faArrowRight} /></MagneticLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default YouthHubNetwork;
