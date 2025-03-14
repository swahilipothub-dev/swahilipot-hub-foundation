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
                    <div className="col-md-3"><img src="/images/logos/mastercard-foundation.png" alt="Mastercard Foundation" className="img-fluid" /></div>
                    <div className="col-md-3"><img src="/images/logos/conradhiltonfoundation.png" alt="Conrad Hilton Foundation" className="img-fluid" /></div>
                    <div className="col-md-3"><img src="/images/logos/absa-logo-red.png" alt="Absa Bank" className="img-fluid" /></div>
                </div>

                <h2 className="text-center mb-4 mt-5">Strategic Partners</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-3"><img src="/images/logos/Konza.png" alt="Konza Technopolis" className="img-fluid" /></div>
                    <div className="col-md-3"><img src="/images/logos/KNCCI-removebg-preview.png" alt="KNCCI" className="img-fluid" /></div>
                    <div className="col-md-3"><img src="/images/logos/GDI.png" alt="GDI" className="img-fluid" /></div>
                </div>

                <h2 className="text-center mb-4 mt-5">Program Partners</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-3"><img src="/images/logos/ajira.jpg" alt="Ajira Digital" className="img-fluid" /></div>
                    <div className="col-md-3"><img src="/images/logos/Casik-logo.png" alt="Casik" className="img-fluid" /></div>
                    <div className="col-md-3"><img src="/images/logos/ngosource.png" alt="NGO Source" className="img-fluid" /></div>
                </div>
            </div>
        </>
    );
}

export default PartnersAndSponsors;
