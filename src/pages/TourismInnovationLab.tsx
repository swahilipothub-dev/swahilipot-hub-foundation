
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, MapPin, Briefcase, Building } from "lucide-react";

const TourismInnovationLab = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mombasa Tourism <span className="text-gradient-blue">Innovation Lab</span>
              </h1>
              <p className="text-xl text-gray-700">
                Developing innovative solutions to transform Mombasa's tourism sector and create new opportunities for youth.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Transforming Tourism Through Innovation</h2>
                <p className="text-gray-700 mb-6">
                  The Mombasa Tourism Innovation Lab is a collaborative initiative that aims to revolutionize 
                  the tourism industry in Mombasa through technology, creativity, and entrepreneurship. We bring 
                  together young innovators, industry stakeholders, and technology experts to co-create solutions 
                  that enhance visitor experiences and create sustainable economic opportunities.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <Lightbulb className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Innovation Challenges</h3>
                      <p className="text-gray-600">Quarterly challenges focused on solving tourism sector problems</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Destination Development</h3>
                      <p className="text-gray-600">Improving visitor experiences at key Mombasa attractions</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Briefcase className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Startup Incubation</h3>
                      <p className="text-gray-600">Supporting tourism tech startups with mentorship and resources</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Building className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Industry Partnerships</h3>
                      <p className="text-gray-600">Collaborating with hotels, tour operators, and government agencies</p>
                    </div>
                  </div>
                </div>
                {/* <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700">
                  Join the Innovation Lab
                </Button> */}
              </div>
              <div className="relative order-1 md:order-2">
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                  <img
                    src="/img/tourism/Image1.jpeg"
                    alt="Mombasa Tourism Innovation"
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
            {/* <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Innovation Projects</h2>
              <p className="text-gray-700">
                Explore some of the groundbreaking tourism innovation projects developed through our lab.
              </p>
            </div> */}
            
            {/* <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Virtual Tour Platform</CardTitle>
                  <CardDescription>Immersive digital experiences of Mombasa's cultural sites</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    A virtual reality platform that allows visitors to explore Mombasa's historical 
                    and cultural sites through immersive 360° experiences, enhancing pre-visit planning 
                    and reaching global audiences.
                  </p>
                  <Button variant="outline" className="w-full">View Project</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Local Guide Connect</CardTitle>
                  <CardDescription>Mobile app connecting tourists with local guides</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    An app that matches tourists with vetted local guides based on interests, 
                    language, and budget, creating employment for youth while offering authentic 
                    experiences for visitors.
                  </p>
                  <Button variant="outline" className="w-full">View Project</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Marine Conservation Tourism</CardTitle>
                  <CardDescription>Sustainable eco-tourism initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    A program combining marine conservation with tourism experiences, allowing 
                    visitors to participate in coral reef restoration and marine wildlife monitoring 
                    while supporting local conservation efforts.
                  </p>
                  <Button variant="outline" className="w-full">View Project</Button>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TourismInnovationLab;
