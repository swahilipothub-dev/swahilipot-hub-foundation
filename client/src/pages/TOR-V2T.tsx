import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, Target, Award, FileText, Mail } from "lucide-react";
import { useVijana2ThriveSEO } from "@/hooks/useSEO";

const Vijana2Thrive = () => {
  useVijana2ThriveSEO();
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Link
                  to="/terms-of-reference"
                  className="text-indigo-200 hover:text-white text-sm font-medium transition-colors"
                >
                  ← Back to Terms of Reference
                </Link>
              </div>
              <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-100 ring-1 ring-white/20">
                Terms of Reference (TOR)
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                Consultancy for Gender-Responsive Ecosystem Mapping, GESI Analysis, and Inclusive Entrepreneurship Assessment
              </h1>
              <p className="mt-4 text-indigo-100 md:text-lg">
                Counties: Mombasa, Kilifi, Kitui, and Nairobi
              </p>

              {/* Key Stats */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Users className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">42,900</p>
                  <p className="text-indigo-200 text-sm">Target Youth</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">4</p>
                  <p className="text-indigo-200 text-sm">Counties</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Clock className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">10</p>
                  <p className="text-indigo-200 text-sm">Weeks Duration</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-1 text-indigo-200 text-sm">
                <span>Date Added: September 9, 2025</span>
                <span className="text-red-200 font-semibold">Application Deadline: EOD September 17, 2025</span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
                <a
                  href="#apply"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-900 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white/60 flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Read Instructions to Apply
                </a>
                <a
                  href="#intro"
                  className="rounded-xl bg-indigo-500/30 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  View Full Details
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
                <h2 className="text-center font-bold mb-6">Objectives of the Assignment</h2>
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Primary Objectives
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>Conduct comprehensive gender-responsive ecosystem mapping across the four target counties to identify employment and entrepreneurship opportunities for young women and men</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>Perform detailed Gender Equality and Social Inclusion (GESI) analysis to understand systemic barriers and enablers for youth economic participation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>Assess inclusive entrepreneurship pathways and identify opportunities for young women-led businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>Provide evidence-based recommendations for strategic interventions to enhance youth economic inclusion</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Secondary Objectives
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Conduct Financial Market Analysis to inform the design of a gender-responsive Challenge Fund</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Identify key stakeholders and potential partners for youth economic empowerment initiatives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Develop actionable insights for policy recommendations at county and national levels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="scope" className="scroll-mt-24">
                <h2 className="text-center font-bold mb-6">Scope of Work</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-indigo-900 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Geographic Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-700 mb-3">The consultancy will cover four counties in Kenya:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-neutral-900">Coastal Region</h4>
                          <ul className="space-y-1 text-sm text-neutral-600">
                            <li>• Mombasa County</li>
                            <li>• Kilifi County</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-neutral-900">Other Regions</h4>
                          <ul className="space-y-1 text-sm text-neutral-600">
                            <li>• Nairobi County</li>
                            <li>• Kitui County</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-indigo-900 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Target Population
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-neutral-50 rounded-lg p-4">
                          <h4 className="font-semibold text-neutral-900 mb-2">Primary Target</h4>
                          <p className="text-neutral-700">Opportunity youth (NEET - Not in Education, Employment, or Training) aged 18-35 years, with at least 80% being young women</p>
                        </div>
                        <div className="bg-neutral-50 rounded-lg p-4">
                          <h4 className="font-semibold text-neutral-900 mb-2">Secondary Stakeholders</h4>
                          <ul className="space-y-1 text-neutral-700 text-sm">
                            <li>• County government officials and departments</li>
                            <li>• Private sector employers and business associations</li>
                            <li>• Training institutions and vocational centers</li>
                            <li>• Financial institutions and microfinance organizations</li>
                            <li>• Youth organizations and community groups</li>
                            <li>• Women's groups and gender-focused organizations</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-indigo-900 flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Key Areas of Focus
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-neutral-900">Economic Sectors</h4>
                          <ul className="space-y-1 text-sm text-neutral-600">
                            <li>• Agriculture and agribusiness</li>
                            <li>• Manufacturing and processing</li>
                            <li>• Tourism and hospitality</li>
                            <li>• ICT and digital services</li>
                            <li>• Healthcare and social services</li>
                            <li>• Financial services</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-neutral-900">Cross-Cutting Themes</h4>
                          <ul className="space-y-1 text-sm text-neutral-600">
                            <li>• Gender equality and social inclusion</li>
                            <li>• Climate resilience and green jobs</li>
                            <li>• Digital transformation</li>
                            <li>• Skills development and training</li>
                            <li>• Access to finance and markets</li>
                            <li>• Policy and regulatory environment</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="deliverables" className="scroll-mt-24">
                <h2 className="text-center font-bold mb-6">Key Deliverables</h2>
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-neutral-300">
                      <thead>
                        <tr className="bg-indigo-50">
                          <th className="border border-neutral-300 px-4 py-3 text-left font-semibold text-indigo-900">No</th>
                          <th className="border border-neutral-300 px-4 py-3 text-left font-semibold text-indigo-900">Objective</th>
                          <th className="border border-neutral-300 px-4 py-3 text-left font-semibold text-indigo-900">Deliverables</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 font-semibold text-neutral-700">1</td>
                          <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">Map the Entrepreneurial and Employment Ecosystem</td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                            <ul className="space-y-1">
                              <li>• Detailed analysis identifying key actors, networks, labour market pathways, and gaps</li>
                              <li>• County-specific visuals illustrating relationships between actors and key channels</li>
                              <li>• Synthesis highlighting stakeholder roles, insights, influence levels, and engagement recommendations</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 font-semibold text-neutral-700">2</td>
                          <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">Conduct a GESI Analysis</td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                            <ul className="space-y-1">
                              <li>• Practical and prioritized action plan for strengthening gender and social inclusion</li>
                              <li>• Specific steps, responsible actors, and indicators aligned with existing interventions</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 font-semibold text-neutral-700">3</td>
                          <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">Identify High-Potential Sectors</td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                            <ul className="space-y-1">
                              <li>• Comprehensive analysis and prioritization of high-growth sectors and value chains</li>
                              <li>• Practical ranking tool and clear opportunity briefs</li>
                              <li>• Entry points, required skills, and support structures for young women</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 font-semibold text-neutral-700">4</td>
                          <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">Assess Entrepreneurial Viability</td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                            <ul className="space-y-1">
                              <li>• Detailed assessment of most promising and accessible entrepreneurial ventures for young women</li>
                              <li>• Tool/framework for evaluating and ranking entrepreneurship opportunities</li>
                              <li>• Real-world examples and brief profiles of successful ventures led by young women</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 font-semibold text-neutral-700">5</td>
                          <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">Identify Innovative Skilling Models</td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                            <ul className="space-y-1">
                              <li>• Comparative analysis tool for identifying relevant, scalable, and gender-responsive skilling models</li>
                              <li>• Actionable recommendations with implementation guidance and delivery methods</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 font-semibold text-neutral-700">6</td>
                          <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">Inform the Challenge Fund Design</td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                            <ul className="space-y-1">
                              <li>• Financial Inclusion Analysis (FMA) report with evidence-based recommendations</li>
                              <li>• Proposed operational framework including eligibility criteria, funding tiers, and milestone structures</li>
                              <li>• Practical guidance for ensuring Fund relevance, inclusivity, and sustainability</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 font-semibold text-neutral-700">7</td>
                          <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">Formulate Actionable Recommendations</td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                            <ul className="space-y-1">
                              <li>• Practical, evidence-based recommendations for inclusive programs supporting youth</li>
                              <li>• Stakeholder analysis with guidance for effective engagement</li>
                              <li>• Policy brief highlighting key advocacy priorities and proposed policy actions</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Additional Deliverables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-neutral-700 font-medium">The consultant will also deliver:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-1 text-sm text-neutral-600">
                            <li>• Four detailed County-Level Reports (Mombasa, Kilifi, Kitui, Nairobi)</li>
                            <li>• Final consolidated report synthesizing all findings</li>
                            <li>• Validation workshop reports from each county</li>
                            <li>• Business Viability and Sector Prioritization Matrix</li>
                          </ul>
                          <ul className="space-y-1 text-sm text-neutral-600">
                            <li>• Presentation materials for stakeholder meetings</li>
                            <li>• Data visualization dashboards and infographics</li>
                            <li>• Policy briefs for county and national governments</li>
                            <li>• Digital repository of all collected data and resources</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="timeline" className="scroll-mt-24">
                <h2 className="text-center font-bold mb-6">Duration and Timeline</h2>
                <div className="space-y-6">
                  <Card className="border-indigo-200 bg-indigo-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-indigo-900 flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Project Duration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-indigo-900">10</p>
                          <p className="text-indigo-700 text-sm">Weeks Total</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-indigo-900">50</p>
                          <p className="text-indigo-700 text-sm">Working Days</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-indigo-900">400-500</p>
                          <p className="text-indigo-700 text-sm">Consultant Days</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900 text-center">Detailed Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 font-bold text-sm">1</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-neutral-900">Week 1: Inception and Desk Review</h4>
                          <p className="text-sm text-neutral-600">Project inception, stakeholder engagement, and comprehensive desk review of existing literature and policies</p>
                        </div>
                        <Badge variant="outline" className="text-xs">Start</Badge>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">2-4</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-neutral-900">Weeks 2-4: Fieldwork and Data Collection</h4>
                          <p className="text-sm text-neutral-600">Comprehensive data collection across all four counties, stakeholder interviews, focus group discussions, and ecosystem mapping</p>
                        </div>
                        <Badge variant="outline" className="text-xs">Active</Badge>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">5-6</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-neutral-900">Weeks 5-6: Data Analysis and Draft Reporting</h4>
                          <p className="text-sm text-neutral-600">Comprehensive data analysis, GESI analysis, financial inclusion analysis, and preparation of draft reports</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">Analysis</Badge>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="text-yellow-600 font-bold text-sm">7-9</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-neutral-900">Weeks 7-9: Validation Workshops and Integration of Feedback</h4>
                          <p className="text-sm text-neutral-600">County-level validation workshops, stakeholder feedback integration, and report refinement</p>
                        </div>
                        <Badge variant="outline" className="text-xs">Review</Badge>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-red-200 bg-red-50">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">10</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-neutral-900">Week 10: Final Report Submission</h4>
                          <p className="text-sm text-neutral-600">Final report submission with all deliverables and comprehensive recommendations</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">Final</Badge>
                      </div>
                    </div>
                  </div>

                  <Card className="border-amber-200 bg-amber-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-amber-900 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Key Milestones
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-amber-900">Critical Deadlines</h4>
                          <ul className="space-y-1 text-sm text-amber-800">
                            <li>• Inception Report: End of Week 1</li>
                            <li>• Fieldwork Completion: End of Week 4</li>
                            <li>• Draft Reports: End of Week 6</li>
                            <li>• Final Report: End of Week 10</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-amber-900">Review Points</h4>
                          <ul className="space-y-1 text-sm text-amber-800">
                            <li>• Mid-term review: Week 4</li>
                            <li>• Validation workshops: Weeks 7-9</li>
                            <li>• Final presentation: Week 10</li>
                            <li>• Report finalization: Week 10</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="qualifications" className="scroll-mt-24">
                <h2 className="text-center font-bold mb-6">Required Qualifications and Expertise</h2>
                <div className="space-y-6">
                  <Card className="border-indigo-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-indigo-900 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Lead Consultant Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <h4 className="font-semibold text-indigo-900 mb-2">Education & Experience</h4>
                          <ul className="space-y-1 text-sm text-neutral-700">
                            <li>• Master's degree or higher in Economics, Gender Studies, Development Studies, or Entrepreneurship</li>
                            <li>• Minimum 7-10 years of proven experience in labour market analysis, GESI studies, and youth economic empowerment</li>
                            <li>• Demonstrable experience in conducting high-quality research and analysis at county level within Kenya</li>
                            <li>• Strong command of both quantitative and qualitative research methods</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2">Technical Skills</h4>
                          <ul className="space-y-1 text-sm text-neutral-700">
                            <li>• Advanced data analysis and visualization skills (SPSS, R, Python, or similar)</li>
                            <li>• Experience with participatory research methodologies</li>
                            <li>• Strong report writing and presentation skills</li>
                            <li>• Knowledge of Kenya's development landscape and policy environment</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-900 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Team Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-purple-900">Gender Specialist</h4>
                          <ul className="space-y-1 text-sm text-neutral-700">
                            <li>• Master's in Gender Studies or related field</li>
                            <li>• 5+ years GESI analysis experience</li>
                            <li>• Experience with intersectional analysis</li>
                            <li>• Knowledge of gender-responsive programming</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-purple-900">Financial Analyst</h4>
                          <ul className="space-y-1 text-sm text-neutral-700">
                            <li>• Master's in Finance, Economics, or related field</li>
                            <li>• 5+ years financial market analysis</li>
                            <li>• Experience with microfinance and SME financing</li>
                            <li>• Knowledge of challenge fund design</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-purple-900">Research Associates</h4>
                          <ul className="space-y-1 text-sm text-neutral-700">
                            <li>• Bachelor's degree in relevant field</li>
                            <li>• 3+ years research experience</li>
                            <li>• Strong data collection skills</li>
                            <li>• Local language proficiency preferred</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-purple-900">Field Coordinators</h4>
                          <ul className="space-y-1 text-sm text-neutral-700">
                            <li>• Bachelor's degree or equivalent experience</li>
                            <li>• 3+ years field work experience</li>
                            <li>• Strong community engagement skills</li>
                            <li>• Knowledge of target counties preferred</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-900 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Preferred Qualifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>• Previous experience with Mastercard Foundation programs</li>
                          <li>• Experience working in Kenya's coastal region</li>
                          <li>• Knowledge of Swahili language</li>
                          <li>• Experience with digital data collection tools</li>
                        </ul>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>• Publications in peer-reviewed journals</li>
                          <li>• Experience with policy advocacy</li>
                          <li>• Network of local stakeholders</li>
                          <li>• Experience with youth-focused programs</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="reporting" className="scroll-mt-24">
                <h2 className="text-center font-bold mb-6">Reporting and Coordination</h2>
                <div className="space-y-6">
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Reporting Structure
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Primary Contact</h4>
                          <p className="text-sm text-neutral-700 mb-2">Swahilipot Hub Foundation (Lead Partner)</p>
                          <p className="text-sm text-neutral-600">Program Manager: Vijana2Thrive</p>
                          <p className="text-sm text-neutral-600">Email: v2t@swahilipothub.co.ke</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-blue-900">Regular Reporting</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Weekly progress updates</li>
                              <li>• Monthly detailed reports</li>
                              <li>• Quarterly stakeholder presentations</li>
                              <li>• Ad-hoc updates as needed</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-blue-900">Coordination Meetings</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Weekly check-ins with lead partner</li>
                              <li>• Bi-weekly consortium meetings</li>
                              <li>• Monthly steering committee updates</li>
                              <li>• Quarterly review sessions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Stakeholder Engagement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-green-900">Key Stakeholders</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• County government officials</li>
                              <li>• Private sector representatives</li>
                              <li>• Youth organizations and groups</li>
                              <li>• Training institutions</li>
                              <li>• Financial institutions</li>
                              <li>• Women's groups and networks</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-green-900">Engagement Methods</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Focus group discussions</li>
                              <li>• Key informant interviews</li>
                              <li>• Stakeholder workshops</li>
                              <li>• Online surveys and questionnaires</li>
                              <li>• Community meetings</li>
                              <li>• Validation sessions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="ethics" className="scroll-mt-24">
                <h2 className="text-center font-bold mb-6">Ethical Considerations</h2>
                <div className="space-y-6">
                  <Card className="border-red-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Research Ethics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold text-red-900 mb-2">Informed Consent</h4>
                          <p className="text-sm text-neutral-700">All participants must provide informed consent before participating in any research activities. Consent forms must be available in local languages and clearly explain the purpose, risks, and benefits of participation.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-red-900">Data Protection</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• All personal data must be anonymized</li>
                              <li>• Secure storage and transmission protocols</li>
                              <li>• Compliance with Kenya Data Protection Act</li>
                              <li>• Regular data security audits</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-red-900">Confidentiality</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Participant identities protected</li>
                              <li>• Sensitive information handled carefully</li>
                              <li>• Limited access to raw data</li>
                              <li>• Secure disposal of materials</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-900 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Gender and Inclusion
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Inclusive Participation</h4>
                          <p className="text-sm text-neutral-700">Ensure equal representation of women and men, including marginalized groups such as persons with disabilities, refugees, and other vulnerable populations in all research activities.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-purple-900">Safeguarding</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Child protection protocols</li>
                              <li>• Prevention of sexual exploitation</li>
                              <li>• Safe reporting mechanisms</li>
                              <li>• Staff training on safeguarding</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-purple-900">Cultural Sensitivity</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Respect for local customs and traditions</li>
                              <li>• Gender-sensitive data collection</li>
                              <li>• Community engagement protocols</li>
                              <li>• Local language considerations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="apply" className="scroll-mt-24">
                <h2 className="text-center font-bold mb-6">Application Process</h2>
                <div className="space-y-6">
                  <Card className="border-indigo-200 bg-indigo-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-indigo-900 flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        How to Apply
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <h4 className="font-semibold text-indigo-900 mb-3">Application Deadline</h4>
                          <p className="text-red-600 font-semibold text-lg">End of Day, September 17, 2025</p>
                          <p className="text-sm text-neutral-600 mt-1">Late applications will not be considered</p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-indigo-900">Required Documents</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm text-neutral-700">
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Detailed Technical Proposal (max 10 pages) outlining methodology, team composition, and work plan</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Comprehensive Financial Proposal with detailed and itemized budget</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Curriculum Vitae (CVs) for all key team members (max 4)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Evidence of similar work (e.g., links to reports, project summaries)</span>
                              </li>
                            </ul>
                            <ul className="space-y-2 text-sm text-neutral-700">
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Two professional references from comparable assignments</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Company/organization registration certificates</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Tax compliance certificates</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span>Any additional supporting documentation</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                          <h4 className="font-semibold text-indigo-900 mb-2">Submission Details</h4>
                          <div className="space-y-2 text-sm text-neutral-700">
                            <p><span className="font-semibold">Email:</span> hr@swahilipothub.co.ke</p>
                            <p><span className="font-semibold">Subject:</span> Application - V2T Ecosystem Mapping Consultancy</p>
                            <p><span className="font-semibold">Format:</span> PDF documents only</p>
                            <p><span className="font-semibold">Size Limit:</span> Maximum 10MB per email</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Evaluation Criteria
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-green-900">Technical Evaluation (70%)</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Understanding of assignment (20%)</li>
                              <li>• Methodology and approach (25%)</li>
                              <li>• Team qualifications and experience (15%)</li>
                              <li>• Work plan and timeline (10%)</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-green-900">Financial Evaluation (30%)</h4>
                            <ul className="space-y-1 text-sm text-neutral-700">
                              <li>• Cost competitiveness (15%)</li>
                              <li>• Budget realism and justification (10%)</li>
                              <li>• Value for money (5%)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2">Selection Process</h4>
                          <div className="space-y-2 text-sm text-neutral-700">
                            <p>1. <span className="font-semibold">Initial Screening:</span> Document completeness and basic qualifications</p>
                            <p>2. <span className="font-semibold">Technical Review:</span> Evaluation by expert panel</p>
                            <p>3. <span className="font-semibold">Financial Review:</span> Cost analysis and budget validation</p>
                            <p>4. <span className="font-semibold">Reference Checks:</span> Verification of past performance</p>
                            <p>5. <span className="font-semibold">Final Selection:</span> Award decision and contract negotiation</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center">
                    <a
                      href="mailto:hr@swahilipothub.co.ke?subject=Application%20-%20V2T%20Ecosystem%20Mapping%20Consultancy"
                      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                      <Mail className="h-5 w-5" />
                      Apply Now
                    </a>
                    <p className="text-sm text-neutral-600 mt-2">Questions? Contact us at hr@swahilipothub.co.ke</p>
                  </div>
                </div>
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