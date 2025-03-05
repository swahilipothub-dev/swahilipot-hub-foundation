function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <img src="/src/assets/logo/logo-white.png" height="30" width="200" className="mb-3" alt="" />
                            <div className="d-flex pt-2">
                                <a className="btn btn-square me-1" href="https://x.com/swahilipothub"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square me-1" href="https://www.facebook.com/Swahilipothub"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square me-1" href="https://www.youtube.com/@swahilipothubfoundation"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square me-0" href="https://www.linkedin.com/company/swahilipot-hub/posts/?feedView=all"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>Opp. Governor's Office, Mombasa</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+254 11 4635505</p>
                            <p><i className="fa fa-envelope me-3"></i>partnership@swahilipothub.co.ke</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Impact</a>
                            <a className="btn btn-link" href="">Get Involved</a>
                            <a className="btn btn-link" href="">Blog</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Subscribe to our newsletter for updates and news</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center text-md-start mb-3 mb-md-0">
                                &copy; { currentYear } <a href="#">Swahilipot Hub Foundation</a>, Mombasa, Kenya | <a href="">Terms & Conditions</a> | <a href="">Privacy Policy</a>
                            </div>
                            {/*<div className="col-md-6 text-center text-md-end">
                                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;