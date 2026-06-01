import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faUsers, faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import CountOnHover from "./CountOnHover";

const Anniversary = () => {
  const milestones = [
    {
      target: 10,
      suffix: "+",
      label: "Years of Impact",
      icon: faTrophy,
    },
    {
      target: 50000,
      suffix: "+",
      label: "Youth Empowered",
      icon: faUsers,
    },
    {
      target: 500,
      suffix: "+",
      label: "Success Stories",
      icon: faStar,
    },
    {
      target: 1000,
      suffix: "+",
      label: "Projects Launched",
      icon: faRocket,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-swahilipot-50 via-white to-swahilipot-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-swahilipot-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-swahilipot-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal reveal-up" data-reveal>
          <div className="inline-block bg-swahilipot-100 text-swahilipot-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 reveal reveal-left" data-reveal>
            A Decade of Excellence
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 reveal reveal-left" data-reveal>
            Celebrating <span className="text-swahilipot-600">10 Years</span> of Transformation
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed reveal reveal-right" data-reveal>
            Since 2016, Swahilipot Hub Foundation has been a beacon of hope and opportunity, 
            empowering thousands of young people across East Africa through technology, arts, 
            and entrepreneurship.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 reveal reveal-up"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold mb-3 text-swahilipot-600">
                <CountOnHover target={milestone.target} suffix={milestone.suffix} />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={milestone.icon} className="text-2xl text-swahilipot-600" />
                <h3 className="text-lg font-semibold text-gray-900">{milestone.label}</h3>
              </div>
              <div className="h-1 w-12 bg-swahilipot-600 rounded"></div>
            </div>
          ))}
        </div>

        {/* Anniversary Message */}
        <div className="bg-gradient-to-r from-swahilipot-600 to-swahilipot-700 rounded-2xl p-12 text-white text-center mb-12 reveal reveal-up" data-reveal>
          <p className="text-2xl md:text-3xl font-bold mb-4">
            "A decade in, we're just getting started."
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our commitment to nurturing the next generation of innovators, artists, and entrepreneurs 
            remains stronger than ever. Together, we're building a brighter future for East Africa.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 reveal reveal-up" data-reveal>Our Journey</h3>
          
          <div className="space-y-8">
            {[
              { year: "2016", title: "Founded", desc: "Swahilipot Hub Foundation established with a vision to empower coastal youth" },
              { year: "2018", title: "First 1,000 Youth Reached", desc: "Expanded programs across multiple departments and communities" },
              { year: "2020", title: "Regional Expansion", desc: "Extended impact beyond Mombasa to neighboring regions" },
              { year: "2022", title: "Digital Transformation", desc: "Adapted programs to online platforms during global challenges" },
              { year: "2024", title: "10 Years Strong", desc: "Celebrating a decade of transformation and continued growth" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-swahilipot-600 flex items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  {index < 4 && <div className="w-1 h-16 bg-swahilipot-200 mt-4"></div>}
                </div>
                <div className="pb-8">
                  <h4 className="text-lg font-bold text-swahilipot-600 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anniversary;
