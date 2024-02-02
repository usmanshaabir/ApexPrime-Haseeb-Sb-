import React from 'react';

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
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                  </li>

                  {/* Dropdown for Services */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Service 1</a></li>
                      <li><a className="dropdown-item" href="#">Service 2</a></li>
                      <li><a className="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                  </li>

                  {/* Dropdown for Pages */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPagesLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Pages
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownPagesLink">
                      <li><a className="dropdown-item" href="#">Page 1</a></li>
                      <li><a className="dropdown-item" href="#">Page 2</a></li>
                      <li><a className="dropdown-item" href="#">Page 3</a></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
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
