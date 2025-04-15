
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "Alex Kimani",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80"
  },
  {
    id: 2,
    name: "Amina Hassan",
    role: "Program Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80"
  },
  {
    id: 3,
    name: "Daniel Ochieng",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80"
  },
  {
    id: 4,
    name: "Sarah Mwangi",
    role: "Community Outreach",
    image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default Team;
