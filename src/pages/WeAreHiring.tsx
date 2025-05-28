import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, Users, GraduationCap, Code, MessageSquare, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const positions = [
  {
    id: 1,
    title: "Software Developer",
    department: "Tech & Engineering",
    type: "Full-time",
    location: "Mombasa, Kenya",
    experience: "2+ years",
    description: "We're looking for a passionate Software Developer to join our Tech & Engineering team. You'll work on innovative solutions that empower youth across East Africa.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Experience with modern web technologies (React, Node.js)",
      "Strong problem-solving skills",
      "Passion for mentoring and teaching others"
    ],
    icon: Code
  },
  {
    id: 2,
    title: "Communications Officer",
    department: "Communication",
    type: "Full-time",
    location: "Mombasa, Kenya",
    experience: "3+ years",
    description: "Join our Communications team to help tell the Swahilipot story and amplify our impact across the region.",
    requirements: [
      "Degree in Communications, Journalism, or related field",
      "Experience in digital marketing and social media management",
      "Excellent writing and storytelling skills",
      "Knowledge of graphic design tools"
    ],
    icon: MessageSquare
  },
  {
    id: 3,
    title: "Creative Programs Coordinator",
    department: "Creatives",
    type: "Full-time",
    location: "Mombasa, Kenya",
    experience: "2+ years",
    description: "Help shape and manage our creative programs, working with artists, musicians, and performers to nurture talent.",
    requirements: [
      "Background in arts management or related field",
      "Experience in event planning and coordination",
      "Strong network in the creative industry",
      "Passion for youth development"
    ],
    icon: Palette
  }
];

const WeAreHiring = () => {
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
                Join our team and help empower youth through technology, arts, and entrepreneurship across East Africa.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid gap-8">
              {positions.map((position) => (
                <Card key={position.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 bg-swahilipot-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="w-8 h-8 text-swahilipot-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                <span>{position.department}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{position.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{position.type}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <GraduationCap className="h-4 w-4" />
                                <span>{position.experience}</span>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-swahilipot-600 hover:bg-swahilipot-700" asChild>
                            <Link to="/contact">Apply Now</Link>
                          </Button>
                        </div>
                        <p className="text-gray-700 mb-4">{position.description}</p>
                        <div>
                          <h4 className="font-medium mb-2">Key Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {position.requirements.map((requirement, index) => (
                              <li key={index}>{requirement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                      <Users className="w-6 h-6 text-swahilipot-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Impactful Work</h3>
                    <p className="text-gray-600">Make a real difference in the lives of youth across East Africa</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-6 h-6 text-swahilipot-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Growth & Learning</h3>
                    <p className="text-gray-600">Continuous learning opportunities and professional development</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-6 h-6 text-swahilipot-600" />
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

export default WeAreHiring;
