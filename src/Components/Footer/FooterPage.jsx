import React from 'react';
import instragram from "../../Assets/Images/instagram.png"

export default function FooterPage() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <img src={instragram} alt="instragram icon not found" />
              <img src={instragram} alt="instragram icon not found" />
              <img src={instragram} alt="instragram icon not found" />
              <img src={instragram} alt="instragram icon not found" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
