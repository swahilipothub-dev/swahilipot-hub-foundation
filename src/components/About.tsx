import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-blue">About</span> Swahilipot Hub Foundation
            </h2>

            <p className="text-gray-700 mb-4">
              Swahilipot Hub Foundation is a community-based organization focused on empowering youth in 
              East Africa through technology, arts, and entrepreneurship.
            </p>

            <p className="text-gray-700 mb-6">
              Founded with the mission to bridge the gap between talented youth and 
              opportunities in the digital economy, we provide a collaborative space where young innovators
              can learn, create, and grow their ideas into sustainable ventures.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-swahilipot-50 p-4 rounded-lg">
                <h3 className="font-bold text-swahilipot-700 text-lg">Our Mission</h3>
                <p className="text-gray-600 text-sm">To empower youth through innovation and creativity</p>
              </div>
              <div className="bg-swahilipot-50 p-4 rounded-lg">
                <h3 className="font-bold text-swahilipot-700 text-lg">Our Vision</h3>
                <p className="text-gray-600 text-sm">A community of empowered youth driving positive change</p>
              </div>
            </div>

            {/* Learn More and Join Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-primary" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>

              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSe8xVQEK2VP89CYE4166i6Vr6iriaA1x1D5ecVBCVY5MuqP3g/viewform?usp=dialog"
                target="_blank"
              >
                <Button className="btn-outline">Join the Youth Database</Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
              <img
                src="\img\communityspace.jpg"
                alt="Youth collaboration at Swahilipot Hub"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-swahilipot-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
