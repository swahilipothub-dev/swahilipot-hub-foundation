import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot, faClock, faUsers, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        {/* Page Banner */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 theme-bg-pattern-2"></div>
          <div className="absolute inset-0 bg-swahilipot-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Events</h1>
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
                <div key={event.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Header */}
                  <div className="bg-swahilipot-600 px-6 py-5 flex items-start justify-between">
                    <div>
                      <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded mb-2">
                        {event.tag}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-snug">{event.title}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{event.description}</p>
                    <ul className="space-y-2.5 mb-6">
                      <li className="flex items-center gap-2.5 text-sm text-gray-600">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-swahilipot-500 text-xs flex-shrink-0" /> {event.date}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-600">
                        <FontAwesomeIcon icon={faClock} className="text-swahilipot-500 text-xs flex-shrink-0" /> {event.time}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-600">
                        <FontAwesomeIcon icon={faLocationDot} className="text-swahilipot-500 text-xs flex-shrink-0" /> {event.location}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-600">
                        <FontAwesomeIcon icon={faUsers} className="text-swahilipot-500 text-xs flex-shrink-0" /> {event.capacity}
                      </li>
                    </ul>
                    <button className="w-full bg-swahilipot-600 hover:bg-swahilipot-700 text-white font-semibold py-2.5 rounded transition-colors text-sm">
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
        <section className="py-16 md:py-24 bg-gray-50">
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
                  {venueFeatures.map((f) => (
                    <li key={f.num} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {f.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{f.title}</h4>
                        <p className="text-gray-500 text-sm">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@swahilipothub.co.ke"
                  className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-8 py-3 rounded font-semibold transition-colors"
                >
                  Inquire About Venue Booking <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80"
                    alt="Event space at Swahilipot Hub"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-swahilipot-100 rounded-2xl -z-10"></div>
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
