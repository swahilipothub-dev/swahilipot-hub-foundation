import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faWifi, faDatabase, faRobot, faArrowRight, faGraduationCap, faUsers, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const DigitalLiteracy = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Program" title="Digital Literacy" subtitle="Equipping youth with practical computer, internet, data, and introductory AI skills aligned with real-world needs — bridging the digital divide." image="/img/general-people/image14.jpeg" breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: "Digital Literacy" }]} accentColor="bg-blue-600 text-white" />
        <MarqueeStrip items={["Digital Skills", "Internet Literacy", "Data Basics", "AI Introduction", "Digital Boat", "DigiKen"]} bg="bg-blue-600" text="text-white" />

        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-blue-600 text-xs font-black uppercase tracking-[0.35em]">01 — The Program</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading text="Digital skills are no longer optional." accentWords={[5, 6]} accentClass="text-blue-600" />
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left data-ht-d="2">
                  <p>The Digital Literacy Program (Digital Boat) is a hands-on, community-driven initiative designed to bridge the digital divide by equipping learners with practical computer, internet, data, and introductory AI skills aligned with real-world needs.</p>
                  <p>In a world where digital participation is increasingly a prerequisite for employment, education, and civic life, we ensure that no youth is left behind simply because they lacked access or exposure.</p>
                  <p>The program runs in 12-week cycles and is open to any young person who wants to build their digital foundations — from complete beginners to those looking to formalise skills they already have.</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { icon: faLaptop, title: "Computer Fundamentals", body: "Hands-on practice with computers, operating systems, and productivity tools in a supportive environment.", border: "border-blue-600", badge: "bg-blue-600" },
                  { icon: faWifi, title: "Internet & Digital Safety", body: "Navigating the web safely, understanding online risks, and using digital platforms responsibly.", border: "border-amber-400", badge: "bg-amber-400" },
                  { icon: faDatabase, title: "Data Basics", body: "Introduction to data concepts — collecting, organising, and making sense of information in everyday contexts.", border: "border-teal-600", badge: "bg-teal-600" },
                  { icon: faRobot, title: "AI Introduction", body: "Practical exposure to how AI tools work and how youth can use them productively in work and creative projects.", border: "border-purple-500", badge: "bg-purple-500" },
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

        <section className="relative py-24 overflow-hidden">
          <img src="/img/general-people/image13.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-swahilipot-950/80" />
          <div className="relative container-custom">
            <div className="max-w-4xl mx-auto text-center" data-ht>
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">Our Mission</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`Kenya's digital transformation must leave `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 65}ms` }}>{w}{" "}</span>)}
                <span className="text-blue-400 q-word" style={{ transitionDelay: "1.2s" }}>no one behind.</span>
              </p>
              <div className="mt-12 w-16 h-1 bg-blue-400 mx-auto" />
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-100 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "12wk", label: "Program cycle duration with ongoing enrollment", color: "text-blue-600" },
                { value: "4", label: "Core digital skill areas covered in every cohort", color: "text-amber-500" },
                { value: "36mo", label: "DigiKen UN SDG programme running across Kenya", color: "text-teal-600" },
                { value: "Free", label: "DataCamp scholarship access for selected participants", color: "text-blue-600" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center" data-ht-scale data-ht-d={String(i + 1)}>
                  <div className={`text-5xl md:text-6xl font-black tabular-nums mb-3 stat-pop ${stat.color}`}>{stat.value}</div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <img src="/img/general-people/image5.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-gray-50/70" />
          <div className="relative container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-blue-600 text-xs font-black uppercase tracking-[0.35em]">02 — Partner Programs</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Nationally backed. Locally delivered." accentWords={[2, 3, 4]} accentClass="text-blue-600" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: faLaptop, title: "Digital Boat", body: "Our flagship 12-week community-driven digital literacy program, bridging the digital divide for youth across the Coast.", bg: "bg-blue-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faChartLine, title: "DataCamp Scholarship", body: "In partnership with DataCamp — selected participants receive full access to premium data science courses, projects, and certifications.", bg: "bg-amber-400", text: "text-swahilipot-900", sub: "text-swahilipot-800", ic: "text-swahilipot-900" },
                { icon: faWifi, title: "DigiKen", body: "Supported by a UN Joint SDG Programme, DigiKen uses a hybrid learning model to ensure Kenya's digital transformation leaves no one behind.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faDatabase, title: "Cisco Networking Academy", body: "Internationally aligned Cisco curriculum through structured, instructor-led training providing industry-relevant certifications.", bg: "bg-swahilipot-800", text: "text-white", sub: "text-white/60", ic: "text-blue-300" },
                { icon: faRobot, title: "Programming Foundation", body: "An introductory software development program designed to equip learners with essential programming knowledge and practical skills.", bg: "bg-purple-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faGraduationCap, title: "Industrial Attachment", body: "A structured program offering hands-on experience in software development, IT infrastructure, and digital innovation for students.", bg: "bg-gray-800", text: "text-white", sub: "text-white/60", ic: "text-blue-400" },
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
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Enroll Now</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"><SplitHeading text="Ready to build your digital foundation?" accentWords={[3, 4, 5]} accentClass="text-blue-600" /></h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">Applications are open on a rolling basis. No prior experience required — just the willingness to learn.</p>
            <MagneticLink to="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl text-sm">Apply Today <FontAwesomeIcon icon={faArrowRight} /></MagneticLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default DigitalLiteracy;
