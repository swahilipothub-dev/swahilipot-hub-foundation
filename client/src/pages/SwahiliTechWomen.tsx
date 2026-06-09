
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBookOpen, faUsers, faRocket, faTrophy } from "@fortawesome/free-solid-svg-icons";
import LazyImage from "@/components/LazyImage";

const initiativesList = [
  {
    title: "Coding Bootcamps",
    description: "Intensive training programs in web development, mobile app development, and data science.",
    icon: faCode
  },
  {
    title: "Mentorship Program",
    description: "One-on-one guidance from established women in tech professionals.",
    icon: faUsers
  },
  {
    title: "Tech Skills Workshops",
    description: "Hands-on workshops covering various technical and professional skills.",
    icon: faBookOpen
  },
  // {
  //   title: "Startup Incubation",
  //   description: "Resources, funding, and support for women-led tech startups.",
  //   icon: Rocket
  // },
  {
    title: "Hackathons & Competitions",
    description: "Events that challenge participants to solve real-world problems using technology.",
    icon: faTrophy
  }
];

const testimonials = [
  {
    quote: "The Swahili Tech Women program gave me the confidence and skills to pursue my dream of becoming a software developer. Today, I'm working at a leading tech company in Mombasa.",
    name: "Amina Hassan",
    role: "Software Developer"
  },
  {
    quote: "I never thought I could start my own tech business until I joined STW. The mentorship and network I gained were instrumental in launching my startup.",
    name: "Farida Omar",
    role: "Tech Entrepreneur"
  },
  {
    quote: "The supportive community at Swahili Tech Women made all the difference in my tech journey. I found role models, friends, and collaborators who pushed me to excel.",
    name: "Joyce Mwangi",
    role: "UX Designer"
  }
];

const SwahiliTechWomen = () => {
  return (
    <>
      <Navbar />
      <main className="theme-bg-pattern-1">
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 theme-bg-pattern-2"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 reveal reveal-left" data-reveal>Swahili Tech Women</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6 reveal reveal-right" data-reveal>
              Empowering women in technology through education, mentorship, and career opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6 reveal reveal-up" data-reveal>
              <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-500 text-white">
                Join the Community
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-swahilipot-800 bg-transparent">
                Learn More
              </Button>
            </div>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70 reveal reveal-up" data-reveal>
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/programs" className="hover:text-white transition-colors">Programs</a>
              <span>/</span>
              <span className="text-swahilipot-300">Swahili Tech Women</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative reveal reveal-right" data-reveal>
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden reveal-img" data-reveal>
                  <LazyImage
                    src="/img/stw/image.png"
                    alt="Women in tech workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  Swahili Tech Women (STW) is dedicated to increasing the participation and success of women 
                  in technology fields across the coastal region of Kenya. We aim to bridge the gender gap in 
                  tech by providing accessible education, mentorship, networking, and career development 
                  opportunities.
                </p>
                <p className="text-gray-700 mb-6">
                  Through our initiatives, we're building a community of women who support each other in 
                  developing technical skills, launching startups, and advancing their careers in the 
                  technology sector.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-swahilipot-50 p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold text-swahilipot-600">500+</span>
                    <p className="text-gray-700">Women Reached</p>
                  </div>
                  <div className="bg-swahilipot-50 p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold text-swahilipot-600">35</span>
                    <p className="text-gray-700">Tech Startups</p>
                  </div>
                  <div className="bg-swahilipot-50 p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold text-swahilipot-600">12</span>
                    <p className="text-gray-700">Partner Companies</p>
                  </div>
                  <div className="bg-swahilipot-50 p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold text-swahilipot-600">85%</span>
                    <p className="text-gray-700">Job Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12 reveal reveal-up" data-reveal>
              <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
              <p className="text-gray-700">
                We offer a variety of programs designed to support women at different stages of their tech journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {initiativesList.slice(0, 3).map((initiative, index) => (
                <Card key={index} className="reveal reveal-up" data-reveal>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                      <FontAwesomeIcon icon={initiative.icon} className="text-xl text-swahilipot-600" />
                    </div>
                    <CardTitle>{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {initiativesList.slice(3).map((initiative, index) => (
                <Card key={index} className="reveal reveal-up" data-reveal>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                      <FontAwesomeIcon icon={initiative.icon} className="text-xl text-swahilipot-600" />
                    </div>
                    <CardTitle>{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-700">
                Hear from women who have transformed their careers through our program.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-swahilipot-50 border-0 reveal reveal-up" data-reveal>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-swahilipot-600">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* <div className="mt-12 text-center">
              <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700">
                Join Swahili Tech Women
              </Button>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SwahiliTechWomen;
