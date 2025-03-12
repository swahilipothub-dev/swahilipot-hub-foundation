import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`container-fluid fixed-top px-0 wow fadeIn ${
        isScrolled ? "scrolled" : ""
      }`}
      data-wow-delay="0.1s"
    >
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
          <a className="text-white-50 ms-3" href="https://www.facebook.com/Swahilipothub">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-white-50 ms-3" href="https://x.com/swahilipothub">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-white-50 ms-3" href="https://www.linkedin.com/company/swahilipot-hub/posts/?feedView=all">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="text-white-50 ms-3" href="https://www.instagram.com/swahilipothub/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <img
            src="/src/assets/logo/logo.png"
            className="d-none d-lg-block"
            height="40"
            width="250"
            alt=""
          />
          {/* For mobile view */}
          <img
            src="/src/assets/logo/logo.png"
            className="d-block d-lg-none"
            height="30"
            width="180"
            alt=""
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about-us" className="nav-item nav-link">
              About Us
            </Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Programs
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/what-we-do" className="dropdown-item">
                  What We Do
                </Link>
                <Link to="/technology-and-innovation" className="dropdown-item">
                  Technology & Innovation
                </Link>
                <Link to="/creatives-and-arts" className="dropdown-item">
                  Creatives & Arts
                </Link>
              </div>
            </div>
            <Link to="/get-involved" className="nav-item nav-link">
              Get Involved
            </Link>
            <Link to="/staff-and-board" className="nav-item nav-link">
              Staff & Board
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
            <a href="#" className="nav-item nav-link">
              Blog
            </a>
            <a href="/Contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;