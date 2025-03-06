import React from 'react';

function AboutUs() {
  return (
    <>
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Who We Are</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              {/* <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li> */}
              {/* <li className="breadcrumb-item text-primary active" aria-current="page">Who We Are</li> */}
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white", padding: "0.25rem 1rem", marginBottom: "1rem", borderRadius: "50rem" }}>Mission & Vision</div>
                <h1 className="display-6 mb-5">Our Mission and Vision</h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <h4>Mission Statement</h4>
                  <p className="text-dark mb-2">To empower young people through safe spaces, capacity building, and community-driven programs, enabling them to create meaningful change.</p>
                  <h4>Vision</h4>
                  <p className="text-dark mb-2">A world where youth are catalysts of sustainable and systemic change in their communities.</p>
                </div>

                {/* Core Values Section */}
                <h4>Core Values</h4>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="core-value-card text-center py-4">
                      <i className="fa fa-users fa-2x text-primary mb-3"></i>
                      <h5>Inclusivity</h5>
                      <p>We believe in the power of diversity, ensuring that every voice is heard and valued.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="core-value-card text-center py-4">
                      <i className="fa fa-lightbulb fa-2x text-primary mb-3"></i>
                      <h5>Innovation</h5>
                      <p>We embrace creativity and forward-thinking approaches to solve today's challenges.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="core-value-card text-center py-4">
                      <i className="fa fa-leaf fa-2x text-primary mb-3"></i>
                      <h5>Sustainability</h5>
                      <p>We are committed to building lasting solutions that are environmentally and socially responsible.</p>
                    </div>
                  </div>
                </div>
                <div className="row g-4 mt-4">
                  <div className="col-md-4">
                    <div className="core-value-card text-center py-4">
                      <i className="fa fa-handshake fa-2x text-primary mb-3"></i>
                      <h5>Collaboration</h5>
                      <p>We foster partnerships, encouraging teamwork to achieve common goals.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="core-value-card text-center py-4">
                      <i className="fa fa-gavel fa-2x text-primary mb-3"></i>
                      <h5>Integrity</h5>
                      <p>We uphold honesty, transparency, and accountability in all our actions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative overflow-hidden h-100" style={{minHeight: '400px'}}>
                <img className="position-absolute w-100 h-100 pt-5 pe-5" src="img/about-1.jpg" alt="" style={{objectFit: 'cover'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The rest of your page content remains unchanged */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white", padding: "0.25rem 1rem", marginBottom: "1rem", borderRadius: "50rem" }}>Our History</div>
            <h1 className="display-6 mb-5">The Journey of Swahilipot Hub Foundation</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <p className="mb-4">
                  Swahilipot Hub Foundation was established to address the challenges faced by young people in the coastal region of Kenya. Recognizing the vast potential of the region's youth and the barriers they face—such as unemployment, limited access to resources, and lack of opportunities—the foundation was created as a transformative space to unlock this potential.
                </p>
                <p className="mb-4">
                  The Foundation's founders envisioned a hub where young people could find inspiration, collaborate, and access tools to build sustainable futures. Anchored in the rich Swahili culture, the hub also embraced technology and innovation to ensure young people are equipped with the skills and knowledge needed for modern-day challenges.
                </p>
                <p className="mb-5">
                  The Foundation's focus was to bridge the gap between the youth and opportunities, leveraging a combination of safe spaces, skill-building programs, and community-driven initiatives. By intertwining technology, arts, entrepreneurship, and heritage preservation, Swahilipot Hub became a melting pot of creativity and innovation, empowering thousands of young people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white", padding: "0.25rem 1rem", marginBottom: "1rem", borderRadius: "50rem" }}>Milestones</div>
            <h1 className="display-6 mb-5">Our Key Milestones</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="milestone-card p-4 bg-white border rounded">
                <h4>Initial Vision</h4>
                <p>Swahilipot Hub Foundation was conceptualized to create a safe, inclusive space where youth could explore their potential, nurture their talents, and become active changemakers in their communities.</p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="milestone-card p-4 bg-white border rounded">
                <h4>Focus on Technology and Innovation</h4>
                <p>Early initiatives like the Tech Academy and Jitume Program focused on equipping youth with essential digital skills, preparing them for the global digital economy.</p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="milestone-card p-4 bg-white border rounded">
                <h4>Promoting Arts and Heritage</h4>
                <p>Programs like Friday Poetry, Pwani Got Talent, and Modern Heritage of Africa brought the community together, celebrating and preserving coastal Kenya's rich culture while fostering creativity.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="milestone-card p-4 bg-white border rounded">
                <h4>Entrepreneurship and Economic Empowerment</h4>
                <p>Initiatives such as Startup School and Pitching Thursday empowered young entrepreneurs with the skills, mentorship, and resources needed to establish and grow their businesses.</p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.9s">
              <div className="milestone-card p-4 bg-white border rounded">
                <h4>Global Recognition</h4>
                <p>Swahilipot Hub Foundations commitment to meaningful youth engagement and community impact led to several recognitions, including the Best Social Enterprise award in 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
            <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white", padding: "0.25rem 1rem", marginBottom: "1rem", borderRadius: "50rem" }}>Goals</div>
            <h1 className="display-6 mb-5">Today and Beyond</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <p className="mb-4">
                Swahilipot Hub Foundation has impacted over 15,000 young people through its  innovative programs and continues to focus on its core pillars: technology, arts,  heritage, and entrepreneurship. Operating across six counties in the coastal region  (Mombasa, Kilifi, Kwale, Lamu, Taita Taveta, and Tana River), Swahilipot serves as a  beacon of hope and transformation for youth aged 18–35. 
                As it moves forward, the hub remains committed to empowering young people,  fostering community-driven solutions, and contributing to a more inclusive and  sustainable future.
                </p>
                <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="milestone-card p-4 bg-white border rounded mb-4">
                    <h4>Founding Story</h4>
                    <p>Established to address youth unemployment and lack of opportunities in the coastal region, leveraging innovation, arts, and collaboration.</p>
                  </div>
                </div>
                <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="milestone-card p-4 bg-white border rounded">
                    <h4>Key Milestones</h4>
                    <ul>
                      <li>Founded in 2013.</li>
                      <li>Reached 15,000 youths by 2024.</li>
                      <li>Recognized for community youth engagement in 2024.</li>
                    </ul>
                    <p>Early initiatives like the Tech Academy and Jitume Program focused on equipping youth with essential digital skills, preparing them for the global digital economy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <div className="d-inline-block" style={{ backgroundColor: "#0d4e8f", color: "white", padding: "0.25rem 1rem", marginBottom: "1rem", borderRadius: "50rem" }}>Our Members</div>
                <h1 className="display-6 mb-5">Meet Our Management Team</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" height="500" width='500' src="img/mentor.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Mr. Mahmood Noor</h5>
                            <p className="text-primary">Founder & Chief Mentor</p>
                            {/* <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Mr. Atrash Ali</h5>
                            <p className="text-primary">Chief Operations Officer</p>
                            {/* <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" height="500" width="500" src="img/zuhra.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Zuhra Shariff</h5>
                            <p className="text-primary">Head Of HR & Admin</p>
                            {/* <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" height="500" src="img/kiplangat.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Jacqueline Jepkoech</h5>
                            <p className="text-primary">Global Opportunity Youth Network (GOYN) Mombasa</p>
                            {/* <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;