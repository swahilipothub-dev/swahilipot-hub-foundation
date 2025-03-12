import React from 'react';

function AboutUs() {
  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#0d4e8f" }}
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Who We Are</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
             <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li> 
              <li className="breadcrumb-item text-primary active" aria-current="page">Who We Are</li>
            </ol>
          </nav>
          <p>
          Discover our mission and vision of making an impact every day.
        </p>
        </div>
      </div>


      {/* Mission & Vision Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <div className="badge bg-primary text-white mb-4">Mission & Vision</div>
                <h1 className="display-6 mb-5">Our Mission and Vision</h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <h4>Mission Statement</h4>
                  <p className="text-dark mb-2">
                    To empower young people through safe spaces, capacity building, and community-driven programs, enabling them to create meaningful change.
                  </p>
                  <h4>Vision</h4>
                  <p className="text-dark mb-2">
                    A world where youth are catalysts of sustainable and systemic change in their communities.
                  </p>
                </div>

                {/* Core Values */}
                <h4>Core Values</h4>
                <div className="row g-4">
                  {[
                    { icon: 'fa-users', title: 'Inclusivity', text: 'We believe in the power of diversity, ensuring that every voice is heard and valued.' },
                    { icon: 'fa-lightbulb', title: 'Innovation', text: 'We embrace creativity and forward-thinking approaches to solve today\'s challenges.' },
                    { icon: 'fa-leaf', title: 'Sustainability', text: 'We are committed to building lasting solutions that are environmentally and socially responsible.' },
                    { icon: 'fa-handshake', title: 'Collaboration', text: 'We foster partnerships, encouraging teamwork to achieve common goals.' },
                    { icon: 'fa-gavel', title: 'Integrity', text: 'We uphold honesty, transparency, and accountability in all our actions.' },
                  ].map((value, index) => (
                    <div key={index} className="col-md-4">
                      <div className="core-value-card text-center py-4">
                        <i className={`fa ${value.icon} fa-2x text-primary mb-3`}></i>
                        <h5>{value.title}</h5>
                        <p>{value.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative overflow-hidden h-100" style={{ minHeight: '400px' }}>
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/about-1.jpg"
                  alt="Swahilipot Hub Foundation"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <div className="badge bg-primary text-white mb-4">Our History</div>
            <h1 className="display-6 mb-5">The Journey of Swahilipot Hub Foundation</h1>
            <p className="mb-4">
              Established to address youth challenges in the coastal region of Kenya, Swahilipot Hub Foundation is a beacon of hope and transformation. It empowers young people through innovative programs and community-driven initiatives, fostering creativity and social impact.
            </p>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <div className="badge bg-primary text-white mb-4">Milestones</div>
            <h1 className="display-6 mb-5">Our Key Milestones</h1>
          </div>
          <div className="row g-4">
            {[
              { title: 'Initial Vision', description: 'Creating a safe, inclusive space for youth to explore their potential and nurture their talents.' },
              { title: 'Focus on Technology', description: 'Tech Academy and Jitume Program equip youth with essential digital skills for the global economy.' },
              { title: 'Promoting Arts and Heritage', description: 'Initiatives like Friday Poetry and Pwani Got Talent celebrate coastal culture and foster creativity.' },
              { title: 'Entrepreneurship', description: 'Startup School and Pitching Thursday empower young entrepreneurs with mentorship and resources.' },
              { title: 'Global Recognition', description: 'Received the Best Social Enterprise award in 2024 for impactful community engagement.' },
            ].map((milestone, index) => (
              <div key={index} className="col-md-4 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="milestone-card p-4 bg-white border rounded">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
