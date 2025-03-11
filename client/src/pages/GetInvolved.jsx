import React from "react";

const GetInvolved = () => {
  return (
    <>
      {/* Banner Section */}
      <div
  className="container-fluid page-header mb-5 wow fadeIn"
  data-wow-delay="0.1s"
  style={{ backgroundColor: "#0d4e8f" }}
>
  <div className="container text-center">
    <h1 className="display-4 text-white animated slideInDown mb-4">Get Involved</h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a className="text-white" href="/">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a className="text-white" href="/What-we-do">What We Do</a>
        </li>
        <li className="breadcrumb-item text-primary active" aria-current="page">Get Involved</li>
      </ol>
    </nav>
  </div>
</div>


      {/* Main Content */}
      <div className="container mt-5 py-5 bg-light">
        <div className="text-center mb-5 pt-5">
          {/* <h1 className="display-4">Get Involved</h1> */}
          <p className="lead">
            Join us in empowering youth through innovation, creativity, and collaboration. 
            Explore ways you can contribute to making a meaningful impact.
          </p>
        </div>

        <div className="row">
          {/* Volunteer Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Volunteer</h5>
                <p className="card-text">
                  Sign up to assist in our programs or events like Pwani Innovation Week or Creative Art Spaces.
                </p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle text-success me-2"></i> Gain hands-on experience.</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> Network with peers.</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> Make a meaningful impact.</li>
                </ul>
                <a href="#" className="btn btn-primary mt-3" aria-label="Learn more about volunteering">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Donate Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Donate</h5>
                <p className="card-text">
                  Your contributions help us empower youth through various initiatives.
                </p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-circle-fill text-primary me-2"></i> One-Time Donation</li>
                  <li><i className="bi bi-circle-fill text-primary me-2"></i> Monthly Contributions</li>
                  <li><i className="bi bi-circle-fill text-primary me-2"></i> Corporate Sponsorships</li>
                </ul>
                <a href="#" className="btn btn-primary mt-3" aria-label="Learn more about donating">
                  Donate Now
                </a>
              </div>
            </div>
          </div>

          {/* Partner With Us Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Partner With Us</h5>
                <p className="card-text">
                  Collaborate with businesses, governments, and NGOs to enhance youth development programs.
                </p>
                <a href="#" className="btn btn-primary mt-3" aria-label="Learn more about partnerships">
                  Partner Now
                </a>
              </div>
            </div>
          </div>

          {/* Campaigns Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Campaigns</h5>
                <p className="card-text">Join our efforts to create a lasting impact through our current campaigns:</p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-bullseye text-danger me-2"></i>
                    <strong>"Support Youth Innovation"</strong> – Fundraising for Pwani Innovation Week.
                  </li>
                  <li>
                    <i className="bi bi-bullseye text-danger me-2"></i>
                    <strong>"Preserve Heritage"</strong> – Documenting and sharing cultural narratives.
                  </li>
                </ul>
                <a href="#" className="btn btn-primary mt-3" aria-label="Learn more about campaigns">
                  Support a Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
