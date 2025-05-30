import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Host = () => {
    return (
       <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Host Your Event with Us</h2>
                <p className="text-gray-700 mb-6">
                  Swahilipot Hub offers modern, well-equipped spaces for conferences, workshops, meetups, and 
                  cultural events. Our versatile venues can accommodate both small gatherings and large conferences.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Flexible Spaces</h3>
                      <p className="text-gray-600">Conference rooms, workshop areas, and open-plan event spaces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Technical Support</h3>
                      <p className="text-gray-600">High-speed internet, AV equipment, and technical assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Catering Options</h3>
                      <p className="text-gray-600">Partnerships with local food vendors for diverse catering options</p>
                    </div>
                  </div>
                </div>
                <Link to="/contact">
                <Button  size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700">
                  Inquire About Venue Booking
                </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/img/events/AMPHITHEATER.jpg"
                    alt="Event space at Swahilipot Hub"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Host;