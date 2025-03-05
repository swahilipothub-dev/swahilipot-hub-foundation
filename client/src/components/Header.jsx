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
        <a href="/" className="navbar-brand ms-4 ms-lg-0">
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
        </a>
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
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
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
              <a href="/what-we-do" className="dropdown-item">
                What We Do
                </a>
                <a href="/technology-and-innovation" className="dropdown-item">
                Technology & Innovation
                </a>
                <a href="/creatives-and-arts" className="dropdown-item">
                Creative & Arts 
                </a>
                {/* <a href="#" className="dropdown-item">
                Heritage                </a>
                <a href="#" className="dropdown-item">
                Entrepreneurship Support 
                </a><a href="#" className="dropdown-item">
                Swahilipot FM 
                </a><a href="#" className="dropdown-item">
                Opportunity Youth 
                </a>
                <a href="#" className="dropdown-item">
                  404 Page
                </a> */}
              </div>
            </div>
            <a href="#" className="nav-item nav-link">
              Impact
            </a>
            <a href="/get-involved" className="nav-item nav-link">
              Get Involved
            </a>
            <a href="#" className="nav-item nav-link">
              Blog
            </a>
            <a href="/Contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;