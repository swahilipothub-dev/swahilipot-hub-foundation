
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mahmoud Noor',
      role: 'CEO, Founder and Chief Mentor',
      image: '/img/team/lukaomosh.jpg',
      note: 'Co-Founder for SwahiliPot Hub Foundation and the Chief Mentor',
    },
    {
      id: 2,
      name: 'Miriam',
      role: 'Communication Department Lead',
      image: '/img/team/onyitulia.jpg',
      note: 'In charge of communication both at the Hub and SwahiliPot Hub FM',
    },
    {
      id: 3,
      name: 'Zuhra',
      role: 'HR',
      image: '/img/team/zuhra.jpg',
      note: '',
    },
    {
      id: 8,
      name: 'male',
      role: 'Lead, Community Entrepreneurship Department',
      image: '/img/team/male.jpg',
      note: 'Empowering communities through entrepreneurship initiatives',
    }
  ];

  // State for tracking hovered card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-12">

        {/* Team cards grid - 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredCard === member.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-indigo-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 italic">{member.note}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Button variant="outline" size="sm" className="w-full">
                    Contact {member.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TeamPage;