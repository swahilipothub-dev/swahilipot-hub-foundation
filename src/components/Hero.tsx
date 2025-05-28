import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-swahilipot-900/10 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/images/hero/hero1.jpg')] bg-cover bg-center opacity-10 -z-20"></div>
      
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient-blue">Empowering Youth</span>
            <br /> 
            <span>For a Brighter Future</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
            Swahilipot Hub Foundation is dedicated to nurturing youth talent through technology, arts,
            and entrepreneurship in the heart of East Africa.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary flex items-center gap-2 text-base" asChild>
              <Link to="/programs">
                Our Programs <ArrowRight size={16} />
              </Link>
            </Button>
            <Button className="btn-secondary flex items-center gap-2 text-base" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
            <Button className="bg-swahilipot-600 hover:bg-swahilipot-700 text-white flex items-center gap-2 text-base animate-pulse" asChild>
              <Link to="/we-are-hiring">
                We're Hiring! <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
