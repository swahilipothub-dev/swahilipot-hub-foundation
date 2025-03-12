import React from 'react';
// import './StaffBoard.css';

function StaffBoard() {
  const executiveLeadership = [
    { name: 'John Doe', title: 'CEO', image: 'https://via.placeholder.com/300' },
    { name: 'Jane Smith', title: 'Program Director', image: 'https://via.placeholder.com/300' },
    { name: 'Eve Kamau', title: 'Manager', image: 'https://via.placeholder.com/300' },
  ];

  const financeOperations = [
    'Felix Mbega',
    'Jane Kuria',
    'Matt Alongo',
    'Mary Kibore',
    'James Bwire',
  ];

  const boardDirectorsUS = [
    { name: 'Rosalind Robert', title: 'Chair', image: 'https://via.placeholder.com/300' },
    { name: 'Julia Stewart', title: 'Secretary', image: 'https://via.placeholder.com/300' },
    { name: 'Mark Wasso', title: 'Treasurer', image: 'https://via.placeholder.com/300' },
  ];

  const boardDirectorsKenya = [
    { name: 'Charity Mwende', title: 'Chair', image: 'https://via.placeholder.com/300' },
    { name: 'Elizabeth Otieno', title: 'Vice Chair', image: 'https://via.placeholder.com/300' },
    { name: 'Moses Rono', title: 'Board Member', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ backgroundColor: "#0d4e8f" }}
    >
      <div className="container text-center">
        <h1 className="display-4 text-white animated slideInDown mb-4">Our Team</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="/">Home</a>
            </li>
            <li
              className="breadcrumb-item text-primary active"
              aria-current="page"
            >Our Team
            </li>
          </ol>
        </nav>
        <p>
          Meet the people driving our mission and making an impact every day.
        </p>
      </div>

      <div className="container py-5">
        {/* Executive Leadership */}
        <h2 className="text-center mb-4">Executive Leadership</h2>
        <div className="row g-4 justify-content-center">
          {executiveLeadership.map((person, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '250px' }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{person.name}</h5>
                  <p className="card-text text-muted">{person.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Finance & Operations */}
        <h4 className="mt-5 mb-3 text-center">Finance & Operations</h4>
        <ul className="list-unstyled text-center">
          {financeOperations.map((name, idx) => (
            <li key={idx} className="my-1">{name}</li>
          ))}
        </ul>

        {/* Board of Directors */}
        <h2 className="mt-5 text-center">Board of Directors</h2>

        {/* United States Board */}
        <h4 className="mb-3 mt-4 text-center">United States</h4>
        <div className="row g-4 justify-content-center">
          {boardDirectorsUS.map((director, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={director.image}
                  alt={director.name}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '250px' }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{director.name}</h5>
                  <p className="card-text text-muted">{director.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kenya Board */}
        <h4 className="mb-3 mt-5 text-center">Kenya</h4>
        <div className="row g-4 justify-content-center">
          {boardDirectorsKenya.map((director, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={director.image}
                  alt={director.name}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '250px' }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{director.name}</h5>
                  <p className="card-text text-muted">{director.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StaffBoard;
