import React from "react";

const Heritage = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#0d4e8f" }}
      >        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Heritage Department</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/what-we-do">What We Do</a>
              </li>
              <li className="breadcrumb-item" style={{ color: "#0d4e8f" }} aria-current="page">
                Heritage Department
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
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Preserving Culture, Inspiring Future Generations</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Cultural Preservation Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Cultural Preservation</small>
                  </div>
                  <h5 className="mb-3">Safeguarding Our Heritage</h5>
                  <p>
                    Our Cultural Preservation initiatives document and digitize traditional knowledge,
                    practices, and artifacts to ensure they are preserved for future generations.
                    Through community engagement, we collect oral histories and cultural stories.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/cultural-preservation.jpg"
                    alt="Cultural Preservation"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Cultural Education Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Cultural Education</small>
                  </div>
                  <h5 className="mb-3">Connecting Youth to Their Roots</h5>
                  <p>
                    We organize workshops, seminars, and interactive sessions to teach young people
                    about their cultural heritage. Our programs include language classes, traditional
                    crafts, and historical knowledge transfer between generations.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/cultural-education.jpg"
                    alt="Cultural Education"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Heritage Tourism Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Heritage Tourism</small>
                  </div>
                  <h5 className="mb-3">Showcasing Cultural Heritage</h5>
                  <p>
                    We develop heritage tours and experiences that showcase the rich cultural history
                    of coastal Kenya. By training local youth as cultural guides, we create sustainable
                    livelihoods while promoting cultural appreciation and understanding.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/heritage-tourism.jpg"
                    alt="Heritage Tourism"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Cultural Festivals Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Cultural Festivals</small>
                  </div>
                  <h5 className="mb-3">Celebrating Our Diverse Heritage</h5>
                  <p>
                    We organize annual cultural festivals that bring together different communities
                    to celebrate their unique traditions. These events feature traditional music, dance,
                    cuisine, and crafts, creating platforms for cultural exchange and appreciation.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/cultural-festivals.jpg"
                    alt="Cultural Festivals"
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

export default Heritage;