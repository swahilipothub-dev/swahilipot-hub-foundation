
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CommunityEntrepreneurship = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-swahilipot-50 to-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-blue">Community & Entrepreneurship</span> Department
              </h1>
              <p className="text-lg text-gray-700">
                Empowering local innovators and building sustainable community enterprises.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">What We Do</h2>
                <p className="text-gray-700 mb-6">
                  The Community & Entrepreneurship Department at Swahilipot Hub serves as a catalyst for 
                  local economic development and community empowerment. We provide training, mentorship, 
                  and resources to help aspiring entrepreneurs turn their ideas into sustainable businesses.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team works closely with community members, investors, and industry partners to 
                  create an ecosystem where entrepreneurship can flourish. We believe in the power of 
                  business to create jobs, solve local challenges, and build prosperous communities.
                </p>
                <Button className="bg-swahilipot-600 hover:bg-swahilipot-700" asChild>
                  <Link to="/contact">Connect With Us</Link>
                </Button>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
                <div className="space-y-4">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Briefcase className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Business Incubation</h4>
                        <p className="text-sm text-gray-600">Supporting early-stage startups with resources and guidance</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <TrendingUp className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Growth Acceleration</h4>
                        <p className="text-sm text-gray-600">Helping established businesses scale and expand</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Users className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Community Development</h4>
                        <p className="text-sm text-gray-600">Building capacity within local communities</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Award className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Mentorship & Training</h4>
                        <p className="text-sm text-gray-600">Providing guidance from experienced entrepreneurs</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Entrepreneurial Community</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Whether you're starting a business, looking to grow an existing venture, or want to contribute 
                to community development, we have resources and opportunities for you to get involved.
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700" asChild>
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CommunityEntrepreneurship;
