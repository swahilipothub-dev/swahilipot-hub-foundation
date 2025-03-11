import React from "react";

const Entrepreneurship = () => {
  return (
    <div>
      {/* Page Header Start */}
       <div 
       className="container-fluid page-header mb-5 wow fadeIn" 
       data-wow-delay="0.1s"    
       style={{ backgroundColor: "#0d4e8f" }}
       >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Entrepreneurship Department</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/what-we-do">What We Do</a>
              </li>
              <li className="breadcrumb-item" style={{ color: "#0d4e8f" }} aria-current="page">
                Entrepreneurship Department
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Programs Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} py-1 px-3 mb-3>
              Our Programs
            </div>
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Building Sustainable Enterprises and Economic Opportunities</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Business Incubation Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Business Incubation</small>
                  </div>
                  <h5 className="mb-3">Nurturing Startup Growth</h5>
                  <p>
                    Our Business Incubation program provides early-stage entrepreneurs with the resources,
                    mentorship, and office space they need to grow their businesses. We offer tailored support
                    to help startups overcome challenges and access market opportunities.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/business-incubation.jpg"
                    alt="Business Incubation"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Mentorship Program Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Mentorship Program</small>
                  </div>
                  <h5 className="mb-3">Guidance from Industry Experts</h5>
                  <p>
                    We connect budding entrepreneurs with experienced business leaders and industry experts
                    who provide guidance, share insights, and help navigate business challenges. Our mentors
                    help entrepreneurs refine their business models and develop strategic growth plans.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/mentorship-program.jpg"
                    alt="Mentorship Program"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Business Skills Workshops Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Business Skills Workshops</small>
                  </div>
                  <h5 className="mb-3">Developing Entrepreneurial Competencies</h5>
                  <p>
                    Our workshops cover essential business skills including financial management, marketing,
                    business planning, and customer service. These practical sessions help entrepreneurs
                    develop the competencies needed to build sustainable and profitable businesses.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/business-workshops.jpg"
                    alt="Business Skills Workshops"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Networking Events Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Networking Events</small>
                  </div>
                  <h5 className="mb-3">Building Business Connections</h5>
                  <p>
                    We organize regular networking events that bring together entrepreneurs, investors,
                    and industry stakeholders. These events create opportunities for collaboration,
                    partnership development, and access to new markets and resources.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/networking-events.jpg"
                    alt="Networking Events"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Programs End */}
    </div>
  );
};

export default Entrepreneurship;