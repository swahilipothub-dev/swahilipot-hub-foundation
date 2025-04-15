
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, PenTool, Send, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Communication = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-swahilipot-50 to-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-blue">Communication</span> Department
              </h1>
              <p className="text-lg text-gray-700">
                Amplifying our message and connecting communities through strategic communication.
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
                  The Communication Department at Swahilipot Hub serves as the voice of our organization,
                  crafting compelling narratives that showcase our impact and mission. We develop strategic
                  communication plans, manage our digital presence, and engage with stakeholders to build
                  awareness and support for our programs.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team specializes in content creation, media relations, social media management,
                  and event promotion, ensuring that Swahilipot's message reaches diverse audiences
                  across multiple channels.
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
                        <MessageSquare className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Digital Storytelling</h4>
                        <p className="text-sm text-gray-600">Creating compelling narratives for digital platforms</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <PenTool className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Content Creation</h4>
                        <p className="text-sm text-gray-600">Developing engaging written and visual content</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Send className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Public Relations</h4>
                        <p className="text-sm text-gray-600">Building relationships with media and stakeholders</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="bg-swahilipot-500/10 p-2 rounded">
                        <Users className="h-5 w-5 text-swahilipot-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Community Engagement</h4>
                        <p className="text-sm text-gray-600">Creating strategies to involve and grow our community</p>
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
                We're always looking for passionate communicators to join our team. If you have skills in content
                creation, digital marketing, or public relations, we'd love to hear from you.
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

export default Communication;
