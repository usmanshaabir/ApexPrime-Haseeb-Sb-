import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

const ContactInfo = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    })
  })

  return (
    <section className='ContactInfo'>
      <div className="container my-5">
        <div className="row justify-content-center mt-5 pt-5 mb-5">
          <div className="col-12 text-center" >
            <h4 style={{ color: "#9b6f4c" }}>Contact Info</h4>
            <h2 className='display-3 fw-medium mt-4'>Our Contact Information</h2>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col-12 col-md-4 mb-3" data-aos="flip-left">
            <div className="p-4 border bg-dark text-light rounded-4">
              <h5>Address</h5>
              <p>KLLG st, No.99, Pku City, ID 28289</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3" data-aos="flip-right">
            <div className="p-4 border bg-dark text-light rounded-4">
              <h5>Phone</h5>
              <p>0761-8523-398</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3" data-aos="flip-right">
            <div className="p-4 border bg-dark text-light rounded-4">
              <h5>Email</h5>
              <p>hello@domainsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
