import React from 'react';
import { Link } from 'react-router-dom';
// import './PartnersAndSponsors.css';

function PartnersAndSponsors() {
    return (
        <>
            {/* Page Header Start */}
            <div
                className="container-fluid page-header mb-5 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ backgroundColor: "#0d4e8f" }}
            >
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Partners and Sponsors</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="/">Home</a>
                            </li>
                            <li
                                className="breadcrumb-item text-primary active"
                                aria-current="page"
                            >
                                Partners and Sponsors
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="text-center mb-4">Funders</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-2"><img src="/path/to/logo1.png" alt="Funder 1" className="img-fluid" /></div>
                    <div className="col-md-2"><img src="/path/to/logo2.png" alt="Funder 2" className="img-fluid" /></div>
                </div>

                <h2 className="text-center mb-4">In-Kind Partners</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-2"><img src="/path/to/logo3.png" alt="Partner 1" className="img-fluid" /></div>
                    <div className="col-md-2"><img src="/path/to/logo4.png" alt="Partner 2" className="img-fluid" /></div>
                </div>

                <h2 className="text-center mb-4">Program Partners</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-2"><img src="/path/to/logo5.png" alt="Program Partner 1" className="img-fluid" /></div>
                    <div className="col-md-2"><img src="/path/to/logo6.png" alt="Program Partner 2" className="img-fluid" /></div>
                </div>

                <h2 className="text-center mb-4">Strategic Partners</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-2"><img src="/path/to/logo7.png" alt="Strategic Partner 1" className="img-fluid" /></div>
                    <div className="col-md-2"><img src="/path/to/logo8.png" alt="Strategic Partner 2" className="img-fluid" /></div>
                </div>
            </div>
        </>
    );
}

export default PartnersAndSponsors;
