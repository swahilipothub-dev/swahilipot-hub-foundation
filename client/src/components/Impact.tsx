
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Briefcase, MapPin } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "5,000+",
    label: "Youth Impacted",
    icon: Users,
    color: "text-blue-500"
  },
  {
    id: 2,
    value: "200+",
    label: "Projects Launched",
    icon: Award,
    color: "text-indigo-500"
  },
  {
    id: 3,
    value: "150+",
    label: "Startups Incubated",
    icon: Briefcase,
    color: "text-cyan-500"
  },
  {
    id: 4,
    value: "10+",
    label: "Community Centers",
    icon: MapPin,
    color: "text-purple-500"
  }
];

const Impact = () => {
  return (
    <section id="impact" className="section-padding gradient-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Since our founding, Swahilipot Hub has created measurable change
            in the lives of youth across East Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
