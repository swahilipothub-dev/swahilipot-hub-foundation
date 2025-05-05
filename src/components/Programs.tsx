
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Lightbulb, Palette, ArrowRight, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: 1,
    title: "Tech Programs",
    description: "Providing resources, mentorship, and workspace for tech startups and innovators.",
    icon: Code,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    link: "/programs"
  },
  {
    id: 2,
    title: "Creative & Arts",
    description: "Promoting creative expression through music, film, dance, and visual arts programs.",
    icon: Palette,
    color: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
    link: "/programs"
  },
  {
    id: 3,
    title: "Entrepreneurship",
    description: "Developing business skills and connecting youth entrepreneurs with opportunities.",
    icon: Lightbulb,
    color: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    link: "/programs"
  }
];

const specializedPrograms = [
  {
    id: 4,
    title: "Case Management",
    description: "Supporting youth with personalized guidance and resources to navigate challenges.",
    icon: Briefcase,
    color: "bg-green-500/10",
    iconColor: "text-green-500",
    link: "/programs/case-management"
  },
  {
    id: 5,
    title: "Tourism Innovation Lab",
    description: "Developing innovative solutions to transform Mombasa's tourism sector.",
    icon: Lightbulb,
    color: "bg-amber-500/10",
    iconColor: "text-amber-500",
    link: "/programs/tourism-innovation-lab"
  },
  {
    id: 6,
    title: "Swahili Tech Women",
    description: "Empowering women in technology through education, mentorship, and opportunities.",
    icon: Users,
    color: "bg-pink-500/10",
    iconColor: "text-pink-500",
    link: "/programs/swahili-tech-women"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-blue">Programs</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover how Swahilipot Hub is nurturing the next generation of innovators, 
            artists, and entrepreneurs through our specialized programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${program.color}`}>
                  <program.icon className={`w-6 h-6 ${program.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-swahilipot-600 p-0 hover:text-swahilipot-700" asChild>
                  <Link to={program.link} className="flex items-center gap-1">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Specialized Programs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specializedPrograms.map((program) => (
              <Card key={program.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${program.color}`}>
                    <program.icon className={`w-6 h-6 ${program.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="text-swahilipot-600 p-0 hover:text-swahilipot-700" asChild>
                    <Link to={program.link} className="flex items-center gap-1">
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700" asChild>
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
