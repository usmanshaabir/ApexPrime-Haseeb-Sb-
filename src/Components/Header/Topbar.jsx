import React from 'react';
import clock from "../../Assets/Images/time.png";
import location from "../../Assets/Images/location.png";

export default function Topbar() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
              <img src={location} alt="Location" style={{ marginRight: '10px' }} />
              <p className='mb-0'>Chanone road cityMall Plaza</p>
            </div>
            <div className='d-flex align-items-center'>
              <img src={clock} alt="Clock" style={{ marginRight: '10px' }} />
              <p className='mb-0'>Open Hours: 09.00 AM - 05.00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
