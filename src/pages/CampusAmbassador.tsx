
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Target, Users, Megaphone } from "lucide-react";

const universities = [
  "Technical University of Mombasa",
  "Kenyatta University - Mombasa Campus",
  "University of Nairobi - Mombasa Campus",
  "Pwani University",
  "Mount Kenya University - Mombasa Campus",
  "Mombasa Technical University"
];

const CampusAmbassador = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Campus <span className="text-gradient-blue">Ambassador</span> Program
              </h1>
              <p className="text-xl text-gray-700">
                Empowering student leaders to foster innovation and entrepreneurship across university campuses.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-gray-700 mb-6">
                  The Campus Ambassador Program connects Swahilipot Hub with universities across the coastal 
                  region through student representatives who promote our initiatives, organize campus events, 
                  and build communities of innovation on their campuses.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <Megaphone className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Campus Outreach</h3>
                      <p className="text-gray-600">Spreading awareness about Swahilipot programs and opportunities</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Community Building</h3>
                      <p className="text-gray-600">Creating and nurturing innovation communities on campus</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Target className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Event Coordination</h3>
                      <p className="text-gray-600">Organizing workshops, hackathons, and talks on campus</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Award className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Leadership Development</h3>
                      <p className="text-gray-600">Growing personal and professional skills through mentorship</p>
                    </div>
                  </div>
                </div>
                {/* <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700">
                  Apply to Become an Ambassador
                </Button> */}
              </div>
              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80"
                    alt="Campus ambassador presenting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Partner Universities</h2>
              <p className="text-gray-700">
                Our Campus Ambassador Program has a presence at these universities across the coastal region.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {universities.map((university, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6 flex items-center gap-4">
                    <GraduationCap className="h-8 w-8 text-swahilipot-600" />
                    <span className="font-medium">{university}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Don't see your university listed? We're always expanding our network!
              </p>
              <Button variant="outline">Nominate Your University</Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Ambassador Benefits</h2>
              <p className="text-gray-700">
                Campus Ambassadors receive valuable resources, experiences, and opportunities to grow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Leadership training workshops</li>
                    <li>Public speaking opportunities</li>
                    <li>Event management experience</li>
                    <li>Networking with industry professionals</li>
                    <li>Digital marketing skills</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exclusive Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Priority access to Swahilipot events</li>
                    <li>Free entry to selected workshops and conferences</li>
                    <li>Early information on job and internship opportunities</li>
                    <li>Swahilipot Hub resources and facilities</li>
                    <li>Direct connection to the tech ecosystem</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recognition & Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Official Swahilipot Hub certification</li>
                    <li>Brand merchandise and ambassador kit</li>
                    <li>Performance-based incentives</li>
                    <li>Feature on our website and social media</li>
                    <li>Letters of recommendation for high performers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CampusAmbassador;
