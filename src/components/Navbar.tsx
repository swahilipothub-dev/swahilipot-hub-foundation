import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/sph-logo.png" alt="Swahilipot Hub Logo" width={180} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6">
          <Link to="/" className="px-2 py-1 text-foreground hover:text-swahilipot-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="px-2 py-1 text-foreground hover:text-swahilipot-600 transition-colors">
            About
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-auto px-2 py-1 hover:bg-transparent hover:text-swahilipot-600 data-[state=open]:bg-transparent">Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 w-[500px] gap-3 p-4">
                    <Link to="/programs" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">All Programs</div>
                      <div className="text-sm text-gray-600">Overview of all our programs</div>
                    </Link>
                    <Link to="/programs/case-management" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Case Management</div>
                      <div className="text-sm text-gray-600">Personalized youth support</div>
                    </Link>
                    <Link to="/programs/tourism-innovation-lab" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Tourism Innovation Lab</div>
                      <div className="text-sm text-gray-600">Transforming tourism through tech</div>
                    </Link>
                    <Link to="/programs/employer-engagement" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Employer Engagement</div>
                      <div className="text-sm text-gray-600">Youth employment program</div>
                    </Link>
                    <Link to="/programs/campus-ambassador" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Campus Ambassador</div>
                      <div className="text-sm text-gray-600">University outreach program</div>
                    </Link>
                    <Link to="/programs/swahili-tech-women" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Swahili Tech Women</div>
                      <div className="text-sm text-gray-600">Women in technology initiative</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-auto px-2 py-1 hover:bg-transparent hover:text-swahilipot-600 data-[state=open]:bg-transparent">Departments</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 w-[500px] gap-3 p-4">
                    <Link to="/department/communication" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Communication</div>
                      <div className="text-sm text-gray-600">Strategic messaging and media</div>
                    </Link>
                    <Link to="/department/tech-engineering" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Tech & Engineering</div>
                      <div className="text-sm text-gray-600">Innovative tech solutions</div>
                    </Link>
                    <Link to="/department/creatives" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Creatives</div>
                      <div className="text-sm text-gray-600">Arts and creative expression</div>
                    </Link>
                    <Link to="/department/community-entrepreneurship" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                      <div className="font-medium">Community & Entrepreneurship</div>
                      <div className="text-sm text-gray-600">Business development and community support</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/impact" className="px-2 py-1 text-foreground hover:text-swahilipot-600 transition-colors">
            Impact
          </Link>
          <Link to="/contact" className="px-2 py-1 text-foreground hover:text-swahilipot-600 transition-colors">
            Contact
          </Link>
          <Button className="bg-swahilipot-600 hover:bg-swahilipot-700 text-white flex items-center gap-2 ml-2" asChild>
            <Link to="/events">
              <Heart size={16} /> Events
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-swahilipot-600 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 w-full border-b shadow-lg">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-swahilipot-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-swahilipot-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            
            <div className="py-2">
              <div className="flex items-center justify-between text-foreground">
                <Link 
                  to="/programs" 
                  className="hover:text-swahilipot-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Programs
                </Link>
              </div>
              <div className="pl-4 mt-2 border-l border-gray-200 space-y-2">
                <Link 
                  to="/programs/case-management" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Case Management
                </Link>
                <Link 
                  to="/programs/tourism-innovation-lab" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Tourism Innovation Lab
                </Link>
                <Link 
                  to="/programs/employer-engagement" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Employer Engagement
                </Link>
                <Link 
                  to="/programs/campus-ambassador" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Campus Ambassador
                </Link>
                <Link 
                  to="/programs/swahili-tech-women" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Swahili Tech Women
                </Link>
              </div>
            </div>
            
            <div className="py-2">
              <div className="flex items-center justify-between text-foreground">
                <span className="text-foreground">Departments</span>
              </div>
              <div className="pl-4 mt-2 border-l border-gray-200 space-y-2">
                <Link 
                  to="/department/communication" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Communication
                </Link>
                <Link 
                  to="/department/tech-engineering" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Tech & Engineering
                </Link>
                <Link 
                  to="/department/creatives" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Creatives
                </Link>
                <Link 
                  to="/department/community-entrepreneurship" 
                  className="block text-sm text-gray-600 hover:text-swahilipot-600 py-1"
                  onClick={toggleMenu}
                >
                  Community & Entrepreneurship
                </Link>
              </div>
            </div>
            
            <Link 
              to="/impact" 
              className="text-foreground hover:text-swahilipot-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Impact
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-swahilipot-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="bg-swahilipot-600 hover:bg-swahilipot-700 text-white w-full flex items-center justify-center gap-2 mt-2" asChild>
              <Link to="/events" onClick={toggleMenu}>
                <Heart size={16} /> Events
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
