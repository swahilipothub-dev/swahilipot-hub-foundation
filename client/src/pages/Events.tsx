import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot, faClock, faUsers, faArrowRight, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Entrepreneurship Summit",
    description: "A gathering of tech entrepreneurs, investors, and industry leaders to discuss innovation and growth opportunities in East Africa.",
    date: "May 15, 2025",
    time: "9:00 AM – 5:00 PM",
    location: "Swahilipot Hub, Mombasa",
    capacity: "250 attendees",
    tag: "Summit",
    color: "from-swahilipot-600 to-swahilipot-700",
  },
  {
    id: 2,
    title: "Digital Arts Exhibition",
    description: "Showcasing digital artwork, animations, and creative projects from young artists across the coastal region.",
    date: "June 8, 2025",
    time: "10:00 AM – 7:00 PM",
    location: "Swahilipot Gallery, Mombasa",
    capacity: "200 attendees",
    tag: "Exhibition",
    color: "from-swahilipot-500 to-swahilipot-600",
  },
  {
    id: 3,
    title: "Youth Leadership Workshop",
    description: "Interactive workshop focused on developing leadership skills, public speaking, and community organizing for youth leaders.",
    date: "July 22, 2025",
    time: "2:00 PM – 6:00 PM",
    location: "Swahilipot Hub, Mombasa",
    capacity: "50 attendees",
    tag: "Workshop",
    color: "from-swahilipot-700 to-swahilipot-800",
  },
];

const venueFeatures = [
  { num: "1", title: "Flexible Spaces", desc: "Conference rooms, workshop areas, and open-plan event spaces" },
  { num: "2", title: "Technical Support", desc: "High-speed internet, AV equipment, and technical assistance" },
  { num: "3", title: "Catering Options", desc: "Partnerships with local food vendors for diverse catering options" },
];

