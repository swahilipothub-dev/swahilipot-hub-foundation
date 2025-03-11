import React from "react";

const CreativesDepartment = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div 
      className="container-fluid page-header mb-5 wow fadeIn" 
      data-wow-delay="0.1s"    
      style={{ backgroundColor: "#0d4e8f" }}
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Creatives Department</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/what-we-do">What We Do</a>
              </li>
              <li className="breadcrumb-item" style={{ color: "#0d4e8f" }} aria-current="page">
                Creatives Department
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Causes Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} py-1 px-3 mb-3>
              Our Programs
            </div>
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Ubunifu Unaong'ara, Sanaa Inabadilisha Dunia</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Theatre Zone Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Theatre Zone</small>
                  </div>
                  <h5 className="mb-3">Cultivating the Acting Stars of Tomorrow</h5>
                  <p>
                    If you have a passion for acting, our Theatre Zone program is the perfect
                    place to nurture your talent. Through comprehensive training and
                    educational initiatives, we empower aspiring actors to shine on both stage
                    and screen. Join us on this transformative journey and unlock your full
                    potential.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/theatre.jpg"
                    alt="Theatre Zone"
                    style={{ height: "300px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* SoundPot Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>SoundPot</small>
                  </div>
                  <h5 className="mb-3">Amplifying Young Voices</h5>
                  <p>
                    At SoundPot, we believe that every voice deserves to be heard. Our
                    dedicated team of mentors and trainers will guide you on a melodic journey
                    of self-expression and artistic growth. Whether you're a singer, poet, or
                    voice artist, join us and let your voice resound in the hearts of others.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="img/soundpot 1.jpg"
                    alt="SoundPot"
                    style={{ height: "300px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Pot Culture Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Pot Culture</small>
                  </div>
                  <h5 className="mb-3">Unveiling the Arts</h5>
                  <p>
                    Immerse yourself in the vibrant world of arts at Pot Culture, our periodic
                    event that celebrates creativity in all its forms. Experience captivating
                    performances of dance, music, and poetry as we showcase the rich tapestry
                    of artistic expression within our community. Prepare to be inspired and
                    amazed.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="img/pot culture.jpg"
                    alt="Pot Culture"
                    style={{ height: "300px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Causes End */}
    </div>
  );
};

export default CreativesDepartment;
