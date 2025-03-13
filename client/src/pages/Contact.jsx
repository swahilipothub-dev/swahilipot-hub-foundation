import React from 'react';

function Contact() {
  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#0d4e8f" }}
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Contact Us</h1>
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
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Contact Us</div>
              <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
              <p className="mb-2"><strong>Phone:</strong> +254 114635505</p>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@swahilipothub.co.ke">info@swahilipothub.co.ke</a></p>
              <p className="mb-4"><strong>Office Address:</strong> Swahili Cultural Center, Mombasa Hospital Road, Mombasa – Kenya</p>
              
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
              
              {/* <div className="mt-4">
                <h5>Follow Us</h5>
                <p>
                  <a href="#" className="me-3">Facebook</a> |
                  <a href="#" className="mx-3">Twitter</a> |
                  <a href="#" className="mx-3">Instagram</a> |
                  <a href="#" className="mx-3">LinkedIn</a> |
                  <a href="#" className="ms-3">YouTube</a>
                </p>
              </div> */}
            </div>
            
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/place/Swahilipot+Hub/@-4.063311,39.679895,16z/data=!4m15!1m8!3m7!1s0x1840131ba0153b67:0x75a36ee817c3f38b!2sSwahilipot+Hub!8m2!3d-4.0633114!4d39.6798947!10e1!16s%2Fg%2F11cs1sdts7!3m5!1s0x1840131ba0153b67:0x75a36ee817c3f38b!8m2!3d-4.0633114!4d39.6798947!16s%2Fg%2F11cs1sdts7?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                frameBorder="0"
                style={{ minHeight: '400px', border: '0' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;