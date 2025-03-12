import React from "react";

const Impact = () => {
  return (
    <div>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header mb-5 wow fadeIn"
    data-wow-delay="0.1s"
    style={{ backgroundColor: "#0d4e8f" }}
  >
    <div className="container text-center">
      <h1 className="display-4 text-white animated slideInDown mb-4">Our Impact</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a className="text-white" href="/">Home</a>
          </li>
          <li
            className="breadcrumb-item text-primary active"
            aria-current="page"
          >
            Our Impact
          </li>
        </ol>
      </nav>
    </div>
  </div>
      
      {/* Impact Numbers Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} py-1 px-3 mb-3>
              Our Impact
            </div>
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Creating Lasting Change in Our Community</h1>
          </div>
          
          <div className="row g-4 mb-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-3 col-md-6">
              <div className="counter bg-light p-4">
                <i className="fa fa-users fa-3x" style={{ color: "#0d4e8f" }}></i>
                <h1 className="display-5 fw-bold mb-0" data-toggle="counter-up" style={{ color: "#0d4e8f" }}>5000+</h1>
                <span className="fs-5 text-muted">Youth Trained</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter bg-light p-4">
                <i className="fa fa-briefcase fa-3x" style={{ color: "#0d4e8f" }}></i>
                <h1 className="display-5 fw-bold mb-0" data-toggle="counter-up" style={{ color: "#0d4e8f" }}>200+</h1>
                <span className="fs-5 text-muted">Startups Supported</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter bg-light p-4">
                <i className="fa fa-palette fa-3x" style={{ color: "#0d4e8f" }}></i>
                <h1 className="display-5 fw-bold mb-0" data-toggle="counter-up" style={{ color: "#0d4e8f" }}>100+</h1>
                <span className="fs-5 text-muted">Creative Projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter bg-light p-4">
                <i className="fa fa-award fa-3x" style={{ color: "#0d4e8f" }}></i>
                <h1 className="display-5 fw-bold mb-0" data-toggle="counter-up" style={{ color: "#0d4e8f" }}>10+</h1>
                <span className="fs-5 text-muted">Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Impact Numbers End */}
      
      {/* Success Stories Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} py-1 px-3 mb-3>
              Success Stories
            </div>
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Transforming Lives Through Our Programs</h1>
          </div>
          
          <div className="row g-5">
            {/* Success Story 1 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img className="position-absolute w-100 h-100" src="/img/success-story-1.jpg" alt="Success Story" style={{ objectFit: "cover" }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(13, 78, 143, 0.8)" }}>
                  <div className="p-5 text-white">
                    <h3 className="mb-3">Tech Innovation Award Winner</h3>
                    <p className="mb-4">
                      "Swahilipot Hub provided me with the mentorship, resources, and community I needed
                      to develop my agriculture monitoring app. From a simple idea to winning the National 
                      Innovation Award, the journey has been transformative. Today, my solution helps 
                      over 500 farmers improve crop yields while creating jobs for local youth."
                    </p>
                    <h5 className="fw-bold mb-1">James Mwangi</h5>
                    <p className="mb-0">Founder, AgriTech Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 2 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img className="position-absolute w-100 h-100" src="/img/success-story-2.jpg" alt="Success Story" style={{ objectFit: "cover" }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(13, 78, 143, 0.8)" }}>
                  <div className="p-5 text-white">
                    <h3 className="mb-3">From Dropout to Digital Artist</h3>
                    <p className="mb-4">
                      "After dropping out of school, I had no direction until I found Swahilipot's 
                      creative arts program. The digital design training opened doors I never thought 
                      possible. Today, I run my own design studio, employ three other youth, and mentor 
                      teenagers from my neighborhood who face similar challenges."
                    </p>
                    <h5 className="fw-bold mb-1">Amina Hassan</h5>
                    <p className="mb-0">Founder, Coastal Designs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 3 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img className="position-absolute w-100 h-100" src="/img/success-story-3.jpg" alt="Success Story" style={{ objectFit: "cover" }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(13, 78, 143, 0.8)" }}>
                  <div className="p-5 text-white">
                    <h3 className="mb-3">Community Radio Pioneer</h3>
                    <p className="mb-4">
                      "The radio training at Swahilipot FM gave me more than technical skills—it gave me 
                      a voice and purpose. I now produce health education programs that reach thousands 
                      in rural communities. Seeing how information changes lives has been the most 
                      rewarding experience."
                    </p>
                    <h5 className="fw-bold mb-1">David Ochieng</h5>
                    <p className="mb-0">Health Program Producer</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 4 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img className="position-absolute w-100 h-100" src="/img/success-story-4.jpg" alt="Success Story" style={{ objectFit: "cover" }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(13, 78, 143, 0.8)" }}>
                  <div className="p-5 text-white">
                    <h3 className="mb-3">Heritage Tourism Enterprise</h3>
                    <p className="mb-4">
                      "Through Swahilipot's entrepreneurship and heritage programs, I developed a 
                      tourism business that showcases our coastal culture. What started as a small 
                      tour with two guides now employs 15 young people and has been featured in 
                      international travel publications."
                    </p>
                    <h5 className="fw-bold mb-1">Fatma Abdalla</h5>
                    <p className="mb-0">Founder, Coastal Heritage Tours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Success Stories End */}
      
      {/* Impact Reports Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} py-1 px-3 mb-3>
              Impact Reports
            </div>
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Measuring and Sharing Our Impact</h1>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-light p-4">
                <div className="mb-4">
                  <i className="fa fa-file-pdf fa-3x" style={{ color: "#0d4e8f" }}></i>
                </div>
                <h4 className="mb-3">Annual Impact Report 2023</h4>
                <p className="mb-4">Comprehensive overview of our programs, beneficiaries, and outcomes from the past year.</p>
                <a className="btn btn-primary px-4" style={{ backgroundColor: "#0d4e8f", borderColor: "#0d4e8f" }} href="">Download Report</a>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item bg-light p-4">
                <div className="mb-4">
                  <i className="fa fa-chart-line fa-3x" style={{ color: "#0d4e8f" }}></i>
                </div>
                <h4 className="mb-3">Tech Innovation Outcomes</h4>
                <p className="mb-4">Data and analysis of our technology program outcomes, success stories, and future directions.</p>
                <a className="btn btn-primary px-4" style={{ backgroundColor: "#0d4e8f", borderColor: "#0d4e8f" }} href="">Download Report</a>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item bg-light p-4">
                <div className="mb-4">
                  <i className="fa fa-paint-brush fa-3x" style={{ color: "#0d4e8f" }}></i>
                </div>
                <h4 className="mb-3">Creative Arts Impact Study</h4>
                <p className="mb-4">Research on how our creative arts programs have influenced youth development and cultural preservation.</p>
                <a className="btn btn-primary px-4" style={{ backgroundColor: "#0d4e8f", borderColor: "#0d4e8f" }} href="">Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Impact Reports End */}
    </div>
  );
};

export default Impact;