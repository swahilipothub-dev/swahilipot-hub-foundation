import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHeart,
  faBullseye,
  faClock,
  faCircleCheck,
  faLandmark,
  faHandshake,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useAboutPageSEO } from "@/hooks/useSEO";
import { PageHero, MarqueeStrip, usePageReveal, SplitHeading } from "@/components/PageAnimations";

const values = [
  { icon: faUsers, title: "Community", description: "We build partnerships, share resources, and uplift each other through collaboration." },
  { icon: faHeart, title: "Empowerment", description: "We equip youth with skills, mentorship, and real opportunities to lead change." },
  { icon: faBullseye, title: "Innovation", description: "We solve local challenges with creative thinking, digital tools, and youth-led ideas." },
  { icon: faClock, title: "Sustainability", description: "We create lasting impact through green practices and future-focused programs." },
];

const foundingPartners = [
  "National Museums of Kenya",
  "SEACOM",
  "ICT Authority",
  "Cisco",
];

const About = () => {
  useAboutPageSEO();
  usePageReveal();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About Us"
          title="A decade of empowering coastal youth."
          subtitle="From a community hub in Mombasa to a nationally recognised NGO — our story is rooted in partnership, innovation, and youth potential."
          image="/img/general-people/image2.jpeg"
          imagePosition="center 30%"
          breadcrumb={[{ label: "Home", to: "/" }, { label: "About Us" }]}
          sideLabel="Swahilipot Hub · About"
        />
        <MarqueeStrip
          items={["Founded 2016", "Mombasa, Kenya", "Youth 18–35", "NGO Regulated", "Technology · Arts · Entrepreneurship", "Community First"]}
        />

        {/* S1 — Our Origins */}
        <section className="bg-white border-t border-gray-200 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">01 — Our Origins</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div data-ht-left>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  <SplitHeading
                    text="Where it all began in Mombasa"
                    accentWords={[4, 5]}
                    accentClass="text-swahilipot-600"
                  />
                </h2>

                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]">
                  <p>
                    Swahilipot Hub Foundation is a non-profit organisation that meaningfully engages and empowers
                    youth aged 18 to 35, enabling them to unleash their full potential. Based in Mombasa, Kenya,
                    it is regulated by the NGO Coordination Board of Kenya.
                  </p>
                  <p>
                    In <strong className="text-gray-900">2016</strong>, Mahmoud Noor (alias Mentor001) founded Swahilipot Hub
                    with support from the National Museums of Kenya, SEACOM, ICT Authority, and Cisco — opening a space
                    where coastal youth could explore technology, innovation, and creative talent.
                  </p>
                  <p>
                    What began as a community-based organisation focused on technology and innovation has grown into
                    an NGO with diverse program areas and reach across East Africa.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8" data-ht-left data-ht-d="2">
                  {["Founded 2016", "NGO Regulated", "Mombasa, Kenya", "Youth 18–35"].map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-sm text-swahilipot-700 bg-swahilipot-50 border border-swahilipot-100 px-3.5 py-1.5 rounded-full font-medium"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} className="text-xs text-swahilipot-500" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 p-5 rounded-2xl border border-gray-200 bg-gray-50" data-ht-left data-ht-d="3">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-swahilipot-600 mb-3">Founding Partners</p>
                  <div className="flex flex-wrap gap-2">
                    {foundingPartners.map((partner) => (
                      <span
                        key={partner}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-lg"
                      >
                        <FontAwesomeIcon icon={faHandshake} className="text-swahilipot-500 text-[10px]" />
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative" data-ht-right>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2 md:p-3">
                  <img
                    src="/images/logos/history.PNG"
                    alt="Swahilipot Hub founding history — 2016 SEACOM and National Museums of Kenya partnership, community launch, and the Swahili Pot Hub entrance in Mombasa"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-swahilipot-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faLandmark} className="text-amber-300" />
                  Est. 2016 · Mombasa
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-2xl -z-10" />
                <div className="absolute -bottom-8 -right-6 w-32 h-32 bg-swahilipot-100 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* History image break */}
        <section className="relative border-t border-gray-200 h-64 md:h-80 overflow-hidden" data-ht>
          <img
            src="/images/logos/history.PNG"
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-swahilipot-950/80 flex items-center">
            <div className="container-custom">
              <p className="text-amber-400 text-xs font-black uppercase tracking-[0.35em] mb-3">Throwback · 2016</p>
              <p className="text-white text-2xl md:text-4xl font-black max-w-2xl leading-snug">
                SEACOM partners National Museums of Kenya to open SwahiliPOT hub in Mombasa.
              </p>
            </div>
          </div>
        </section>

        {/* S2 — Documentary */}
        <section className="bg-gray-50 border-t border-gray-200 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">02 — Our Story on Film</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>

            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2" data-ht-left>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5">
                  <SplitHeading text="Watch the Swahilipot journey unfold" accentWords={[2]} accentClass="text-swahilipot-600" />
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-6">
                  Hear from the community, partners, and youth whose lives have been shaped by a hub that started
                  with a single idea — and grew into a movement.
                </p>
                <div className="inline-flex items-center gap-3 text-sm text-gray-600 bg-white border border-gray-200 rounded-xl px-4 py-3">
                  <div className="w-9 h-9 rounded-lg bg-swahilipot-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlay} className="text-white text-xs ml-0.5" />
                  </div>
                  <span className="font-semibold text-gray-900">Swahilipot Documentary</span>
                </div>
              </div>

              <div className="lg:col-span-3 relative" data-ht-right>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-swahilipot-100">
                  <iframe
                    src="https://www.youtube.com/embed/bscypssE8Ms?autoplay=0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Swahilipot Documentary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S3 — Core Values */}
        <section className="bg-white border-t border-gray-200 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-swahilipot-600 text-xs font-black uppercase tracking-[0.35em]">03 — What Guides Us</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>

            <div className="text-center mb-14" data-ht>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                <SplitHeading text="Our Core Values" accentWords={[1]} accentClass="text-swahilipot-600" />
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
                The principles that guide our work and impact at Swahilipot Hub Foundation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group bg-gray-50 border border-gray-200 p-7 rounded-2xl hover:border-swahilipot-200 hover:shadow-lg transition-all duration-300 text-center"
                  data-ht-scale
                  data-ht-d={String(index + 1)}
                >
                  <div className="w-14 h-14 rounded-2xl bg-swahilipot-100 group-hover:bg-swahilipot-600 flex items-center justify-center mb-5 mx-auto transition-colors">
                    <FontAwesomeIcon
                      icon={value.icon}
                      className="text-xl text-swahilipot-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-swahilipot-600 border-t border-swahilipot-700 py-24 md:py-32">
          <div className="container-custom text-center" data-ht>
            <p className="text-amber-300 text-xs font-black uppercase tracking-[0.35em] mb-5">Get Involved</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              Join Our Mission
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto mb-10 text-[15px] leading-relaxed">
              Whether you&apos;re a youth looking to develop your skills, a mentor wanting to share your expertise,
              or a donor interested in supporting our cause — there are many ways to get involved.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8xVQEK2VP89CYE4166i6Vr6iriaA1x1D5ecVBCVY5MuqP3g/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-swahilipot-50 text-swahilipot-700 font-bold px-10 py-4 rounded-xl text-sm transition-colors"
            >
              Join the Youth Database
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
