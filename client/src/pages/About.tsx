import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faBullseye, faClock, faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAboutPageSEO } from "@/hooks/useSEO";
import { MarqueeStrip, PageHero } from "@/components/PageAnimations";

const values = [
  { icon: faUsers,    title: "Community",     description: "We build partnerships, share resources, and uplift each other through collaboration." },
  { icon: faHeart,    title: "Empowerment",   description: "We equip youth with skills, mentorship, and real opportunities to lead change." },
  { icon: faBullseye, title: "Innovation",    description: "We solve local challenges with creative thinking, digital tools, and youth-led ideas." },
  { icon: faClock,    title: "Sustainability", description: "We create lasting impact through green practices and future-focused programs." },
];

const timeline = [
  {
    year: "2016",
    title: "Founded in Mombasa",
    body: "Mahmoud Noor (Mentor001) founded Swahilipot Hub with support from National Museums of Kenya, SEACOM, ICT Authority, and Cisco.",
  },
  {
    year: "CBO Phase",
    title: "Technology-first Community Work",
    body: "The hub started as a community-based organisation focused on technology and innovation for coastal youth.",
  },
  {
    year: "NGO Growth",
    title: "Expanded Program Areas",
    body: "The organisation evolved into an NGO with broader work across technology, arts, entrepreneurship, and youth development.",
  },
  {
    year: "Today",
    title: "Regional Reach",
    body: "Swahilipot now serves youth aged 18-35 from its Mombasa base with growing reach across East Africa.",
  },
];

const programPillars = [
  "Technology & Innovation",
  "Creative Arts",
  "Entrepreneurship",
  "Youth Mentorship",
  "Campus Ambassador",
];

const factStrip = [
  "Founded 2016",
  "Mombasa, Kenya",
  "Youth 18-35",
  "NGO Regulated",
  "Technology · Arts · Entrepreneurship",
  "Community First",
];

const About = () => {
  useAboutPageSEO();

  return (
    <>
      <Navbar />
      <main className="theme-bg-pattern-1">
        <PageHero
          label="About Us"
          title="A decade of empowering coastal youth."
          subtitle="From a community hub in Mombasa to a nationally recognised NGO, Swahilipot Hub Foundation builds pathways through skills, mentorship, and youth-led innovation."
          image="/img/general-people/image19.jpeg"
          breadcrumb={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        />
        <MarqueeStrip items={factStrip} />

        {/* Our Story */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <img src="/img/general-people/image22.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105" />
          <div className="absolute inset-0 bg-white/90" />
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Swahilipot Hub Foundation</h2>
                <div className="w-12 h-1 bg-swahilipot-600 mb-6" />
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Swahilipot Hub Foundation is a non-profit organisation that meaningfully engages and empowers youth
                  aged 18 to 35. Based in Mombasa, Kenya, it is regulated by the NGO Coordination Board of Kenya.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  In 2016, Mahmoud Noor (alias Mentor001) founded Swahilipot Hub with support from National Museums
                  of Kenya, SEACOM, ICT Authority, and Cisco.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What began as a community-based organisation focused on technology and innovation has grown into an
                  NGO with diverse programme areas and reach across East Africa.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Founded 2016", "NGO Regulated", "Mombasa, Kenya", "Youth 18-35"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 text-sm text-swahilipot-700 bg-swahilipot-50 px-3 py-1.5 rounded-full font-medium">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-xs" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/bscypssE8Ms?autoplay=0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Swahilipot Documentary"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-swahilipot-100 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-swahilipot-50 rounded-2xl -z-10" />
              </div>
            </div>

            <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-7">
              <div className="rounded-2xl border border-gray-200 bg-slate-50 p-7 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-swahilipot-700 mb-4">Founding Context</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Swahilipot started at the Swahili Cultural Centre, Mombasa Hospital Road (Opp. Governor&apos;s Office),
                  and has grown through local collaboration, practical learning, and mentorship.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["National Museums of Kenya", "SEACOM", "ICT Authority", "Cisco"].map((partner) => (
                    <span key={partner} className="px-3 py-1.5 rounded-full bg-white border border-swahilipot-100 text-swahilipot-700 text-sm font-medium">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-swahilipot-900 p-7 md:p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300 mb-4">Where We Work</p>
                <h3 className="text-2xl font-bold mb-4">Mombasa Base, East Africa Outlook</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  We are rooted in coastal Kenya and connect young people to opportunities in digital skills,
                  enterprise, and creative careers across a wider regional ecosystem.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-swahilipot-800 hover:bg-swahilipot-50 px-5 py-2.5 rounded font-semibold transition-colors text-sm">
                  Visit Contact Details <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <img src="/img/general-people/image14.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105" style={{ objectPosition: "center 35%" }} />
          <div className="absolute inset-0 bg-slate-50/92" />
          <div className="container-custom relative z-10">
            <div className="text-center mb-14">
              <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">From Local Hub to Regional Movement</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key milestones in how Swahilipot evolved from a 2016 community initiative into a broader youth development organisation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {timeline.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider bg-swahilipot-100 text-swahilipot-700 px-2.5 py-1 rounded-full mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">How We Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Program Areas That Build Livelihood Pathways</h2>
                <div className="w-12 h-1 bg-swahilipot-600 mb-6" />
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our approach combines hands-on training, mentorship, and real-world project experience. Program design
                  is continuously updated to match current opportunities in the economy and creative industries.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We currently operate across the core areas below, helping young people move from learning to practice
                  and from practice to sustainable livelihoods.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {programPillars.map((pillar) => (
                  <div key={pillar} className="rounded-xl border border-gray-200 bg-slate-50 px-5 py-4 text-gray-800 font-semibold">
                    {pillar}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <img src="/img/general-people/image16.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover blur-[5px] scale-110" />
          <div className="absolute inset-0 bg-white/96" />
          <div className="container-custom relative z-10">
            <div className="text-center mb-14">
              <span className="inline-block text-swahilipot-700 font-bold uppercase tracking-wider text-xs mb-3">What Guides Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-3">Our Core Values</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5" />
              <p className="text-gray-800 font-medium max-w-2xl mx-auto">
                The principles that guide our work and impact at Swahilipot Hub Foundation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group text-center">
                  <div className="w-14 h-14 rounded-full bg-swahilipot-100 group-hover:bg-swahilipot-600 flex items-center justify-center mb-5 mx-auto transition-colors">
                    <FontAwesomeIcon icon={value.icon} className="text-xl text-swahilipot-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Snapshot */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-14">
              <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Impact Snapshot</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Published Outcomes at a Glance</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Figures below are drawn from Swahilipot&apos;s published Impact page and partner-facing reporting copy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { value: "5,000+", label: "Youth directly reached" },
                { value: "10+", label: "Community innovation hubs" },
                { value: "87%", label: "Employment within 6 months" },
                { value: "90%", label: "Startup survival beyond 2 years" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-swahilipot-100 bg-swahilipot-50 px-5 py-6 text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-swahilipot-700 mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Mission CTA */}
        <section className="py-16 md:py-24 bg-swahilipot-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you're a youth looking to develop your skills, a mentor wanting to share your expertise,
              or a donor interested in supporting our cause, there are many ways to get involved with
              Swahilipot Hub Foundation.
            </p>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSe8xVQEK2VP89CYE4166i6Vr6iriaA1x1D5ecVBCVY5MuqP3g/viewform?usp=dialog"
              target="_blank"
              className="inline-block bg-white text-swahilipot-700 hover:bg-swahilipot-50 font-semibold px-10 py-3.5 rounded transition-colors"
            >
              Join the Youth Database
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default About;
