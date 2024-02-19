import React from 'react';
import ourProject1 from "../../../Assets/Images/212p.jpg"
import ourProject2 from "../../../Assets/Images/sdf.jpg"
import ourProject3 from "../../../Assets/Images/VIEW.jpg"
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
              <p>April 20, 2022</p>
              <h2>Design Todays: </h2>
              <h2>Create A Elevation In FSD</h2>
              <p>Creating a building elevation involves designing the exterior appearance of a structure, considering style, materials, and proportions. These drawings serve as visual guides for construction, helping convey the intended look of the building to clients and teams</p>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-wrapper">
            <img src={ourProject2} className='img-fluid rounded me-5' alt="first project not found" />
          </div>
          <div className="col-md-7">
            <div className='ms-4'>
              <p>January 22, 2024</p>
              <h2>Design Todays: </h2>
              <h2>Create A Elevation In FSD</h2>
              <p>Creating a building elevation involves designing the exterior appearance of a structure, considering style, materials, and proportions. These drawings serve as visual guides for construction, helping convey the intended look of the building to clients and teams</p>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 image-wrapper">
            <img src={ourProject3} className='img-fluid rounded me-5' alt="first project not found" />
          </div>
          <div className="col-md-7">
            <div className='ms-4'>
              <p>January 22, 2024</p>
              <h2>Design Todays: </h2>
              <h2>Create A Elevation In FSD</h2>
              <p>Creating a building elevation involves designing the exterior appearance of a structure, considering style, materials, and proportions. These drawings serve as visual guides for construction, helping convey the intended look of the building to clients and teams</p>
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
