
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Palette, Lightbulb, Users, BookOpen, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useProgramsPageSEO } from "@/hooks/useSEO";

const programCategories = [
  {
    id: "tech",
    label: "Technology",
    icon: Code,
    programs: [
      {
        title: "Industrial Attachment",
        description: "A structured program offering hands-on experience in software development, IT infrastructure, and digital innovation. Students work on real projects while receiving mentorship from industry professionals.",
        duration: "3 months",
        frequency: "Intake"
      },
      {
        title: "DataCamp Scholarship Program",
        description: "In partnership with DataCamp, Swahilipot Hub offers comprehensive data science and analytics learning scholarships. Selected participants receive full access to DataCamp's premium courses, projects, and certifications to build their data skills.",
        duration: "6 months",
        frequency: "Quarterly intake"
      },
      {
        title: "Digital Literacy Program (Digital Boat)",
        description: "Access to digital skills is essential for education, employment, and entrepreneurship. The Digital Boat is a hands-on, community-driven program designed to bridge the digital divide by equipping learners with practical computer, internet, data, and introductory AI skills aligned with real-world needs.",
        duration: "12 weeks (3 months) per cohort",
        frequency: "Ongoing"
      },
      {
        title: "SPH Cisco Networking Academy",
        description: "As digital transformation accelerates, networking and cybersecurity skills have become critical. The SPH Cisco Academy delivers internationally aligned Cisco curriculum through structured, instructor-led classes. It provides industry-relevant training and lab practice while maintaining affordability.",
        duration: "8 to 12 weeks per module",
        frequency: "Intake"
      },
      {
        title: "DigiKen (Digital Platforms Kenya)",
        description: "Supported by a UN Joint SDG Programme, DigiKen utilizes a hybrid learning model to ensure Kenya's digital transformation leaves no one behind. Swahilipot Hub serves as a community anchor, providing foundational in-person training for marginalized groups and virtual guidance for advanced digital skills.",
        duration: "Rolled out as part of a broader 36-month UN Joint SDG Programme",
        frequency: "Intake"
      },
      {
        title: "Digital Skills Workshop",
        description: "Training in essential digital literacy and professional tools.",
        duration: "7 weeks",
        frequency: "Ongoing"
      },
      {
        title: "Programming Foundation",
        description: "Programming Foundation is an introductory software development program designed to equip learners with essential programming knowledge and practical development skills.",
        duration: "3 months",
        frequency: "Ongoing"
      }
    ]
  },
  {
    id: "arts",
    label: "Creative & Arts",
    icon: Palette,
    programs: [
      {
        title: "Talent to Income",
        description: "A comprehensive program that helps individuals transform their creative talents into sustainable income streams through market exposure.",
        duration: "8 weeks",
        frequency: "Quarterly"
      },
      {
        title: "SCEP",
        description: "Swahilipothub Creatives Empowerment Program - A comprehensive initiative empowering artists through skill development, networking, and professional growth opportunities.",
        duration: "4 weeks",
        frequency: "Bi-monthly"
      },
      {
        title: "Partnership & Collaboration",
        description: "Connecting artists with opportunities through partnerships with galleries, art organizations, and cultural institutions. Includes collaborative projects, exhibitions, and networking events.",
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
      },
      {
        title: "Campus Ambassador Program",
        description: "A strategic partnership with academic institutions designed to bridge the gap between academic learning and industry requirements. Student ambassadors serve as the official link between their campus and Swahilipot Hub, co-leading initiatives that enhance peer skills, institutional visibility, and community impact.",
        duration: "A year-long initiative",
        frequency: "Ongoing"
      }
    ]
  }
];

const Programs = () => {
  // useProgramsPageSEO();

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
                          {/* <Button className="w-full">Apply Now</Button> */}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700" asChild>
                <a href="https://www.swahilipotfm.co.ke/" target="_blank" rel="noopener noreferrer">
                  Listen to Swahilipot FM
                </a>
              </Button>
            </div>
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
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <p className="text-swahilipot-600">Training Session Image</p>
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
