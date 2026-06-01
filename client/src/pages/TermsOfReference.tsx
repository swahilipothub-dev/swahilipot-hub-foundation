import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot, faUsers, faClock } from "@fortawesome/free-solid-svg-icons";
import { useTORPageSEO } from "@/hooks/useSEO";

const TermsOfReference = () => {
  useTORPageSEO();
  const torList = [
    {
      id: "vijana-2-thrive",
      title: "Consultancy for Gender-Responsive Ecosystem Mapping, GESI Analysis, and Inclusive Entrepreneurship Assessment",
      shortDescription: "Comprehensive ecosystem mapping and GESI analysis across four counties to identify employment and entrepreneurship pathways for young women and men.",
      fullDescription: "The consultancy will conduct a gender-responsive ecosystem mapping and Gender Equality and Social Inclusion (GESI) analysis across Mombasa, Kilifi, Kitui, and Nairobi. It will identify viable employment and entrepreneurship pathways, emphasizing empowerment of young women, and recommend strategic interventions for inclusive participation in evolving labor markets.",
      counties: ["Mombasa", "Kilifi", "Kitui", "Nairobi"],
      dateAdded: "September 9, 2025",
      deadline: "September 17, 2025",
      status: "open",
      category: "Research & Analysis",
      estimatedDuration: "6-8 weeks",
      targetParticipants: "42,900 opportunity youth",
      partner: "Mastercard Foundation",
      tags: ["GESI Analysis", "Ecosystem Mapping", "Youth Employment", "Gender Equality"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 border-green-200";
      case "closed":
        return "bg-red-100 text-red-800 border-red-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-900" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-100 ring-1 ring-white/20">
                Terms of Reference
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                Current Consultancy Opportunities
              </h1>
              <p className="mt-4 text-indigo-100 md:text-lg">
                Explore our current consultancy opportunities and contribute to youth empowerment across Kenya
              </p>
            </div>
          </div>
        </section>

        {/* TOR Listing Section */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Available Consultancies</h2>
            <p className="text-neutral-600">
              Browse through our current terms of reference and find opportunities that match your expertise.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {torList.map((tor) => (
              <Card key={tor.id} className="group hover:shadow-lg transition-all duration-300 border-neutral-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getStatusColor(tor.status)}>
                          {tor.status.charAt(0).toUpperCase() + tor.status.slice(1)}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {tor.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                        {tor.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-neutral-600 text-base leading-relaxed">
                    {tor.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Key Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <FontAwesomeIcon icon={faLocationDot} className="text-sm text-indigo-600" />
                        <span className="font-medium">Counties:</span>
                        <span>{tor.counties.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <FontAwesomeIcon icon={faUsers} className="text-sm text-indigo-600" />
                        <span className="font-medium">Target:</span>
                        <span>{tor.targetParticipants}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <FontAwesomeIcon icon={faClock} className="text-sm text-indigo-600" />
                        <span className="font-medium">Duration:</span>
                        <span>{tor.estimatedDuration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-sm text-indigo-600" />
                        <span className="font-medium">Deadline:</span>
                        <span className="font-semibold text-red-600">{tor.deadline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tor.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Partner Info */}
                  <div className="bg-neutral-50 rounded-lg p-3 mb-6">
                    <p className="text-sm text-neutral-600">
                      <span className="font-medium">Partner:</span> {tor.partner}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/terms-of-reference/${tor.id}`}
                      className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-indigo-700 transition-colors"
                    >
                      View Full Details
                    </Link>
                    <a
                      href={`mailto:hr@swahilipothub.co.ke?subject=Application%20-%20${encodeURIComponent(tor.title)}`}
                      className="flex-1 bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-indigo-50 transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No TORs Message */}
          {torList.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faCalendarDays} className="text-5xl text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No Current Opportunities</h3>
              <p className="text-neutral-600 mb-6">
                There are currently no terms of reference available. Check back later for new opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          )}
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfReference;
