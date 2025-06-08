import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import data from "@/data/jobs.json";

const Careers = () => {
  const today = new Date();

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We Are <span className="text-gradient-blue">Hiring</span>
              </h1>
              <p className="text-xl text-gray-700">
                Join our team and help empower youth through technology, arts, and entrepreneurship across the Kenyan Coast.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid gap-8">
              {data.jobs.map((job) => {
                const isPastDeadline = new Date(job.application.deadline) < today;
                return (
                  <Card key={job.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <p className="text-gray-700 mb-4">{job.overview.position_summary}</p>
                        <p className="text-gray-700">Application Deadline: {job.application.deadline}</p>
                        {isPastDeadline && (
                          <p className="text-red-600 font-semibold">Not Accepting Applications</p>
                        )}
                        {isPastDeadline ? (
                          <Button disabled className="bg-gray-400 cursor-not-allowed w-fit">Closed</Button>
                        ) : (
                          <Button className="bg-swahilipot-600 hover:bg-swahilipot-700 w-fit" asChild>
                            <Link to={`/career/${job.id}`}>View Details</Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-gray-700 mb-12">
                Join a dynamic team passionate about making a difference in East Africa through technology, arts, and entrepreneurship.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-swahilipot-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <h3 className="font-semibold mb-2">Impactful Work</h3>
                    <p className="text-gray-600">Make a real difference in the lives of youth across East Africa</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-swahilipot-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="font-semibold mb-2">Growth & Learning</h3>
                    <p className="text-gray-600">Continuous learning opportunities and professional development</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-swahilipot-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="font-semibold mb-2">Dynamic Environment</h3>
                    <p className="text-gray-600">Work in a vibrant, creative, and innovative workspace</p>
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
