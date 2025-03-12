import React, { useState, useEffect } from 'react';
import './Home.css';
// import MailingModal from '../components/MailingModal';

function Home() {
  const carouselItems = [
    {
      img: 'images/hero/dance-hero.jpg',
      title: 'Inspiring Change, Transforming Lives',
      text: 'We empower young people through technology, arts, entrepreneurship, and heritage, fostering positive change across coastal Kenya.',
    },
    {
      img: 'images/hero/mekatilili-hero.jpg',
      title: 'Empowering young people to achieve their full potential.',
      text: 'We are a safe space to create, innovate and collaborate. Open to all members of the community.',
    },
    {
      img: 'images/hero/tech-hero.jpg',
      title: 'Equipping youth with skills and fostering innovation through programs',
      text: 'A space for young people to learn, grow, and create positive change in their communities.',
    },
  ];

  const causes = [
    {
      title: 'Case Management',
      category: 'Mentorship',
      img: 'img/courses-1.jpg',
    },
    {
      title: 'Pwani Innovation Challenge',
      category: 'Enterpreneurship',
      img: 'img/courses-2.jpg',
    },
    {
      title: 'Digital Bridge',
      category: 'Technology',
      img: 'img/courses-3.jpg',
    },
  ];

  const stats = [
    { number: '15,000', label: 'Youths Reached', icon: 'fa-users' },
    { number: '8,706', label: 'Lives Improved', icon: 'fa-heart' },
    { number: '1,432', label: 'Individuals Improved', icon: 'fa-hands-helping' },
  ];
  

  // State for showing/hiding the mailing list modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      // If not visited, show the modal and set localStorage
      setShowModal(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Carousel */}
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img className="w-100" src={item.img} alt={item.title} />
                <div className="carousel-caption d-flex align-items-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 text-white mb-3">{item.title}</h1>
                        <p className="fs-5 text-white-50 mb-5">{item.text}</p>
                        <a className="btn btn-primary py-2 px-3 animated slideInDown" href="#">
                          Learn More
                          <span
                            className="d-inline-flex bg-white text-primary rounded-circle"
                            style={{
                              width: '32px',
                              height: '32px',
                              alignItems: 'center',
                              justifyContent: 'center',
                              lineHeight: '1',
                              padding: '0',
                            }}
                          >
                            <i className="fa fa-arrow-right" style={{ fontSize: '16px', margin: '0' }}></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
            aria-label="Previous Slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
            aria-label="Next Slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
<div className="container-xxl py-5">
  <div className="container">
    <div
      className="text-center mx-auto mb-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: '500px' }}
    >
      <div
        className="d-inline-block"
        style={{
          backgroundColor: '#0d4e8f',
          color: 'white',
          padding: '0.25rem 1rem',
          marginBottom: '1rem',
          borderRadius: '50rem',
        }}
      >
        Key Highlights
      </div>
      <h1 className="display-6">Some of the numbers gained over time</h1>
    </div>
    <div className="row g-4 justify-content-center">
      {stats.map((stat, index) => (
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay={`${0.1 + index * 0.2}s`}
          key={index}
        >
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
            <i className={`fa ${stat.icon} fa-3x mb-3`} style={{ color: '#0d4e8f' }}></i>
            <h4 className="mb-3">{stat.number}</h4>
            <p className="mb-4">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* About Section (Dark Blue with Video Embed) */}
      <div
        className="container-fluid"
        style={{
          backgroundColor: '#0d4e8f',
          color: '#fff',
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Text Content */}
            <div className="col-lg-6">
              <h1 className="display-4 mb-4 fw-bold">
                We empower young people through safe spaces, capacity building, and community-driven programs, enabling them to create meaningful change.
              </h1>
              <p className="fs-5">
                Our approach focuses on empowering youth with the skills, knowledge, and support they need to become catalysts of positive change in their communities.
              </p>
              <a href="/about-us" className="btn btn-light py-2 px-4 mt-3">
                Find Out More →
              </a>
            </div>
            {/* Right Column: YouTube Video Embed */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="About Us Video"
                  allowFullScreen
                  style={{ borderRadius: '8px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Causes Section */}
      <div className="container-xxl bg-light my-5 py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <div
              className="d-inline-block"
              style={{
                backgroundColor: '#0d4e8f',
                color: 'white',
                padding: '0.25rem 1rem',
                marginBottom: '1rem',
                borderRadius: '50rem',
              }}
            >
              Our Programs
            </div>
            <h1 className="display-6">Every Youth Deserves The Opportunity To Grow</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {causes.map((cause, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
                <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                  <div className="text-center p-4 pt-0">
                    <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                      <small>{cause.category}</small>
                    </div>
                    <h5 className="mb-3">{cause.title}</h5>
                    <p>
                      Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                      amet diam et eos
                    </p>
                  </div>
                  <div className="position-relative mt-auto">
                    <img className="img-fluid" src={cause.img} alt={cause.title} />
                    <div className="causes-overlay">
                      <a className="btn btn-outline-primary" href="#">
                        Read More
                        <span
                          className="d-inline-flex bg-primary text-white rounded-circle ms-2"
                          style={{
                            width: '32px',
                            height: '32px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: '1',
                            padding: '0',
                            marginLeft: '8px',
                          }}
                        >
                          <i className="fa fa-arrow-right" style={{ fontSize: '16px', margin: '0' }}></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donate Section */}
      <div
        className="container-fluid donate my-5 py-5"
        style={{ backgroundImage: 'url(img/carousel-2.jpg)' }}
      >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div
                className="d-inline-block"
                style={{
                  backgroundColor: '#e6f0ff',
                  color: '#0d4e8f',
                  padding: '0.25rem 1rem',
                  marginBottom: '1rem',
                  borderRadius: '50rem',
                }}
              >
                Donate Now
              </div>
              <h1 className="display-6 text-white mb-5">Thanks For The Results Achieved With You</h1>
              <p className="text-white-50 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 bg-white p-5">
                <form onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="name"
                          placeholder="Your Name"
                          aria-label="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-light border-0"
                          id="email"
                          placeholder="Your Email"
                          aria-label="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-group d-flex justify-content-around">
                        {['$10', '$20', '$30'].map((amount, index) => (
                          <div key={index}>
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id={`btnradio${index + 1}`}
                              defaultChecked={index === 0}
                            />
                            <label className="btn btn-light py-3" htmlFor={`btnradio${index + 1}`}>
                              {amount}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary px-5" style={{ height: '60px' }} type="submit">
                        Donate Now
                        <span
                          className="d-inline-flex bg-white text-primary rounded-circle ms-2 btn-sm-square"
                          style={{
                            width: '32px',
                            height: '32px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: '1',
                            padding: '0',
                          }}
                        >
                          <i className="fa fa-arrow-right" style={{ fontSize: '16px', margin: '0' }}></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
    </>
  );
}

export default Home;
