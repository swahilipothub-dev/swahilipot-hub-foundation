import React from "react";

const OpportunityYouth = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Opportunity Youth</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/what-we-do">What We Do</a>
              </li>
              <li className="breadcrumb-item" style={{ color: "#0d4e8f" }} aria-current="page">
                Opportunity Youth
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
              Youth Programs
            </div>
            <h1 className="display-6 mb-5" style={{ color: "#0d4e8f" }}>Creating Pathways for Disconnected Youth</h1>
          </div>

          {/* About Opportunity Youth Section */}
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4" style={{ color: "#0d4e8f" }}>Empowering Disconnected Youth</h1>
              <p className="mb-4">
                Our Opportunity Youth program focuses on young people aged 16-24 who are neither in school nor employed.
                We provide comprehensive support to help these youth overcome barriers, develop skills, and connect
                with education and employment opportunities that lead to sustainable livelihoods.
              </p>
              <p className="mb-4">
                Through a combination of mentorship, skills training, psychological support, and placement services,
                we create pathways for disconnected youth to become engaged, productive members of society. Our
                approach recognizes the unique challenges faced by marginalized youth and provides tailored
                interventions to address their specific needs.
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src="/img/opportunity-youth.jpg" alt="Opportunity Youth" />
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Skills Training Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Skills Training</small>
                  </div>
                  <h5 className="mb-3">Building Employable Skills</h5>
                  <p>
                    Our skills training programs focus on both technical and soft skills that increase
                    employability. From digital literacy and vocational training to communication and
                    teamwork, we equip youth with the capabilities needed in today's job market.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/skills-training.jpg"
                    alt="Skills Training"
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
                  <h5 className="mb-3">Guidance and Support</h5>
                  <p>
                    Our mentorship program pairs youth with caring adults who provide guidance,
                    support, and positive role modeling. These relationships help youth build
                    confidence, develop life skills, and navigate challenges on their path to success.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/youth-mentorship.jpg"
                    alt="Mentorship Program"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Job Placement Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Job Placement</small>
                  </div>
                  <h5 className="mb-3">Connecting to Opportunities</h5>
                  <p>
                    Through partnerships with local businesses and organizations, we connect youth
                    with job opportunities matching their skills and interests. Our placement services
                    include resume building, interview preparation, and ongoing support during early employment.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/job-placement.jpg"
                    alt="Job Placement"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Educational Support Section */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="causes-item d-flex flex-column bg-light border-top border-5" style={{ borderColor: "#0d4e8f", height: "450px" }}>
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white" }} rounded-bottom fs-5 pb-1 px-3 mb-4>
                    <small>Educational Support</small>
                  </div>
                  <h5 className="mb-3">Pathways Back to Learning</h5>
                  <p>
                    We help youth who have dropped out of school find pathways back to education.
                    This includes assistance with school re-enrollment, alternative education programs,
                    and support to overcome barriers that previously interrupted their education.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="/img/educational-support.jpg"
                    alt="Educational Support"
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

export default OpportunityYouth;