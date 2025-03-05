import React from "react";

const programs = [
  {
    title: "Technology & Innovation",
    description:
      "Equipping youth with digital skills and fostering innovation through programs like the Tech Academy, Jitume Program, and Pwani Innovation Week.",
    achievements: [
      "Hosted multiple innovation challenges like Mombasa Plastics Prize.",
      "Trained over 1,000 youths in advanced digital skills.",
    ],
    callToAction: "Learn More",
    link: "/technology-and-innovation",
    image: "path/to/technology-image.jpg", // Replace with your actual image path
  },
  {
    title: "Creative & Arts",
    description:
      "Promoting creativity and self-expression through initiatives like Pwani Got Talent, Sanaa Mashinani, and Swahilipot Cinemax.",
    achievements: [
      "Hosted Mombasa International Film Festival.",
      "Provided platforms for over 500 artists to showcase their talents.",
    ],
    callToAction: "Join the Movement",
    link: "/creatives-and-arts",
    image: "path/to/creative-image.jpg", // Replace with your actual image path
  },
  {
    title: "Heritage",
    description:
      "Leveraging on the power, passion and potency of youth to define culture and heritage as a vehicle for innovation and economic growth.",
    achievements: [
      "Hosting two editions of Modern Heritage of Africa (MoHoA).",
      "Playing host to the international Africa24 Scientific Conference in collaboration with ICOMOS.",
      "Carrying out Focus Group Discussions that enabled the department to situate heritage within the context of youth perspectives.",
    ],
    callToAction: "Youth and Heritage",
    link: "#",
    image: "path/to/heritage-image.jpg", // Replace with your actual image path
  },
  {
    title: "Entrepreneurship Support",
    description:
      "Empowering young entrepreneurs through training, business incubation, and funding opportunities.",
    achievements: [
      "Supported 150 startups through mentorship and funding opportunities.",
    ],
    callToAction: "Start Your Journey",
    link: "#",
    image: "path/to/entrepreneurship-image.jpg", // Replace with your actual image path
  },
  {
    title: "Swahilipot FM",
    description:
      "A community-focused radio station broadcasting through 91.7 FM, Swahilipot FM amplifies and addresses youth voices, focusing on their role in defining urban culture and heritage within urban spaces.",
    achievements: [
      "Popular shows include The Entrepreneur, Tech Tuesday, Mikuki Ya Maneno, and The Nightshift.",
      "Reaches thousands of listeners across the coastal region, providing a platform for youth empowerment and cultural storytelling.",
    ],
    callToAction: "Tune in Now",
    link: "/#",
    image: "path/to/swahilipotfm-image.jpg", // Replace with your actual image path
  },
  {
    title: "Opportunity Youth",
    description:
      "Connecting out-of-school youth to education and vocational opportunities through programs like GOYN and the Youth Innovation Fund.",
    achievements: [
      "Impacted over 5,000 opportunity youth through tailored programs.",
    ],
    callToAction: "Transform Your Future",
    link: "#",
    image: "path/to/opportunity-youth-image.jpg", // Replace with your actual image path
  },
];

const WhatWeDo = () => {
  return (
    <>
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            What We Do
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/impact">
                  Impact
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                What We Do
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-5 py-5 bg-light">
        <div className="text-center mb-5 pt-5">
          <p className="lead font-weight-bold">
            We empower young people in the coastal region of Kenya through
            technology and innovation, arts and creativity, heritage
            preservation, and entrepreneurship. Our programs create safe spaces,
            provide training, and connect youth to economic and social
            opportunities.
          </p>
        </div>
        <div className="row">
          {programs.map((program, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                {/* Display image */}
                <img src={program.image} alt={program.title} className="card-img-top" />
                
                <div className="card-body">
                  <h5 className="card-title text-primary">{program.title}</h5>
                  <p className="card-text">{program.description}</p>
                  <ul className="list-unstyled">
                    {program.achievements.map((achievement, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={program.link}
                    className="btn btn-primary mt-3"
                    aria-label={`Learn more about ${program.title}`}
                  >
                    {program.callToAction}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
