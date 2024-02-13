import React from 'react';
import interiorDesgin from "../../../Assets/Images/interiorServices.jpg"

export default function InteriorServices() {
  return (
    <>
      <section className='interior-desgin mt-5 pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className='display-4 interiorService' >Interior </h2>
              <h2 className='display-4 interiorService' >Services</h2>
              <h5 className='mt-4 mb-5'>Explore a spectrum of design services tailored to meet your every need</h5>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p >Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-md-4">
              <img src={interiorDesgin} className='img-fluid rounded' alt="interiorDesgin not found" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
