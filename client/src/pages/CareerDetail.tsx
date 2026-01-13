import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import data from '@/data/jobs.json';
import { isDateCurrentOrFuture } from "@/utils/dateUtils";

const renderList = (items?: string[]) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const JobDetail = () => {
  const { jobId } = useParams();
  const job = data.jobs.find((job) => job.id === jobId);
  const isDeadlineVisible = job ? isDateCurrentOrFuture(job.application.deadline) : true;

  if (!job) {
    return (
      <>
        <Navbar />
        <main className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center">Job Not Found</h2>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container-custom">
          {job.hero_image && (
            <div className="mb-8 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={job.hero_image}
                alt={`${job.title} hero`}
                className="w-full h-auto"
              />
            </div>
          )}
          <Card>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <p><strong>Programme:</strong> {job.programme}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Duration:</strong> {job.duration}</p>
                  <p><strong>Reporting To:</strong> {job.reporting_to}</p>
                  {job.direct_reports && (
                    <p><strong>Direct Reports:</strong> {job.direct_reports}</p>
                  )}
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3">About Swahilipot Hub</h2>
              <p className="text-gray-700 mb-6">{job.overview.about_sph}</p>

              <h2 className="text-2xl font-semibold mb-3">Position Overview</h2>
              <p className="text-gray-700 mb-6">{job.overview.position_summary}</p>

              {typeof job.scope === "string" && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Scope of Role</h2>
                  <p className="text-gray-700 mb-6">{job.scope}</p>
                </>
              )}
              
              {typeof job.scope === "object" && job.scope.engagement_pathways && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Scope of Engagement</h2>
              
                  {job.scope.engagement_pathways.map((pathway, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {pathway.pathway}
                      </h3>
              
                      {renderList(pathway.activities)}
              
                      {pathway.dignified_work_standards && (
                        <>
                          <h4 className="font-semibold mt-3 mb-2">
                            Dignified Work Standards
                          </h4>
                          {renderList(pathway.dignified_work_standards)}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
              
              {job.objectives && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Objectives</h2>
                  {renderList(job.objectives)}
                </>
              )}
              
              {job.value_proposition && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Value Proposition</h2>
                  {renderList(job.value_proposition)}
                </>
              )}

              {job.responsibilities && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Responsibilities</h2>
                  {renderList(job.responsibilities)}
                </>
              )}

              {job.key_areas && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Key Areas</h2>
                  {renderList(job.key_areas)}
                </>
              )}

              {job.qualifications && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Qualifications</h2>
                  {renderList(job.qualifications)}
                </>
              )}

              {job.skills && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Skills</h2>
                  {renderList(job.skills)}
                </>
              )}

              <h2 className="text-2xl font-semibold mb-3">Application Details</h2>
              {isDeadlineVisible && (
                <p className="text-gray-700 mb-2"><strong>Deadline:</strong> {job.application.deadline}</p>
              )}
              <p className="text-gray-700 mb-2"><strong>Submission:</strong> {job.application.submission}</p>
              <p className="text-gray-700 mb-6"><strong>Note:</strong> {job.application.note}</p>

              <Button className="bg-swahilipot-600 hover:bg-swahilipot-700">
                <a href={job.application.application_link} target="_blank">Apply Now</a>
              </Button>
            </CardContent>
          </Card>
          <div className="mt-6">
            <Button variant="outline" asChild>
              <Link to="/careers">Back to Jobs</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JobDetail;
