import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUsers, faGraduationCap, faHandshake } from "@fortawesome/free-solid-svg-icons";
import LazyImage from "@/components/LazyImage";

const EmployerEngagement = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero/hero1.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 reveal reveal-left" data-reveal>Employer Engagement</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4 reveal reveal-right" data-reveal>
              Connecting employers with ready-to-work youth through strategic partnerships and comprehensive support programs.
            </p>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70 reveal reveal-up" data-reveal>
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/programs" className="hover:text-white transition-colors">Programs</a>
              <span>/</span>
              <span className="text-swahilipot-300">Employer Engagement</span>
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
              <div className="reveal reveal-left" data-reveal>
                <h2 className="text-3xl font-bold mb-6">How Our Program Works</h2>
                <p className="text-gray-700 mb-6">
                  The Fursa Youth Employment Program connects employers with ready-to-work Opportunity Youth (OYs) aged 18–35. 
                  We collaborate with various industries to create meaningful employment opportunities and ensure successful placements.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-0 shadow-sm reveal reveal-up" data-reveal>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faUsers} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Mentorship</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Job Matching</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Skills Training</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faHandshake} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Post-Placement Support</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative reveal reveal-right" data-reveal>
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden reveal-img" data-reveal>
                  <LazyImage
                    src="/img/capmus-ambassadors.jpg"
                    alt="Employer engagement session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12 reveal reveal-up" data-reveal>
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-700">
                Through our employer engagement program, we've successfully connected numerous youth with meaningful employment opportunities 
                while helping businesses find talented, motivated employees.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="reveal reveal-up" data-reveal>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">500+</CardTitle>
                  <CardDescription>Youth Placed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We've successfully placed over 500 youth in various industries through our employer engagement program.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="reveal reveal-up" data-reveal>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">80%</CardTitle>
                  <CardDescription>Retention Rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    80% of placed youth maintain their positions for over a year, thanks to our comprehensive support system.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="reveal reveal-up" data-reveal>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">50+</CardTitle>
                  <CardDescription>Partner Employers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We collaborate with over 50 employers across different sectors to create opportunities for youth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EmployerEngagement;