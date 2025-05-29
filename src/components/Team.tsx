import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Mahmoud Noor",
    role: "Chief Mentor",
    image: "/img/team/kpr.jpg"
  },{
    id: 2,
    name: "Atrash Mohammed",
    role: "Chief Operating Officer",
    image: "/img/team/atrash.jpg"
  },
  {
    id: 3,
    name: "Jacqueline Kiplangat",
    role: "Executive Associate",
    image: "/img/team/kiplangat.jpg"
  },
  {
    id: 4,
    name: "Miriam Angil",
    role: "Head of Communication",
    image: "/img/team/miriam.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient-blue">Team</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The dedicated individuals behind Swahilipot Hub Foundation's mission
            to empower youth across East Africa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-0 overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link to="/team">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
              View Team Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;