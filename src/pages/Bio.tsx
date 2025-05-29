// src/pages/TeamBio.tsx
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Hillary",
    role: "Provides guidance to team members on difficult cases.",
    image: "/img/team/Ava_2.jpg",
    bio: "Organizing workshops, meetups, or mentorship sessions to foster community engagement and skill development.",
    email: "hillary@swahilipothub.co.ke",
    socials: {
      //linkedin: "https://linkedin.com/in/johndoe",
      //twitter: "https://twitter.com/johndoe"
    }
  },
  {
    id: 2,
    name: "Hellen Mwanzia",
    role: "Creatives & Arts",
    image: "/img/team/Ava_3.jpg",
    bio: "Promotes inclusivity and unity through cultural and creative activities within the hub. Actively encourages participation and collaboration among members.",
    email: "hailey@swahilipothub.co.ke",
    socials: {
      //linkedin: "https://linkedin.com/in/janesmith",
      //github: "https://github.com/janesmith"
    }
  },
  {
    id: 3,
    name: 'James Ndung’u',
    role: 'Youth Engagement',
    image: '/img/team/avatar.png',
    bio: 'Encourages youth to take part in decision-making, community forums, and local projects. Aims to empower young people by providing them with opportunities to voice their opinions and contribute to community development.',
    email: 'james@swahilipothub.co.ke',
    socials: {
      //linkedin: 'https://linkedin.com/example'
    }
  },
  {
    id: 4,
    name: 'Rukia Jamal',
    role: 'Partnership',
    image: '/img/team/avatar2.png',
    bio: 'Responsible for building and managing strong relationships with external organizations, donors, sponsors, and collaborators to support the hub’s mission and growth.',
    email: 'rukiya@swahilipothub.co.ke',
    socials: {
      //linkedin: 'https://linkedin.com/example'
    }
  },
  {
    id: 5,
    name: 'Chris Achinga',
    role: 'Technology',
    image: '/img/team/male.jpg',
    bio: 'Brings creative tech solutions to support hub activities. Focuses on integrating technology to enhance community engagement, streamline operations, and provide innovative solutions for members.',
    email: 'chris@swahilipothub.co.ke',
    socials: {
      //linkedin: 'https://linkedin.com/example'
    }
  },
  {
    id: 6,
    name: 'Abdulrahman Ndegwa',
    role: 'Heritage',
    image: '/img/team/female.jpg',
    bio: 'Plays a key role in preserving, promoting, and sharing cultural identity within both community-based and tech-driven environments. Focuses on integrating cultural heritage into modern practices and fostering a sense of belonging among members.',
    email: 'abu@swahilipothub.co.ke',
    socials: {
      //linkedin: 'https://linkedin.com/example'
    }
  },
];

const TeamBio = () => {
  const { id } = useParams();
  const memberId = id ? Number(id) : null;
  const member = teamMembers.find(m => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow section-padding">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Team Member Not Found</h1>
            <p className="text-gray-600 mb-8">The requested team member profile could not be found.</p>
            <Link to="/team">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
                Return to Team
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb navigation */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link to="/team" className="hover:text-blue-600">Team</Link>
              <span>/</span>
              <span className="text-gray-900">{member.name}</span>
            </nav>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Left Column - Avatar and Contact Info */}
                <div className="md:col-span-1 bg-gray-50 p-8">
                  <div className="sticky top-8">
                    {/* Avatar */}
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>

                    {/* Contact Information */}
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h2>
                      <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                      <div className="flex flex-col items-center gap-2">
                        <a 
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Email
                        </a>

                        {/* Social Links */}
                        <div className="flex justify-center gap-3 mt-4">
                          {member.socials?.linkedin && (
                            <a 
                              href={member.socials.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                          
                          {member.socials?.github && (
                            <a 
                              href={member.socials.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          
                          {member.socials?.twitter && (
                            <a 
                              href={member.socials.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Location/Address if needed */}
                      <div className="text-center mt-6">
                        <p className="text-gray-500">Swahilipot Hub Foundation</p>
                        <p className="text-gray-500">Mombasa, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Bio and Details */}
                <div className="md:col-span-2 p-8 lg:p-12">
                  <div className="max-w-2xl">
                    <div className="prose prose-lg max-w-none">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">About {member.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {member.bio}
                      </p>
                      
                      {/* Additional sections can be added here */}
                      <div className="border-t border-gray-100 pt-8 mt-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Role & Responsibilities</h4>
                        <p className="text-gray-600">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/team">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  ← Back to Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamBio;