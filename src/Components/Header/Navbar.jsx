import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleActive = (event) => {
    setActiveLink(event)
  }

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid justify-content-end">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className={`nav-link active ${activeLink === "home" ? 'borderBottom' : ""}`} onClick={() => handleActive("home")} aria-current="page" >Home</Link >
                  </li>
                  <li className="nav-item">
                    <Link to="about" className={`nav-link active ${activeLink === "about" ? 'borderBottom' : ""}`} onClick={() => handleActive("about")}>About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="services" className={`nav-link active ${activeLink === "service" ? 'borderBottom' : ""}`} onClick={() => handleActive("service")}>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="project" className={`nav-link active ${activeLink === "project" ? 'borderBottom' : ""}`} onClick={() => handleActive("project")}>Our Project</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact" className={`nav-link active ${activeLink === "contact" ? 'borderBottom' : ""}`} onClick={() => handleActive("contact")}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
