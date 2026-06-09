
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faUsers, faCalendarDays, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const CaseManagement = () => {
  return (
    <>
      <Navbar />
      <main className="theme-bg-pattern-1">
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 theme-bg-pattern-2"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 reveal reveal-left" data-reveal>Case Management</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4 reveal reveal-right" data-reveal>
              Supporting youth with personalized guidance and resources to navigate challenges and achieve their goals.
            </p>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70 reveal reveal-up" data-reveal>
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/programs" className="hover:text-white transition-colors">Programs</a>
              <span>/</span>
              <span className="text-swahilipot-300">Case Management</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white theme-bg-pattern-1 theme-bg-overlay">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 reveal reveal-left" data-reveal>How Our Case Management Works</h2>
                <p className="text-gray-700 mb-6 reveal reveal-right" data-reveal>
                  Our case management program provides comprehensive support to youth facing various challenges. 
                  We connect individuals with dedicated case managers who assess needs, develop personalized 
                  action plans, and coordinate access to resources and services.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-0 shadow-sm reveal reveal-up" data-reveal>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faTableList} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Personalized Assessment</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faUsers} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Support Network</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faCalendarDays} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Regular Check-ins</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FontAwesomeIcon icon={faCommentDots} className="text-2xl text-swahilipot-600 mb-2" />
                      <p className="font-medium">Ongoing Guidance</p>
                    </CardContent>
                  </Card>
                </div>
                {/* <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700">
                  Request a Case Manager
                </Button> */}
              </div>
              <div className="relative reveal reveal-right" data-reveal>
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden reveal-img" data-reveal>
                  <img
                    src="/img/case-management/img00.jpg"
                    alt="Case management session"
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
                Through our case management program, we've helped hundreds of young people overcome obstacles 
                and achieve meaningful progress in their personal and professional lives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="reveal reveal-up" data-reveal>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">250+</CardTitle>
                  <CardDescription>Youth served annually</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We provide comprehensive case management services to over 250 youth each year, 
                    helping them navigate challenges and access opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="reveal reveal-up" data-reveal>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">85%</CardTitle>
                  <CardDescription>Success rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    85% of youth in our case management program report significant progress 
                    toward their goals within six months.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="reveal reveal-up" data-reveal>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-swahilipot-600">15</CardTitle>
                  <CardDescription>Partner organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We collaborate with 15 partner organizations to provide comprehensive 
                    services and resources to the youth we serve.
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

export default CaseManagement;
