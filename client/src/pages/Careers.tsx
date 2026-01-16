import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import data from "@/data/jobs.json";
import { isDateCurrentOrFuture } from "@/utils/dateUtils";

const Careers = () => {
  const openJobs = data.jobs.filter((job) =>
    isDateCurrentOrFuture(job.application.deadline)
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We Are <span className="text-gradient-blue">Hiring</span>
              </h1>
              <p className="text-xl text-gray-700">
                Join our team and help empower youth through technology, arts,
                and entrepreneurship across the Kenyan Coast.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {openJobs.length === 0 && (
                <p className="text-gray-700">
                  No open roles at the moment. Please check back soon.
                </p>
              )}

              {openJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {job.title}
                      </h3>

                      <p className="text-gray-700 mb-4">
                        {job.overview.position_summary}
                      </p>

                      <p className="text-gray-700 mb-4">
                        Application Deadline: {job.application.deadline}
                      </p>

                      <Button
                        className="bg-swahilipot-600 hover:bg-swahilipot-700 w-fit"
                        asChild
                      >
                        <Link to={`/career/${job.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-gray-700 mb-12">
                Join a dynamic team passionate about making a difference in East
                Africa through technology, arts, and entrepreneurship.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-swahilipot-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Impactful Work</h3>
                    <p className="text-gray-600">
                      Make a real difference in the lives of youth across East
                      Africa
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-swahilipot-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Growth & Learning</h3>
                    <p className="text-gray-600">
                      Continuous learning opportunities and professional
                      development
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-swahilipot-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">
                      Dynamic Environment
                    </h3>
                    <p className="text-gray-600">
                      Work in a vibrant, creative, and innovative workspace
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
