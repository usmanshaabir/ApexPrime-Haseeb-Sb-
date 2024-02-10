import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link >
                  </li>
                  <li className="nav-item">
                    <Link to="about" className="nav-link active" >About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="services" className="nav-link active" >Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="project" className="nav-link active" >Our Project</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact" className="nav-link active" >Contact Us</Link>
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
