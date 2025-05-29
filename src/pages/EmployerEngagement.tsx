import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, GraduationCap, HandshakeIcon } from "lucide-react";

const EmployerEngagement = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Employer <span className="text-gradient-blue">Engagement</span>
              </h1>
              <p className="text-xl text-gray-700">
                Connecting employers with ready-to-work youth through strategic partnerships and comprehensive support programs.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How Our Program Works</h2>
                <p className="text-gray-700 mb-6">
                  The Fursa Youth Employment Program connects employers with ready-to-work Opportunity Youth (OYs) aged 18–35. 
                  We collaborate with various industries to create meaningful employment opportunities and ensure successful placements.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Mentorship</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Briefcase className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Job Matching</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <GraduationCap className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Skills Training</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <HandshakeIcon className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Post-Placement Support</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                  <img
                    src="/img/employ.jpg"
                    alt="Employer engagement session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-700">
                Through our employer engagement program, we've successfully connected numerous youth with meaningful employment opportunities 
                while helping businesses find talented, motivated employees.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">500+</CardTitle>
                  <CardDescription>Youth Placed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We've successfully placed over 500 youth in various industries through our employer engagement program.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">80%</CardTitle>
                  <CardDescription>Retention Rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    80% of placed youth maintain their positions for over a year, thanks to our comprehensive support system.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">50+</CardTitle>
                  <CardDescription>Partner Employers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We collaborate with over 50 employers across different sectors to create opportunities for youth.
                  </p>
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

export default EmployerEngagement;