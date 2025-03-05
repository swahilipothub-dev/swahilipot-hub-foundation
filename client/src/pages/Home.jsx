// import React from 'react';
import './Home.css'; // Assuming you'll create this CSS file for custom styles

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
    { title: 'Education For African Children', category: 'Education', img: 'img/courses-1.jpg' },
    { title: 'Ensure Pure Drinking Water', category: 'Pure Water', img: 'img/courses-2.jpg' },
    { title: 'Ensure Medical Treatment', category: 'Healthy Life', img: 'img/courses-3.jpg' },
  ];

  const stats = [
    { number: '15,000', label: 'Youths Reached' },
    { number: '8,706', label: 'Lives Improved' },
    { number: '1,432', label: 'Individuals Improved' },
  ];

  const team = [
    { name: 'Full Name', role: 'Designation', img: 'img/team-1.jpg' },
    { name: 'Full Name', role: 'Designation', img: 'img/team-2.jpg' },
    { name: 'Full Name', role: 'Designation', img: 'img/team-3.jpg' },
    { name: 'Full Name', role: 'Designation', img: 'img/team-4.jpg' },
  ];

  const testimonials = [
    { name: 'Doner Name', profession: 'Profession', img: 'img/testimonial-1.jpg' },
    { name: 'Doner Name', profession: 'Profession', img: 'img/testimonial-2.jpg' },
    { name: 'Doner Name', profession: 'Profession', img: 'img/testimonial-3.jpg' },
  ];

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
                        <h1 className="display-4 text-white mb-3 animated slideInDown">{item.title}</h1>
                        <p className="fs-5 text-white-50 mb-5 animated slideInDown">{item.text}</p>
                        <a className="btn btn-primary py-2 px-3 animated slideInDown" href="#">
                          Learn More
                          <span className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                            <i className="fa fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden" style={{ minHeight: '400px' }}>
                <img className="position-absolute w-100 h-100" src="images/about/about-7.jpeg" alt="About" style={{ objectFit: 'cover' }} />
                <img className="position-absolute top-0 end-0 bg-white" src="images/about/about-1.jpeg" alt="About" style={{ width: '200px', height: '200px' }} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <span className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</span>
                <h1 className="display-6 mb-5">We help Youths reach their goals</h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">To empower young people through safe spaces, capacity building, and community-driven programs, enabling them to create meaningful change.</p>
                  <span className="text-primary">Our Mission</span>
                </div>
                <p className="mb-5"><b>Vision</b>: A world where youth are catalysts of sustainable and systemic change in their communities.</p>
                <a className="btn btn-primary py-2 px-3" href="/about-us">
                  Learn more about us
                  <span className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Causes Section */}
      <div className="container-xxl bg-light my-5 py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <span className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Feature Causes</span>
            <h1 className="display-6">Every Child Deserves The Opportunity To Learn</h1>
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
                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                    <div className="causes-progress bg-light p-3 pt-2">
                      <div className="d-flex justify-content-between">
                        <p className="text-dark">$10,000 <small className="text-body">Goal</small></p>
                        <p className="text-dark">$9,542 <small className="text-body">Raised</small></p>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative mt-auto">
                    <img className="img-fluid" src={cause.img} alt={cause.title} />
                    <div className="causes-overlay">
                      <a className="btn btn-outline-primary" href="#">
                        Read More
                        <span className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
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

      {/* Stats Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <span className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Key Highlights</span>
            <h1 className="display-6">Some of the numbers gained over time</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {stats.map((stat, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
                <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                  <h4 className="mb-3">{stat.number}</h4>
                  <p className="mb-4">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donate Section */}
      <div className="container-fluid donate my-5 py-5" style={{ backgroundImage: 'url(img/carousel-2.jpg)' }}>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <span className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Donate Now</span>
              <h1 className="display-6 text-white mb-5">Thanks For The Results Achieved With You</h1>
              <p className="text-white-50 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 bg-white p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-light border-0" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="email" className="form-control bg-light border-0" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-group d-flex justify-content-around">
                        {['$10', '$20', '$30'].map((amount, index) => (
                          <div key={index}>
                            <input type="radio" className="btn-check" name="btnradio" id={`btnradio${index + 1}`} defaultChecked={index === 0} />
                            <label className="btn btn-light py-3" htmlFor={`btnradio${index + 1}`}>{amount}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary px-5" style={{ height: '60px' }}>
                        Donate Now
                        <span className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
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

      {/* Team Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <span className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Team Members</span>
            <h1 className="display-6">Let's Meet With Our Ordinary Soldiers</h1>
          </div>
          <div className="row g-4">
            {team.map((member, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={member.img} alt={member.name} />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>{member.name}</h5>
                    <p className="text-primary">{member.role}</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <span className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Testimonial</span>
            <h1 className="display-6">Trusted By Thousands Of People And Nonprofits</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item text-center" key={index}>
                <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={testimonial.img} alt={testimonial.name} style={{ width: '100px', height: '100px' }} />
                <div className="testimonial-text rounded text-center p-4">
                  <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed.</p>
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <span className="fst-italic">{testimonial.profession}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;