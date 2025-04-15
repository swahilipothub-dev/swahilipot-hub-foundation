
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube,  } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-swahilipot-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img src="/sph-logo-inverted.png" alt="Swahilipot Hub Logo" width={180} />
              </Link>
            </div>
            <p className="text-white/70 mb-6">
              Empowering youth through technology, arts, and entrepreneurship across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/Swahilipothub" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/swahilipothub" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/swahilipothub/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/swahilipot-hub/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@swahilipothubfoundation" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-white/70 hover:text-white transition-colors">Mombasa Tourism Innovation Hub</Link></li>
              <li><Link to="/programs" className="text-white/70 hover:text-white transition-colors">Arts & Culture</Link></li>
              <li><Link to="/programs" className="text-white/70 hover:text-white transition-colors">Entrepreneurship</Link></li>
              <li><Link to="/programs" className="text-white/70 hover:text-white transition-colors">Youth Mentorship</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/impact" className="text-white/70 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link to="/team" className="text-white/70 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-white/70">
              <p className="mb-2">Opp. Governor's Office, Butterfly House</p>
              <p className="mb-2">Mombasa, Kenya</p>
              <p className="mb-2">info@swahilipothub.org</p>
              <p>+254 700 123 456</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Swahilipot Hub Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
