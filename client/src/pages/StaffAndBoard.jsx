import React from 'react';

function StaffAndBoard() {
  const teamMembers = [
    // Governance Board Members
    {
      name: 'Dr. Safia Lul',
      position: 'Governance Board Member',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Member of the Governance Board contributing to organizational leadership.'
    },
    {
      name: 'Edwin Momanyi',
      position: 'Governance Board Member',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: 'Dedicated member of the Governance Board with expertise in organizational development.'
    },
    {
      name: 'Alice Gugelev',
      position: 'Governance Board Member',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Experienced Governance Board member focused on strategic initiatives.'
    },
    {
      name: 'Athman Hussein',
      position: 'Governance Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Contributing to organizational governance and strategic direction.'
    },
    {
      name: 'Olivier N. (Baron) Vanden Eynde',
      position: 'Governance Board Member',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Bringing international perspective to the Governance Board.'
    },
    {
      name: 'Samar Al- Bulushi',
      position: 'Governance Board Member',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Dedicated to advancing the foundation&#39s governance objectives.'
    },
    {
      name: 'Tabitha Njogu',
      position: 'Governance Board Member',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Committed to excellence in organizational governance.'
    },
    // Advisory Board Members
    {
      name: 'Osman Varwani',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Providing strategic advice to advance the foundation&#39s mission.'
    },
    {
      name: 'Kalkidan Mulugeta',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: 'Contributing expertise to the Advisory Board.'
    },
    {
      name: 'Ben Roberts',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Offering valuable insights as an Advisory Board member.'
    },
    {
      name: 'Amb.Prof Bitange Ndemo',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Distinguished advisor with extensive experience in leadership.'
    },
    {
      name: 'Hon.Michael Onyango',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: 'Providing strategic guidance to the foundation.'
    },
    {
      name: 'Amb. Philip Thigo',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Contributing diplomatic and strategic expertise.'
    },
    {
      name: 'Susie Kitchens',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Dedicated advisor supporting organizational growth.'
    },
    {
      name: 'Jane Munga',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Committed to advancing the foundation&#39s objectives.'
    },
    {
      name: 'Dr.Kevit Desai',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Bringing academic and professional expertise to the Advisory Board.'
    },
    {
      name: 'Mukhtar Abdi Ogle, EBS, OGW',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: 'Distinguished advisor with notable public service experience.'
    },
    {
      name: 'Mustafa Ramadhan',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Contributing valuable insights to the Advisory Board.'
    },
    {
      name: 'Harry Hare',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Experienced advisor supporting foundation initiatives.'
    },
    {
      name: 'Lesley Mbogo',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Dedicated to providing strategic guidance and support.'
    },
    {
      name: 'Gilbert Saggia',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: 'Contributing expertise to advance organizational goals.'
    },
    {
      name: 'Nasra Nandha',
      position: 'Advisory Board Member',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Committed advisor supporting the foundation&#39s mission.'
    },
    {
      name: 'Mahmoud Noor',
      position: 'Secretary',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Serving as Secretary and coordinating board activities.'
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
            <h1 className="display-6 mb-5">Meet Our Board Members</h1>
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