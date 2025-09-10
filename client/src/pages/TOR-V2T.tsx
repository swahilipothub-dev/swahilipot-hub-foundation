import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Vijana2Thrive = () => {
  const sections = [
    { id: "intro", label: "Introduction & Background" },
    { id: "v2t", label: "Vijana2Thrive Program" },
    { id: "partners", label: "About the Partners" },
    { id: "purpose", label: "Purpose of the Ecosystem Mapping" },
    { id: "objectives", label: "Objectives of the Assignment" },
    { id: "scope", label: "Scope of Work" },
    { id: "deliverables", label: "Key Deliverables" },
    { id: "timeline", label: "Duration & Timeline" },
    { id: "qualifications", label: "Required Qualifications & Expertise" },
    { id: "reporting", label: "Reporting & Coordination" },
    { id: "ethics", label: "Ethical Considerations" },
    { id: "apply", label: "Application Process" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-900" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-100 ring-1 ring-white/20">
                Terms of Reference (TOR)
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                Consultancy for Gender-Responsive Ecosystem Mapping, GESI Analysis, and Inclusive Entrepreneurship Assessment
              </h1>
              <p className="mt-4 text-indigo-100 md:text-lg">
                Counties: Mombasa, Kilifi, Kitui, and Nairobi
              </p>
              <div className="mt-4 flex flex-col items-center gap-1 text-indigo-200 text-sm">
                <span>Date Added: 9th Sep 2025</span>
                <span>Application Deadline: EOD September 17, 2025</span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
                <a
                  href="mailto:hr@swahilipothub.co.ke?subject=Application%20-%20V2T%20Ecosystem%20Mapping%20Consultancy"
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-indigo-900 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Apply via Email
                </a>
                <a
                  href="#apply"
                  className="rounded-xl bg-indigo-500/30 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  How to Apply
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <aside className="order-last lg:order-first lg:col-span-3">
              <div className="sticky top-24 space-y-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-neutral-700">On this page</h2>
                <nav className="space-y-2">
                  {sections.map(s => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block rounded-md px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="prose order-first max-w-none lg:order-last lg:col-span-9 prose-h2:scroll-mt-24 prose-h2:text-neutral-900 prose-p:text-neutral-800 prose-li:text-neutral-800">
              <section id="intro" className="scroll-mt-24">
                <h2 className="text-center font-bold">Introduction and Background Information</h2>
                <p>
                  Kenya faces a significant youth unemployment challenge, with the youth unemployment rate at 12.23% in 2023. Opportunity youth (NEET) remain disconnected from pathways to economic inclusion. An estimated 2.9 million young Kenyans—24.6% of the youth population—are affected, with young women disproportionately impacted at 27% compared to 15% of young men.
                </p>
                <p>
                  Beyond limited jobs and training, many young people navigate environments with instability, minimal support networks, and few positive role models. This creates a dual barrier of lacking practical skills and psychosocial enablers such as confidence, connection, and community.
                </p>
                <p>
                  Targeted, multi-sectoral strategies integrating alternative education, workforce readiness, and mental wellness are required. Addressing technical skills alongside psychosocial empowerment can unlock youth potential—particularly for young women—toward an inclusive, dynamic economy.
                </p>
              </section>

              <section id="v2t" className="scroll-mt-24">
                <h2 className="text-center font-bold">Vijana2Thrive Program</h2>
                <p>
                  The Vijana2Thrive (V2T) Program, in collaboration with the Mastercard Foundation, is implemented by a consortium of Swahilipot Hub Foundation, the National Council of Churches of Kenya (NCCK), and the E4Impact Foundation. The program aims to reach 42,900 opportunity youth and create pathways to dignified and fulfilling employment for 30,000 youth. At least 80% of participants will be young women, acknowledging systemic gender inequalities that limit economic participation.
                </p>
              </section>

              <section id="partners" className="scroll-mt-24">
                <h2 className="text-center font-bold">About the Partners</h2>
                <h3>Swahilipot Hub Foundation (SPHF)</h3>
                <p>
                  SPHF is a youth-centric NGO based in Mombasa with programs across the Coastal region, focused on enabling communities through innovative and sustainable interventions. As the lead organization, SPHF will manage two centers in Mombasa and Kilifi and ensure outcomes and deliverables across the program lifecycle.
                </p>
                <h3>National Council of Churches of Kenya (NCCK)</h3>
                <p>
                  NCCK is a fellowship of Protestant churches and Christian organizations working toward holistic community transformation. Guided by SPHF, NCCK will establish and operate centers in Nairobi and Kitui, and support youth mobilization across all centers through an extensive partner network.
                </p>
                <h3>E4Impact Foundation</h3>
                <p>
                  E4Impact supports African entrepreneurs to build and scale job-creating businesses with positive social and environmental impact. The foundation will support entrepreneurship training, business capacity building, and access to a gender-responsive challenge fund.
                </p>
              </section>

              <section id="purpose" className="scroll-mt-24">
                <h2 className="text-center font-bold">Purpose of the Comprehensive Ecosystem Mapping</h2>
                <p>
                  The consultancy will conduct a gender-responsive ecosystem mapping and Gender Equality and Social Inclusion (GESI) analysis across Mombasa, Kilifi, Kitui, and Nairobi. It will identify viable employment and entrepreneurship pathways, emphasizing empowerment of young women, and recommend strategic interventions for inclusive participation in evolving labor markets.
                </p>
                <p>
                  The assignment will also provide inputs for operationalizing a gender-responsive Challenge Fund through a Financial Market Analysis, generating evidence to inform fund design and address systemic barriers to finance for young women and men entrepreneurs.
                </p>
              </section>

              <section id="objectives" className="scroll-mt-24">
                <h2 className="text-center font-bold">Objectives of the Assignment</h2>
              </section>

              <section id="scope" className="scroll-mt-24">
                <h2 className="text-center font-bold">Scope of Work</h2>
              </section>

              <section id="deliverables" className="scroll-mt-24">
                <h2 className="text-center font-bold">Key Deliverables</h2>
              </section>

              <section id="timeline" className="scroll-mt-24">
                <h2 className="text-center font-bold">Duration and Timeline</h2>
              </section>

              <section id="qualifications" className="scroll-mt-24">
                <h2 className="text-center font-bold">Required Qualifications and Expertise</h2>
              </section>

              <section id="reporting" className="scroll-mt-24">
                <h2 className="text-center font-bold">Reporting and Coordination</h2>
              </section>

              <section id="ethics" className="scroll-mt-24">
                <h2 className="text-center font-bold">Ethical Considerations</h2>
              </section>

              <section id="apply" className="scroll-mt-24">
                <h2 className="text-center font-bold">Application Process</h2>
              </section>
            </article>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Vijana2Thrive;