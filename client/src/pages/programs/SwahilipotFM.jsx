import React from "react";

const SwahilipotFM = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#0d4e8f" }}>
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Swahilipot FM</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/what-we-do">What We Do</a>
              </li>
              <li className="breadcrumb-item" style={{ color: "#0d4e8f" }} aria-current="page">
                Swahilipot FM
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
              Community Radio
            </div>
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Amplifying Local Voices, Connecting Communities</h1>
          </div>

          {/* About Swahilipot FM Section */}
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src="/img/radio-station.jpg" alt="Swahilipot FM Station" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4" style={{ color: "#0d4e8f" }}>Our Community Radio Station</h1>
              <p className="mb-4">
                Swahilipot FM is a community radio initiative designed to provide a platform for local voices,
                cultural expression, and community development. The radio station serves as a training ground
                for young people interested in media and broadcasting while delivering valuable information
                and entertainment to our local communities.
              </p>
              <p className="mb-4">
                Broadcasting in both Swahili and English, our programs cover a diverse range of topics including
                local news, cultural heritage, youth issues, entrepreneurship, technology, and arts. We aim to
                be the bridge that connects different generations and communities while preserving and promoting
                our rich cultural heritage.
              </p>
              <div className="d-flex align-items-center mt-4">
                <a className="btn btn-primary rounded-pill px-4 me-3" href="#" style={{ backgroundColor: "#0d4e8f", borderColor: "#0d4e8f" }}>
                  Listen Live
                </a>
                <a className="btn btn-outline-primary rounded-pill px-4" href="#" style={{ borderColor: "#0d4e8f", color: "#0d4e8f" }}>
                  Our Programs
                </a>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Radio Training Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Radio Training</small>
                  </div>
                  <h5 className="mb-3">Developing Future Broadcasters</h5>
                  <p>
                    Our radio training program equips young people with skills in broadcast journalism,
                    program production, technical operations, and digital media. Participants receive
                    hands-on experience working in a real radio environment under professional guidance.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/radio-training.jpg"
                    alt="Radio Training"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Community Programs Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Community Programs</small>
                  </div>
                  <h5 className="mb-3">Addressing Local Issues</h5>
                  <p>
                    Our community-focused programs address important local issues including health,
                    education, environment, and civic engagement. These programs provide valuable
                    information while creating space for community dialogue and problem-solving.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/community-programs.jpg"
                    alt="Community Programs"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Cultural Broadcasting Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Cultural Broadcasting</small>
                  </div>
                  <h5 className="mb-3">Preserving Our Heritage On Air</h5>
                  <p>
                    Our cultural broadcasting initiatives document and share traditional stories,
                    music, and cultural practices through radio. We feature interviews with elders,
                    cultural experts, and artists who help preserve and promote our rich heritage.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/cultural-broadcasting.jpg"
                    alt="Cultural Broadcasting"
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

export default SwahilipotFM;