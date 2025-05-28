import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import data from '@/data/jobs.json';

const JobDetail = () => {
  const { jobId } = useParams();
  const job = data.jobs.find((job) => job.id === jobId);

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
          <Card>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <p><strong>Programme:</strong> {job.programme}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Duration:</strong> {job.duration}</p>
                  <p><strong>Reporting To:</strong> {job.reporting_to}</p>
                  <p><strong>Direct Reports:</strong> {job.direct_reports}</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3">About Swahilipot Hub</h2>
              <p className="text-gray-700 mb-6">{job.overview.about_sph}</p>

              <h2 className="text-2xl font-semibold mb-3">Position Overview</h2>
              <p className="text-gray-700 mb-6">{job.overview.position_summary}</p>

              <h2 className="text-2xl font-semibold mb-3">Scope of Role</h2>
              <p className="text-gray-700 mb-6">{job.scope}</p>

              <h2 className="text-2xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-3">Key Areas</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                {job.key_areas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-3">Qualifications</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                {job.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                {job.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-3">Application Details</h2>
              <p className="text-gray-700 mb-2"><strong>Deadline:</strong> {job.application.deadline}</p>
              <p className="text-gray-700 mb-2"><strong>Submission:</strong> {job.application.submission}</p>
              <p className="text-gray-700 mb-6"><strong>Note:</strong> {job.application.note}</p>

              <Button className="bg-swahilipot-600 hover:bg-swahilipot-700">
                <a href={`mailto:${job.application.submission.split(' to ')[1]}`}>Apply Now</a>
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