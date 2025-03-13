import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div
      className={`container-fluid fixed-top px-0 wow fadeIn ${isScrolled ? "scrolled" : ""
        }`}
      data-wow-delay="0.1s"
    >
      {/* Top Bar */}
      <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt me-2"></i>Opp. Governor&apos;s Office, Mombasa
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-2"></i>info@swahilipothub.co.ke
          </small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <a
            className="text-white-50 ms-3"
            href="https://www.facebook.com/Swahilipothub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="text-white-50 ms-3"
            href="https://x.com/swahilipothub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="text-white-50 ms-3"
            href="https://www.linkedin.com/company/swahilipot-hub/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="text-white-50 ms-3"
            href="https://www.instagram.com/swahilipothub/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        {/* Logo */}
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <img
            src="/src/assets/logo/logo.png"
            className="d-none d-lg-block"
            height="40"
            width="250"
            alt="Swahilipot Hub Logo"
          />
          {/* For mobile view */}
          <img
            src="/src/assets/logo/logo.png"
            className="d-block d-lg-none"
            height="30"
            width="180"
            alt="Swahilipot Hub Logo"
          />
        </Link>

        {/* Toggler */}
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link ${isActive("/")}`}>
              Home
            </Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle ${location.pathname.includes("/about-us") ? "active" : ""}`}
                data-bs-toggle="dropdown"
              >
                About Us
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/about-us" className={`dropdown-item ${isActive("/about-us")}`}>
                  Who We Are
                </Link>
                <Link to="/staff-board" className={`dropdown-item ${isActive("/staff-board")}`}>
                  Staff &amp; Board
                </Link>
                <Link to="/about-us/partners-and-sponsors" className={`dropdown-item ${isActive("/about-us/partners-and-sponsors")}`}>
                  Partners &amp; Sponsors
                </Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle ${location.pathname.includes("/what-we-do") || location.pathname.includes("/technology-and-innovation") ? "active" : ""}`}
                data-bs-toggle="dropdown"
              >
                Programs
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/what-we-do" className={`dropdown-item ${isActive("/what-we-do")}`}>
                  What We Do
                </Link>
                <Link to="/technology-and-innovation" className={`dropdown-item ${isActive("/technology-and-innovation")}`}>
                  Technology &amp; Innovation
                </Link>
                <Link to="/creatives-and-arts" className={`dropdown-item ${isActive("/creatives-and-arts")}`}>
                  Creative &amp; Arts
                </Link>
                <Link to="/heritage" className="dropdown-item">
                  Heritage
                </Link>
                <Link to="/entrepreneurship" className="dropdown-item">
                  Entrepreneurship Support
                </Link>
                <Link to="/swahilipot-fm" className="dropdown-item">
                  Swahilipot FM
                </Link>
                <Link to="/opportunity-youth" className="dropdown-item">
                  Opportunity Youth
                </Link>
                <Link to="/case-management" className="dropdown-item">
                  Case Management
                </Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle ${location.pathname.includes("/events") ? "active" : ""}`}
                data-bs-toggle="dropdown"
              >
                Events
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/events" className={`dropdown-item ${isActive("/events")}`}>
                  All Events
                </Link>
                <Link to="/events/upcoming" className={`dropdown-item ${isActive("/events/upcoming")}`}>
                  Upcoming Events
                </Link>
                <Link to="/events/past" className={`dropdown-item ${isActive("/events/past")}`}>
                  Past Events
                </Link>
              </div>
            </div>

            <Link to="/blog" className={`nav-item nav-link ${isActive("/blog")}`}>
              Blog
            </Link>
            <Link to="/contact" className={`nav-item nav-link ${isActive("/contact")}`}>
              Contact
            </Link>

            {/* Donate Now Button */}
            <Link to="/donate" className="btn btn-primary ms-3 donate-btn">
              <i className="fas fa-heart me-2"></i>
              Donate Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
