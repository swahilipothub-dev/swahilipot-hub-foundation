
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSpreadsheet, Users, Calendar, MessageSquare } from "lucide-react";

const CaseManagement = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Case <span className="text-gradient-blue">Management</span>
              </h1>
              <p className="text-xl text-gray-700">
                Supporting youth with personalized guidance and resources to navigate challenges and achieve their goals.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How Our Case Management Works</h2>
                <p className="text-gray-700 mb-6">
                  Our case management program provides comprehensive support to youth facing various challenges. 
                  We connect individuals with dedicated case managers who assess needs, develop personalized 
                  action plans, and coordinate access to resources and services.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FileSpreadsheet className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Personalized Assessment</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Support Network</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Calendar className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Regular Check-ins</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <MessageSquare className="h-8 w-8 text-swahilipot-600 mb-2" />
                      <p className="font-medium">Ongoing Guidance</p>
                    </CardContent>
                  </Card>
                </div>
                <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700">
                  Request a Case Manager
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                  <img
                    src="/img/case-management/img00.jpg"
                    alt="Case management session"
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
                Through our case management program, we've helped hundreds of young people overcome obstacles 
                and achieve meaningful progress in their personal and professional lives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">250+</CardTitle>
                  <CardDescription>Youth served annually</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We provide comprehensive case management services to over 250 youth each year, 
                    helping them navigate challenges and access opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">85%</CardTitle>
                  <CardDescription>Success rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    85% of youth in our case management program report significant progress 
                    toward their goals within six months.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">15</CardTitle>
                  <CardDescription>Partner organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We collaborate with 15 partner organizations to provide comprehensive 
                    services and resources to the youth we serve.
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

export default CaseManagement;
