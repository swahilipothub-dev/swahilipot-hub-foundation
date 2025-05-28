// src/pages/Team.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  note: string;
  bio: string;
  email: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Hillary',
      role: 'Case-Management',
      image: '/img/team/Ava_2.jpg',
      note: 'In charge of case management',
      bio: 'Case management',
      email: 'hillary@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
    {
      id: 2,
      name: 'Hellen Mwanzia',
      role: 'Creatives & Arts',
      image: '/img/team/Ava_3.jpg',
      note: '',
      bio: '',
      email: 'hailey@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
    {
      id: 3,
      name: 'James Ndung’u',
      role: 'Youth Engagement',
      image: '/img/team/avatar.png',
      note: '',
      bio: '',
      email: 'james@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
    {
      id: 4,
      name: 'Rukia Jamal',
      role: 'Partnership',
      image: '/img/team/avatar2.png',
      note: '',
      bio: '',
      email: 'rukiya@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
    {
      id: 5,
      name: 'Chris Achinga',
      role: 'Technology',
      image: '/img/team/male.jpg',
      note: '',
      bio: '',
      email: 'chris@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
    {
      id: 6,
      name: 'Abdulrahman Ndegwa',
      role: 'Heritage',
      image: '/img/team/female.jpg',
      note: '',
      bio: '',
      email: 'abu@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-black">Our</span> 
            <span className="text-gradient-blue"> Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          "At Swahilipot Hub, we're driven by a passionate and diverse team of innovators, creators, and visionaries.  
          Together, we foster collaboration, mentorship, and groundbreaking solutions, ensuring Swahilipot Hub remains a catalyst for growth and opportunity in the digital space."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/team/bio/${member.id}`}>
                  <div className="relative h-64 overflow-hidden cursor-pointer">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredCard === member.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
                
                <div className="p-6">
                  <Link to={`/team/bio/${member.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                      {member.name}
                    </h3>
                  </Link>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 italic mb-4">{member.note}</p>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <a href={`mailto:${member.email}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Contact {member.name.split(' ')[0]}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;