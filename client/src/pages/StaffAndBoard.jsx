import React from 'react';

function StaffAndBoard() {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Board Chairman',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: 'A seasoned professional with over 15 years of experience in non-profit leadership.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Passionate about youth empowerment and community development.'
    },
    {
      name: 'Michael Chen',
      position: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Leading our technology initiatives with innovative approaches.'
    },
    {
      name: 'Emily Williams',
      position: 'Programs Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Dedicated to creating impactful youth development programs.'
    },
    {
      name: 'David Ochieng',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Brings valuable insights from the corporate sector to our mission.'
    },
    {
      name: 'Amina Hassan',
      position: 'Community Outreach Director',
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909',
      bio: 'Specializes in building strong community partnerships and engagement.'
    }
  ];

  return (
    <>
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Our Team</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Our Team</div>
            <h1 className="display-6 mb-5">Meet Our Staff & Board Members</h1>
          </div>
          
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={member.image} alt={member.name} style={{height: '400px', width: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>{member.name}</h5>
                    <p className="text-primary">{member.position}</p>
                    <p className="mb-0">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffAndBoard;