import React from "react";

const TechnologyAndInnovation = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#0d4e8f" }}>
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Technology Department</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/what-we-do">What We Do</a>
              </li>
              <li className="breadcrumb-item" style={{ color: "#0d4e8f" }} aria-current="page">
                Technology Department
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
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Kuwezesha Ustadi wa Teknolojia, Kukuza Vipaji</h1>
          </div>
          <div className="row g-5 justify-content-start align-items-stretch">
            {/* Data and Research Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Data and Research</small>
                  </div>
                  <h5 className="mb-3">Training Future Data Experts</h5>
                  <p>
                    Our Data and Research programs focus on data collection and analysis. Through partnerships, we provide opportunities for young people to earn a stipend and participate in this program. Over 100 youths have gained valuable skills in data collection and analysis through this initiative.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/data guy.jpg"
                    alt="Data and Research"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Digital Literacy Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Digital Literacy</small>
                  </div>
                  <h5 className="mb-3">Empowering Young People with Digital Skills</h5>
                  <p>
                    We conduct programs aimed at enhancing digital skills among young people. Through industry partnerships, we offer technical and soft skills training. To date, more than 150 youths have acquired valuable digital skills.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/Digital lit 1.jpg"
                    alt="Digital Literacy"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Industrial Attachment Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Industrial Attachment</small>
                  </div>
                  <h5 className="mb-3">Industry-Specific Skills Development</h5>
                  <p>
                    Our Industrial Attachment program provides a structured curriculum to acquire industry-specific skills. Participants gain hands-on experience in web development, networking, and essential soft skills for career success.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/attachment temp.jpg"
                    alt="Industrial Attachment"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Campus Ambassador Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Campus Ambassador</small>
                  </div>
                  <h5 className="mb-3">Developing Future Tech Leaders</h5>
                  <p>
                    Through our Campus Ambassador program, we collaborate with universities to nurture young talents. Ambassadors share opportunities and benefits to foster a vibrant tech community.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/capmus ambassadors.jpg"
                    alt="Campus Ambassador"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Pitching Thursday Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Pitching Thursday</small>
                  </div>
                  <h5 className="mb-3">Pitching Young Innovations</h5>
                  <p>
                    Pitching Thursday provides a platform for young individuals to pitch their ideas. They receive feedback from judges and grow their ventures with exposure and opportunities for development.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/pitching thus.jpg"
                    alt="Pitching Thursday"
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

export default TechnologyAndInnovation;
