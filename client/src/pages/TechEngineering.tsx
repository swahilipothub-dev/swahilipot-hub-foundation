
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Code, Database, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TechEngineering = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-swahilipot-50 to-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-blue">Tech & Engineering</span> Department
              </h1>
              <p className="text-lg text-gray-700">
                Building innovative solutions through technology and engineering excellence.
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
                  The Tech & Engineering Department at Swahilipot Hub is the driving force behind our 
                  technical innovations and solutions. We develop scalable technology solutions for 
                  community challenges, train youth in software development, and provide technical 
                  support for all departments and programs.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team specializes in software development, hardware engineering, data science, 
                  and systems administration, creating an ecosystem where technical talent can thrive 
                  and develop solutions that matter.
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
                        <Code className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Software Development</h4>
                        <p className="text-sm text-gray-600">Building web and mobile applications with modern technologies</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Cpu className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Hardware Engineering</h4>
                        <p className="text-sm text-gray-600">Creating innovative hardware solutions and prototypes</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Database className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Data Science</h4>
                        <p className="text-sm text-gray-600">Analyzing data to derive insights and inform decisions</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Globe className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Systems Administration</h4>
                        <p className="text-sm text-gray-600">Managing IT infrastructure and ensuring system reliability</p>
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
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We're always looking for talented developers, engineers, and technologists to join our team. 
                If you have a passion for using technology to create positive change, we'd love to hear from you.
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

export default TechEngineering;
