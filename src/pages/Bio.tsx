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
    role: "Case Management",
    image: "/img/team/Ava_2.jpg",
    bio: "In charge of case management",
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
    bio: "",
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
    bio: '',
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
    bio: '',
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
    bio: '',
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
    bio: '',
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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Team Member Not Found</h1>
          <p className="mb-6">The requested team member could not be found.</p>
          <Link to="/team">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Back to Team
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/team" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Team
          </Link>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h1>
                <p className="text-blue-600 text-xl mb-6">{member.role}</p>
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">{member.bio}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a href={`mailto:${member.email}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Contact via Email
                    </Button>
                  </a>
                  
                  {member.socials?.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        LinkedIn
                      </Button>
                    </a>
                  )}
                  
                  {member.socials?.github && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        GitHub
                      </Button>
                    </a>
                  )}
                  
                  {member.socials?.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        Twitter
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamBio;