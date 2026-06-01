import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faXTwitter, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer>
      {/* Newsletter Strip */}
      <div className="bg-swahilipot-600 py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Stay Updated</h3>
              <p className="text-white/80 text-sm">Subscribe to our newsletter for news, events &amp; impact stories.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 md:w-72 px-4 py-3 text-sm text-gray-800 bg-white rounded-l-md focus:outline-none"
              />
              <button type="submit" className="bg-swahilipot-900 hover:bg-swahilipot-800 text-white px-5 py-3 rounded-r-md flex items-center gap-2 text-sm font-medium transition-colors">
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-swahilipot-950 text-white">
        <div className="container-custom py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-5">
                <img src="/sph-logo-inverted.png" alt="Swahilipot Hub Logo" width={160} />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Empowering youth through technology, arts, and entrepreneurship across East Africa.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://facebook.com/Swahilipothub", icon: faFacebook },
                  { href: "https://x.com/swahilipothub", icon: faXTwitter },
                  { href: "https://www.instagram.com/swahilipothub/", icon: faInstagram },
                  { href: "https://www.linkedin.com/company/swahilipot-hub/", icon: faLinkedinIn },
                  { href: "https://www.youtube.com/@swahilipothubfoundation", icon: faYoutube },
                ].map(({ href, icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-swahilipot-600 flex items-center justify-center transition-colors">
                    <FontAwesomeIcon icon={icon} className="text-xs" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-swahilipot-500">Programs</h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/programs", label: "Mombasa Tourism Innovation Hub" },
                  { to: "/programs", label: "Arts & Culture" },
                  { to: "/programs", label: "Entrepreneurship" },
                  { to: "/programs", label: "Youth Mentorship" },
                  { to: "/programs/campus-ambassador", label: "Campus Ambassador" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/60 hover:text-swahilipot-400 transition-colors text-sm flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs text-swahilipot-500 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-swahilipot-500">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/impact", label: "Our Impact" },
                  { to: "/events", label: "Events" },
                  { to: "/careers", label: "Careers" },
                  { to: "/contact", label: "Contact Us" },
                  { to: "/industrial-attachment", label: "Industrial Attachment" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/60 hover:text-swahilipot-400 transition-colors text-sm flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs text-swahilipot-500 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-swahilipot-500">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-swahilipot-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">Opp. Governor's Office, Butterfly House, Mombasa, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-swahilipot-400 flex-shrink-0" />
                  <a href="mailto:info@swahilipothub.co.ke" className="text-white/60 hover:text-swahilipot-400 transition-colors text-sm">info@swahilipothub.co.ke</a>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-swahilipot-400 flex-shrink-0" />
                  <a href="tel:+254114635505" className="text-white/60 hover:text-swahilipot-400 transition-colors text-sm">+254 11 4635505</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <a href="https://www.swahilipotfm.co.ke/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-swahilipot-400 transition-colors text-sm">Swahilipot FM – Listen Live</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-sm">&copy; {currentYear} Swahilipot Hub Foundation. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link to="/terms" className="text-white/50 hover:text-white/80 transition-colors text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-white/50 hover:text-white/80 transition-colors text-sm">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <script defer src="https://cloud.umami.is/script.js" data-website-id="74a76416-3ac7-4d41-a41a-03db2a627066"></script>
    </footer>
  );
};

export default Footer;
