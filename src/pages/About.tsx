import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Heart, Target, Clock } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of community collaboration and support."
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We strive to give youth the tools and confidence to succeed."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We encourage creative solutions to local and global challenges."
  },
  {
    icon: Clock,
    title: "Sustainability",
    description: "We focus on long-term impact and sustainable development."
  }
];

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient-blue">Swahilipot Hub Foundation</span>
              </h1>
              <p className="text-xl text-gray-700">
                Our mission is to help the community grow itself
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Swahilipot Hub Foundation is a non-profit organization that meaningfully engages and empowers
                  youth (18 to 35 years) to enable them to unleash their full potential. Based in the coastal city
                  of Mombasa in Kenya, it is regulated by the NGO Coordination Board of Kenya.
                </p>
                <p className="text-gray-700 mb-4">
                  In 2016, Mahmoud Noor (alias Mentor001) took action and founded Swahilipot Hub with support from National
                  Museums of Kenya (NMK), Seacom, ICT Authority, and Cisco.
                </p>
                <p className="text-gray-700 mb-4">
                  It started as a community-based organization (CBO) with programs focused on technology
                  & innovation. Has grown over the years to become a non-profit organization (NGO) with diverse
                  program areas and reach.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <iframe
                      src="https://www.youtube.com/embed/bscypssE8Ms?autoplay=0"
                      className="w-full h-full object-cover rounded-lg"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Swahilipot Documentary YouTube video"
                    ></iframe>
                    <button
                      onClick={() => window.open('https://www.youtube.com/watch?v=bscypssE8Ms', '_blank')}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-lg"
                    >
                      <p className="text-white text-2xl font-bold">Play Documentary</p>
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                The principles that guide our work and impact at Swahilipot Hub Foundation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-swahilipot-100 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-swahilipot-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
