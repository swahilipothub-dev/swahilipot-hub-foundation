// src/pages/Team.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      name: 'Hillary Mutuma',
      role: 'Case-Management',
      image: '/img/team/hillary.jpg',
      note: 'Provides guidance to team members on difficult cases.',
      bio: 'Encouraging participation and collaboration within the hub.',
      email: 'hillary@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
    {
      id: 2,
      name: 'Hellen Mwanzia',
      role: 'Creatives & Arts',
      image: '/img/team/heily.jpg',
      note: 'Promotes inclusivity and unity through cultural and creative activities.',
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
      image: '/img/team/james.jpg',
      note: 'Encourages youth to take part in decision-making, community forums, and local projects.',
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
      image: '/img/team/rukia.jpg',
      note: 'Building and managing strong relationships with external organizations.',
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
      image: '/img/team/Chris.jpg',
      note: 'Brings creative tech solutions to support hub activities',
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
      image: '/img/team/abu.jpg',
      note: 'Focuses on integrating cultural heritage into modern practices and fostering a sense of belonging among members.',
      bio: '',
      email: 'abu@swahilipothub.co.ke',
      socials: {
        linkedin: 'https://linkedin.com/example'
      }
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient-blue">Team</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At Swahilipot Hub, we're driven by a passionate and diverse team of innovators, creators, and visionaries.
              Together, we foster collaboration, mentorship, and groundbreaking solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member) => (
              <Card 
                key={member.id} 
                className="group border-0 overflow-hidden shadow hover:shadow-md transition-all relative"
              >
                <Link to={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="aspect-square overflow-hidden cursor-pointer relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-sm">{member.note}</p>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4 text-center">
                  <Link to={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  </Link>
                  <p className="text-gray-600">{member.role}</p>
                  {/* <a 
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Contact
                  </a> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamPage;