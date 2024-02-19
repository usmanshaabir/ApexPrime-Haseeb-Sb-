import React from 'react';
import "../../../Scss/_homeTopPage.scss";
import "../../../Scss/_homeStyling.scss";


const HomeTopPage = () => {
  return (
    <>
      <div className='heroContainer'>
        <div className='content'>
          <h1>Apex Prime</h1>
          <h1>Architect</h1>
          <p>Step into a Realm of Warmth and Design Excellence: Your</p>
          <p> Your Invitation to Interior Innovation and Cozy Living.</p>
          <button className='rounded-pill button mt-4'>Get Started</button>
          <button className='rounded-pill button mt-4'>Learn More</button>
        </div>
        <div className='overlay'></div>
      </div>
      <div style={{ backgroundColor: "#E89F71" }} className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>10+</h4>
              <h4 className='text-white'>Years of Experience</h4>
            </div>
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>80%</h4>
              <h4 className='text-white'>Client Statisfaction</h4>
            </div>
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>500+</h4>
              <h4 className='text-white'>Complete Project</h4>
            </div>
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>50+</h4>
              <h4 className='text-white'>Award & Nominee</h4>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomeTopPage;
