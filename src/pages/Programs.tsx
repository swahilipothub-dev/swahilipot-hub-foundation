
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Palette, Lightbulb, Users, BookOpen, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const programCategories = [
  {
    id: "tech",
    label: "Technology",
    icon: Code,
    programs: [
      {
        title: "Coding Bootcamp",
        description: "Intensive training in web and mobile app development for beginners and intermediate coders.",
        duration: "12 weeks",
        frequency: "Quarterly"
      },
      {
        title: "Tech Startup Incubation",
        description: "Resources, mentorship, and workspace for early-stage tech startups.",
        duration: "6 months",
        frequency: "Ongoing"
      },
      {
        title: "Digital Skills Workshop",
        description: "Training in essential digital literacy and professional tools.",
        duration: "2 weeks",
        frequency: "Monthly"
      }
    ]
  },
  {
    id: "arts",
    label: "Arts & Culture",
    icon: Palette,
    programs: [
      {
        title: "Music Production",
        description: "Training in digital music production, recording, and audio engineering.",
        duration: "8 weeks",
        frequency: "Quarterly"
      },
      {
        title: "Film & Video Workshop",
        description: "Hands-on training in cinematography, editing, and storytelling.",
        duration: "4 weeks",
        frequency: "Bi-monthly"
      },
      {
        title: "Visual Arts Program",
        description: "Studio space and training for painters, sculptors, and digital artists.",
        duration: "Ongoing",
        frequency: "Weekly sessions"
      }
    ]
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    icon: Lightbulb,
    programs: [
      {
        title: "Business Fundamentals",
        description: "Introduction to business planning, marketing, and financial management.",
        duration: "4 weeks",
        frequency: "Monthly"
      },
      {
        title: "Pitch Perfect",
        description: "Training and practice in pitching business ideas to investors.",
        duration: "2 weeks",
        frequency: "Quarterly"
      },
      {
        title: "Mentorship Program",
        description: "One-on-one guidance from established entrepreneurs and professionals.",
        duration: "3 months",
        frequency: "Quarterly"
      }
    ]
  },
  {
    id: "youth",
    label: "Youth Development",
    icon: Users,
    programs: [
      {
        title: "Leadership Academy",
        description: "Developing leadership skills and community engagement strategies.",
        duration: "8 weeks",
        frequency: "Bi-annually"
      },
      {
        title: "Peer Mentoring",
        description: "Training youth to become mentors in their communities.",
        duration: "6 weeks",
        frequency: "Quarterly"
      },
      {
        title: "Career Guidance",
        description: "Workshops on career planning, resume building, and job searching.",
        duration: "2 weeks",
        frequency: "Monthly"
      }
    ]
  }
];

const Programs = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient-blue">Programs</span>
              </h1>
              <p className="text-xl text-gray-700">
                Discover how we're empowering youth through our specialized programs in technology, 
                arts, entrepreneurship, and more.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <Tabs defaultValue="tech" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {programCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <category.icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {programCategories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.programs.map((program, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-swahilipot-600" />
                              <span className="text-sm text-gray-600">{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mic className="h-4 w-4 text-swahilipot-600" />
                              <span className="text-sm text-gray-600">{program.frequency}</span>
                            </div>
                          </div>
                          <Button className="w-full">Apply Now</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Approach</h2>
                <p className="text-gray-700 mb-4">
                  At Swahilipot Hub, we believe in a holistic approach to youth development. Our programs are 
                  designed to not only build technical skills but also to foster critical thinking, collaboration, 
                  and creativity.
                </p>
                <p className="text-gray-700 mb-4">
                  Each program includes hands-on projects, mentorship from industry professionals, and 
                  opportunities to connect with a community of like-minded peers.
                </p>
                <p className="text-gray-700">
                  We continually update our curriculum to ensure it remains relevant to current industry needs 
                  and provides participants with the skills needed for success in a rapidly changing world.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                  <img
                    src="/img/programs/image4.jpg"
                    alt="Training session at Swahilipot Hub"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
