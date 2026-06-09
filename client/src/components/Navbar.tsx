import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faXTwitter, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileSubmenu = (menu: string) =>
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-swahilipot-900 text-white py-2 hidden md:block">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@swahilipothub.co.ke" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
              info@swahilipothub.co.ke
            </a>
            <a href="tel:+254114635505" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-xs" />
              +254 11 4635505
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: "https://facebook.com/Swahilipothub", icon: faFacebook },
              { href: "https://x.com/swahilipothub", icon: faXTwitter },
              { href: "https://www.instagram.com/swahilipothub/", icon: faInstagram },
              { href: "https://www.linkedin.com/company/swahilipot-hub/", icon: faLinkedinIn },
              { href: "https://www.youtube.com/@swahilipothubfoundation", icon: faYoutube },
            ].map(({ href, icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FontAwesomeIcon icon={icon} className="text-xs" />
              </a>
            ))}
            <span className="w-px h-4 bg-white/20 mx-1"></span>
            <a href="https://www.swahilipotfm.co.ke/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white/80 hover:text-white transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-medium">LIVE FM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center flex-shrink-0">
            <LazyImage src="/sph-logo.png" alt="Swahilipot Hub Logo" width={160} loading="eager" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            <Link to="/" className="px-3 py-2 text-gray-700 font-medium hover:text-swahilipot-600 transition-colors text-sm">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 font-medium hover:text-swahilipot-600 transition-colors text-sm">About</Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-auto px-3 py-2 text-gray-700 font-medium text-sm hover:bg-transparent hover:text-swahilipot-600 data-[state=open]:bg-transparent data-[state=open]:text-swahilipot-600">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 w-[520px] gap-1 p-3">
                      {[
                        { to: "/programs", label: "All Programs", desc: "Overview of all our programs" },
                        { to: "/programs/case-management", label: "Case Management", desc: "Personalized youth support" },
                        { to: "/programs/tourism-innovation-lab", label: "Tourism Innovation Lab", desc: "Transforming tourism through tech" },
                        { to: "/programs/employer-engagement", label: "Employer Engagement", desc: "Youth employment program" },
                        { to: "/programs/campus-ambassador", label: "Campus Ambassador", desc: "University outreach program" },
                      ].map((item) => (
                        <Link key={item.to} to={item.to} className="block p-3 rounded-md hover:bg-swahilipot-50 group transition-colors">
                          <div className="font-medium text-gray-800 group-hover:text-swahilipot-600 text-sm">{item.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/board-members" className="px-3 py-2 text-gray-700 font-medium hover:text-swahilipot-600 transition-colors text-sm">Board Members</Link>

            <Link to="/impact" className="px-3 py-2 text-gray-700 font-medium hover:text-swahilipot-600 transition-colors text-sm">Impact</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 font-medium hover:text-swahilipot-600 transition-colors text-sm">Contact</Link>

            <div className="ml-2">
              <Button className="bg-swahilipot-600 hover:bg-swahilipot-700 text-white text-sm px-5 h-9 rounded" asChild>
                <Link to="/events">Events</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-swahilipot-600 focus:outline-none p-2" aria-label="Toggle menu">
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col px-4 py-3 space-y-1">
              <div className="flex items-center gap-4 py-2 border-b mb-2 text-xs text-gray-500">
                <a href="tel:+254114635505" className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faPhone} className="text-xs" /> +254 11 4635505
                </a>
                <a href="https://www.swahilipotfm.co.ke/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-red-500">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> LIVE FM
                </a>
              </div>

              <Link to="/" className="py-2.5 text-gray-700 font-medium hover:text-swahilipot-600 border-b border-gray-100" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="py-2.5 text-gray-700 font-medium hover:text-swahilipot-600 border-b border-gray-100" onClick={toggleMenu}>About</Link>

              <div className="border-b border-gray-100">
                <button className="w-full flex items-center justify-between py-2.5 text-gray-700 font-medium hover:text-swahilipot-600" onClick={() => toggleMobileSubmenu("programs")}>
                  Programs <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform ${openMobileMenu === "programs" ? "rotate-180" : ""}`} />
                </button>
                {openMobileMenu === "programs" && (
                  <div className="pl-4 pb-2 space-y-1">
                    {[
                      { to: "/programs", label: "All Programs" },
                      { to: "/programs/case-management", label: "Case Management" },
                      { to: "/programs/tourism-innovation-lab", label: "Tourism Innovation Lab" },
                      { to: "/programs/employer-engagement", label: "Employer Engagement" },
                      { to: "/programs/campus-ambassador", label: "Campus Ambassador" },
                    ].map((item) => (
                      <Link key={item.to} to={item.to} className="block py-1.5 text-sm text-gray-600 hover:text-swahilipot-600" onClick={toggleMenu}>{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/board-members" className="py-2.5 text-gray-700 font-medium hover:text-swahilipot-600 border-b border-gray-100" onClick={toggleMenu}>Board Members</Link>

              <Link to="/impact" className="py-2.5 text-gray-700 font-medium hover:text-swahilipot-600 border-b border-gray-100" onClick={toggleMenu}>Impact</Link>
              <Link to="/contact" className="py-2.5 text-gray-700 font-medium hover:text-swahilipot-600 border-b border-gray-100" onClick={toggleMenu}>Contact</Link>

              <div className="pt-2">
                <Button className="bg-swahilipot-600 hover:bg-swahilipot-700 text-white w-full" asChild>
                  <Link to="/events" onClick={toggleMenu}>Events</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
