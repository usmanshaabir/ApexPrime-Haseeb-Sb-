import React from 'react';
import instragram from "../../Assets/Images/instagram.png";
import linkdin from "../../Assets/Images/linkedin.png";
import facebook from "../../Assets/Images/facebook.png";
import github from "../../Assets/Images/github.png";
import location from "../../Assets/Images/locationFooter.png";
import phoneNumber from "../../Assets/Images/phone-call.png";
import email from "../../Assets/Images/email.png";


export default function FooterPage() {
  return (
    <>
      <footer style={{ backgroundColor: "#1C1C1C" }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-5">
              <h2 className='text-light'>Apex Prime </h2>
              <h2 className='text-light'>Architects </h2>
              <p className='text-light pt-3 pb-4 w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <div className='mb-5'>
                <img src={instragram} className='me-2' alt="instragram icon not found" />
                <img src={linkdin} className='me-2' alt="linkdin icon not found" />
                <img src={facebook} className='me-2' alt="facebook icon not found" />
                <img src={github} alt="instragram icon not found" />
              </div>
            </div>
            <div className="col-md-2">
              <ul className='p-0 fs-5' style={{ color: "#E89F71" }}>QUICK LINKS</ul>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>Home</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>About Us</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>Services</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>Project</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>Blog</li>
            </div>
            <div className="col-md-2">
              <ul className='p-0 fs-5' style={{ color: "#E89F71" }}>INFORMATION</ul>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>Privacy Policy</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>Term & Condition</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>Term & Condition</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}>FAQ</li>
            </div>
            <div className="col-md-3">
              <ul className='p-0 fs-5' style={{ color: "#E89F71" }}>GET IN TOUCH</ul>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}> <img src={location} className='me-2' alt="location lcon not found" />Chanone road cityMall Plaza</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}> <img src={phoneNumber} className='me-2' alt="phoneNumber lcon not found" />+92 304 7649053</li>
              <li className='text-light pb-2' style={{ listStyleType: "none" }}> <img src={email} className='me-2' alt="email lcon not found" />mnaumanshabbir@gmail.com</li>
            </div>
            <div className='policy mb-5'>
              <div className='text-light'>
                <span className='pe-3'>Privacy Policy</span> <span>Term & Services</span>
              </div>
              <div className='text-light copyright'>
                <span className='pe-3'>Copyright © 2024 Apex Prime. All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
