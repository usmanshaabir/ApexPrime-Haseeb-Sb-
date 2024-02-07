import React from 'react';
import ourProject1 from "../../../Assets/Images/ourproject.jpg"
import { Link } from 'react-router-dom';

export default function OurJounery() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <h4 style={{ color: "#E89F71" }}>Explore Our Design Journey</h4>
          <h2 className='display-1'>Your Destination for </h2>
          <h2 className='display-1'>Inspiring Insights and Trends </h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-wrapper">
            <img src={ourProject1} className='img-fluid rounded me-5' alt="first project not found" />
          </div>
          <div className="col-md-7">
            <div className='ms-4'>
              <p>January 22, 2024</p>
              <h2>Design Todays: Chronicles Creativity in
                Interior Briliance</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor…</p>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-wrapper">
            <img src={ourProject1} className='img-fluid rounded me-5' alt="first project not found" />
          </div>
          <div className="col-md-7">
            <div className='ms-4'>
              <p>January 22, 2024</p>
              <h2>Design Todays: Chronicles Creativity in
                Interior Briliance</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor…</p>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-wrapper">
            <img src={ourProject1} className='img-fluid rounded me-5' alt="first project not found" />
          </div>
          <div className="col-md-7">
            <div className='ms-4'>
              <p>January 22, 2024</p>
              <h2>Design Todays: Chronicles Creativity in
                Interior Briliance</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor…</p>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
        <div className='text-center mt-5 mb-5'>
          <button type="button" class="btn btn-lg rounded-pill" style={{ backgroundColor: "#E89F71" }}>See More </button>
        </div>
      </div>
    </>
  )
}
