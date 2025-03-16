import React from 'react';

function StaffAndBoard() {
  const teamMembers = [
    // Governance Board Members
    {
      name: 'Dr. Safia Lul',
      position: 'Governance Board Member',
      image: 'https://ui-avatars.com/api/?name=Dr.+Safia+Lul&background=0d4e8f&color=fff&size=400',
      bio: 'Member of the Governance Board contributing to organizational leadership.'
    },
    {
      name: 'Edwin Momanyi',
      position: 'Governance Board Member',
      image: 'https://ui-avatars.com/api/?name=Edwin+Momanyi&background=0d4e8f&color=fff&size=400',
      bio: 'Dedicated member of the Governance Board with expertise in organizational development.'
    },
    {
      name: 'Alice Gugelev',
      position: 'Governance Board Member',
      image: 'https://ui-avatars.com/api/?name=Alice+Gugelev&background=0d4e8f&color=fff&size=400',
      bio: 'Experienced Governance Board member focused on strategic initiatives.'
    },
    {
      name: 'Athman Hussein',
      position: 'Governance Board Member',
      image: 'https://ui-avatars.com/api/?name=Athman+Hussein&background=0d4e8f&color=fff&size=400',
      bio: 'Contributing to organizational governance and strategic direction.'
    },
    {
      name: 'Olivier N. (Baron) Vanden Eynde',
      position: 'Governance Board Member',
      image: 'https://ui-avatars.com/api/?name=Olivier+Vanden+Eynde&background=0d4e8f&color=fff&size=400',
      bio: 'Bringing international perspective to the Governance Board.'
    },
    {
      name: 'Samar Al- Bulushi',
      position: 'Governance Board Member',
      image: 'https://ui-avatars.com/api/?name=Samar+Al-Bulushi&background=0d4e8f&color=fff&size=400',
      bio: 'Dedicated to advancing the foundation governance objectives.'
    },
    {
      name: 'Tabitha Njogu',
      position: 'Governance Board Member',
      image: 'https://ui-avatars.com/api/?name=Tabitha+Njogu&background=0d4e8f&color=fff&size=400',
      bio: 'Committed to excellence in organizational governance.'
    },
    // Advisory Board Members
    {
      name: 'Osman Varwani',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Osman+Varwani&background=0d4e8f&color=fff&size=400',
      bio: 'Providing strategic advice to advance the foundation mission.'
    },
    {
      name: 'Kalkidan Mulugeta',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Kalkidan+Mulugeta&background=0d4e8f&color=fff&size=400',
      bio: 'Contributing expertise to the Advisory Board.'
    },
    {
      name: 'Ben Roberts',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Ben+Roberts&background=0d4e8f&color=fff&size=400',
      bio: 'Offering valuable insights as an Advisory Board member.'
    },
    {
      name: 'Amb.Prof Bitange Ndemo',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Amb.Prof+Bitange+Ndemo&background=0d4e8f&color=fff&size=400',
      bio: 'Distinguished advisor with extensive experience in leadership.'
    },
    {
      name: 'Hon.Michael Onyango',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Hon.Michael+Onyango&background=0d4e8f&color=fff&size=400',
      bio: 'Providing strategic guidance to the foundation.'
    },
    {
      name: 'Amb. Philip Thigo',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Amb.Philip+Thigo&background=0d4e8f&color=fff&size=400',
      bio: 'Contributing diplomatic and strategic expertise.'
    },
    {
      name: 'Susie Kitchens',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Susie+Kitchens&background=0d4e8f&color=fff&size=400',
      bio: 'Dedicated advisor supporting organizational growth.'
    },
    {
      name: 'Jane Munga',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Jane+Munga&background=0d4e8f&color=fff&size=400',
      bio: 'Committed to advancing the foundation objectives.'
    },
    {
      name: 'Dr.Kevit Desai',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Dr.Kevit+Desai&background=0d4e8f&color=fff&size=400',
      bio: 'Bringing academic and professional expertise to the Advisory Board.'
    },
    {
      name: 'Mukhtar Abdi Ogle, EBS, OGW',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Mukhtar+Abdi+Ogle&background=0d4e8f&color=fff&size=400',
      bio: 'Distinguished advisor with notable public service experience.'
    },
    {
      name: 'Mustafa Ramadhan',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Mustafa+Ramadhan&background=0d4e8f&color=fff&size=400',
      bio: 'Contributing valuable insights to the Advisory Board.'
    },
    {
      name: 'Harry Hare',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Harry+Hare&background=0d4e8f&color=fff&size=400',
      bio: 'Experienced advisor supporting foundation initiatives.'
    },
    {
      name: 'Lesley Mbogo',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Lesley+Mbogo&background=0d4e8f&color=fff&size=400',
      bio: 'Dedicated to providing strategic guidance and support.'
    },
    {
      name: 'Gilbert Saggia',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Gilbert+Saggia&background=0d4e8f&color=fff&size=400',
      bio: 'Contributing expertise to advance organizational goals.'
    },
    {
      name: 'Nasra Nandha',
      position: 'Advisory Board Member',
      image: 'https://ui-avatars.com/api/?name=Nasra+Nandha&background=0d4e8f&color=fff&size=400',
      bio: 'Committed advisor supporting the foundation mission.'
    },
    {
      name: 'Mahmoud Noor',
      position: 'Secretary',
      image: 'https://ui-avatars.com/api/?name=Mahmoud+Noor&background=0d4e8f&color=fff&size=400',
      bio: 'Serving as Secretary and coordinating board activities.'
    }
  ];

  return (
    <>
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s"
      style={{ backgroundColor: "#0d4e8f" }}
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Board Members</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
            {/* <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3"></div> */}
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