const Events = () => {
  return (
    <>
      <Navbar />
      <main className="theme-bg-pattern-1">
        <style>{`
          @keyframes bounce-in {
            0% { transform: scale(0) rotate(-180deg); opacity: 0; }
            60% { transform: scale(1.1) rotate(10deg); }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(41, 55, 138, 0.6), 0 0 40px rgba(15, 76, 204, 0.3); }
            50% { box-shadow: 0 0 30px rgba(41, 55, 138, 0.8), 0 0 60px rgba(15, 76, 204, 0.5); }
          }

          @keyframes scale-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .event-card-animated {
            animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) backwards;
          }

          .event-card-animated:nth-child(1) { animation-delay: 0s; }
          .event-card-animated:nth-child(2) { animation-delay: 0.2s; }
          .event-card-animated:nth-child(3) { animation-delay: 0.4s; }

          .featured-event-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .talent-card-hover:hover {
            transform: translateY(-10px) scale(1.02);
            animation: scale-pulse 0.6s ease-in-out infinite;
          }
        `}
        </style>

        {/* Page Banner */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 theme-bg-pattern-2"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>

          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-up">
              Let's <span className="bg-gradient-to-r from-swahilipot-300 to-swahilipot-400 bg-clip-text text-transparent">Celebrate</span>!
            </h1>
            <p className="text-xl text-white/80 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Discover amazing events happening at Swahilipot Hub
            </p>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-swahilipot-300">Events</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Featured: Pwani Gat Talent */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 mb-6 bg-swahilipot-50 px-4 py-2 rounded-full">
                  <FontAwesomeIcon icon={faTrophy} className="text-swahilipot-600 text-lg" />
                  <span className="text-swahilipot-600 font-bold text-sm uppercase tracking-widest">Featured Event</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                  <span className="text-swahilipot-600">Pwani Gat Talent</span>
                  <br />
                  <span className="text-3xl md:text-4xl">Celebrating Coastal Creativity!</span>
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  A spectacular talent showcase celebrating the diverse talents of young people from the Kenyan coast. 
                  From music to dance, spoken word to comedy, this is YOUR stage to shine and inspire the community!
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-swahilipot-100 flex items-center justify-center flex-shrink-0 group-hover:bg-swahilipot-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <FontAwesomeIcon icon={faCalendarDays} className="text-swahilipot-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">October 31, 2026</p>
                      <p className="text-gray-600 text-sm">Mark your calendars!</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-swahilipot-100 flex items-center justify-center flex-shrink-0 group-hover:bg-swahilipot-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <FontAwesomeIcon icon={faClock} className="text-swahilipot-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">6:00 PM until late</p>
                      <p className="text-gray-600 text-sm">An evening of entertainment into the night</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-swahilipot-100 flex items-center justify-center flex-shrink-0 group-hover:bg-swahilipot-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <FontAwesomeIcon icon={faLocationDot} className="text-swahilipot-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Coast Gymkhana, Mombasa</p>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=-4.0643955,39.6667734"
                        target="_blank"
                        rel="noreferrer"
                        className="text-swahilipot-600 text-sm font-semibold hover:text-swahilipot-700 hover:underline"
                      >
                        Get directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-swahilipot-100 flex items-center justify-center flex-shrink-0 group-hover:bg-swahilipot-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <FontAwesomeIcon icon={faUsers} className="text-swahilipot-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">1,000+ attendees expected</p>
                      <p className="text-gray-600 text-sm">Community, friends, family & supporters</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.pwaniinnovationweek.com/tickets"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-swahilipot-600 text-swahilipot-600 hover:bg-swahilipot-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                  >
                    Get Tickets <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative">
                  {/* Animated glow ring */}
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-swahilipot-600 to-swahilipot-500 opacity-20 blur-3xl featured-event-glow" />
                  
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/logos/pgt2026.jpeg"
                      alt="Pwani Gat Talent Event"
                      className="w-full h-96 md:h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-swahilipot-900/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-14">
              <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">What's On</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Upcoming Events</h2>
              <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us for these exciting upcoming events and be part of the Swahilipot community experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group event-card-animated relative">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-swahilipot-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header */}
                  <div className={`bg-gradient-to-r ${event.color} px-6 py-5 flex items-start justify-between relative overflow-hidden`}>
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded mb-2 backdrop-blur-sm">
                        {event.tag}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-snug">{event.title}</h3>
                    </div>
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  {/* Body */}
                  <div className="p-6 relative z-10">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 group-hover:text-gray-900 transition-colors">{event.description}</p>
                    <ul className="space-y-2.5 mb-6">
                      <li className="flex items-center gap-2.5 text-sm text-gray-600 group-hover:text-swahilipot-600 transition-colors">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-swahilipot-600 text-xs flex-shrink-0 group-hover:scale-125 transition-transform" /> {event.date}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-600 group-hover:text-swahilipot-600 transition-colors">
                        <FontAwesomeIcon icon={faClock} className="text-swahilipot-600 text-xs flex-shrink-0 group-hover:scale-125 transition-transform" /> {event.time}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-600 group-hover:text-swahilipot-600 transition-colors">
                        <FontAwesomeIcon icon={faLocationDot} className="text-swahilipot-600 text-xs flex-shrink-0 group-hover:scale-125 transition-transform" /> {event.location}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-600 group-hover:text-swahilipot-600 transition-colors">
                        <FontAwesomeIcon icon={faUsers} className="text-swahilipot-600 text-xs flex-shrink-0 group-hover:scale-125 transition-transform" /> {event.capacity}
                      </li>
                    </ul>
                    <button className="w-full bg-swahilipot-600 hover:bg-swahilipot-700 text-white font-semibold py-2.5 rounded transition-all duration-300 text-sm transform group-hover:scale-105 group-hover:-translate-y-0.5 shadow-md group-hover:shadow-lg">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button className="inline-flex items-center gap-2 border border-swahilipot-600 text-swahilipot-600 hover:bg-swahilipot-600 hover:text-white px-8 py-3 rounded font-semibold transition-colors">
                View All Events <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-swahilipot-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">Venue Hire</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Host Your Event with Us</h2>
                <div className="w-12 h-1 bg-swahilipot-600 mb-6"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Swahilipot Hub offers modern, well-equipped spaces for conferences, workshops, meetups, and
                  cultural events. Our versatile venues can accommodate both small gatherings and large conferences.
                </p>
                <ul className="space-y-4 mb-8">
                  {venueFeatures.map((f, idx) => (
                    <li key={f.num} className="flex items-start gap-4 group cursor-pointer" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="w-8 h-8 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover:bg-swahilipot-700 group-hover:scale-125 transition-all duration-300 shadow-md">
                        {f.num}
                      </div>
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <h4 className="font-semibold text-gray-900 group-hover:text-swahilipot-600 transition-colors">{f.title}</h4>
                        <p className="text-gray-500 text-sm">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://swahilipot.jengasol.co.ke/venue/calendar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1"
                >
                  Inquire About Venue Booking <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Events;
