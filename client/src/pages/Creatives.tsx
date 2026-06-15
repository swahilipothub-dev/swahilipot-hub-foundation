import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faMusic, faFilm, faMicrophone, faArrowRight, faStar, faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const Creatives = () => {
  usePageReveal();
  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Department" title="Creatives" subtitle="A vibrant collective of artists, musicians, filmmakers, and designers pushing the boundaries of creative expression in East Africa." image="/img/general-people/image6.jpeg" breadcrumb={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: "Creatives" }]} accentColor="bg-orange-500 text-white" />
        <MarqueeStrip items={["Visual Arts", "Music Production", "Film & Photography", "Performing Arts", "Creative Expression"]} bg="bg-orange-500" text="text-white" />

        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.35em]">01 — What We Do</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading text="Where talent meets opportunity." accentWords={[3, 4]} accentClass="text-orange-500" />
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]" data-ht-left data-ht-d="2">
                  <p>The Creatives Department at Swahilipot Hub is a vibrant collective of artists, musicians, filmmakers, and designers who are pushing the boundaries of creative expression in East Africa.</p>
                  <p>We provide a platform for creatives to showcase their work, access resources, and collaborate on projects that celebrate our cultural heritage and contemporary artistic movements.</p>
                  <p>Our team supports artists through mentorship, workshops, exhibition spaces, and opportunities to connect with audiences and industry professionals. We believe in the power of art to transform communities and inspire positive social change.</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { icon: faPalette, title: "Visual Arts", body: "Supporting painters, sculptors, and digital artists in developing and exhibiting their work to local and international audiences.", border: "border-orange-500", badge: "bg-orange-500" },
                  { icon: faMusic, title: "Music Production", body: "Facilitating recording, production, and performance opportunities for musicians at every stage of their career.", border: "border-amber-400", badge: "bg-amber-400" },
                  { icon: faFilm, title: "Film & Photography", body: "Developing visual storytelling talent through lens-based media, from short films to documentary photography.", border: "border-teal-600", badge: "bg-teal-600" },
                  { icon: faMicrophone, title: "Performing Arts", body: "Supporting dance, theater, spoken word, and live performances that reflect the rich cultural tapestry of the Coast.", border: "border-purple-500", badge: "bg-purple-500" },
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
          <img src="/img/general-people/image7.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-gray-900/80" />
          <div className="relative container-custom">
            <div className="max-w-4xl mx-auto text-center" data-ht>
              <p className="text-white/25 text-xs font-black uppercase tracking-[0.4em] mb-10">Our Belief</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {`Art has the power to transform communities and inspire `.split(" ").map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 60}ms` }}>{w}{" "}</span>)}
                <span className="text-orange-400 q-word" style={{ transitionDelay: "1.5s" }}>positive social change.</span>
              </p>
              <div className="mt-12 w-16 h-1 bg-orange-400 mx-auto" />
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-100 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "4", label: "Core creative disciplines supported", color: "text-orange-500" },
                { value: "SCEP", label: "Swahilipot Creatives Empowerment Program running bi-monthly", color: "text-amber-500" },
                { value: "8wk", label: "Talent to Income program cycle — quarterly intake", color: "text-teal-600" },
                { value: "100+", label: "Artists engaged through programs and exhibitions annually", color: "text-purple-600" },
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
          <img src="/img/general-people/image8.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-gray-50/70" />
          <div className="relative container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.35em]">02 — Our Programs</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Turning talent into sustainable income." accentWords={[2, 3, 4]} accentClass="text-orange-500" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: faStar, title: "Talent to Income", body: "An 8-week program helping individuals transform creative talents into sustainable income streams through market exposure and business skills.", bg: "bg-gray-900", text: "text-white", sub: "text-white/60", ic: "text-orange-400" },
                { icon: faMicrophone, title: "SCEP", body: "Swahilipot Creatives Empowerment Program — empowering artists through skill development, networking, and professional growth opportunities. Bi-monthly intake.", bg: "bg-orange-500", text: "text-white", sub: "text-white/80", ic: "text-white" },
                { icon: faCamera, title: "Partnership & Collaboration", body: "Connecting artists with galleries, art organisations, and cultural institutions for ongoing collaboration and professional exposure.", bg: "bg-teal-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faPalette, title: "Exhibition Spaces", body: "Dedicated physical and digital gallery spaces where creatives can showcase their work to the public and industry stakeholders.", bg: "bg-amber-500", text: "text-white", sub: "text-white/80", ic: "text-white" },
                { icon: faPen, title: "Mentorship", body: "One-on-one guidance from established artists, musicians, filmmakers, and cultural entrepreneurs in the creative industry.", bg: "bg-purple-700", text: "text-white", sub: "text-white/60", ic: "text-white" },
                { icon: faFilm, title: "Studio Access", body: "Professional recording studios, film equipment, and production facilities available to program participants throughout their creative journey.", bg: "bg-swahilipot-800", text: "text-white", sub: "text-white/60", ic: "text-amber-400" },
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
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Join the Community</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"><SplitHeading text="Are you a creative ready to grow?" accentWords={[3, 4, 5]} accentClass="text-orange-500" /></h3>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto leading-relaxed">We're always looking for talented artists, musicians, filmmakers, and creatives passionate about culture and innovation.</p>
            <MagneticLink to="/contact" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-sm">Get Involved <FontAwesomeIcon icon={faArrowRight} /></MagneticLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Creatives;
