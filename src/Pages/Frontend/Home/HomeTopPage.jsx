import React from 'react';
import "../../../Scss/_homeTopPage.scss";
import "../../../Scss/_homeStyling.scss";


const HomeTopPage = () => {
  return (
    <>
      <div className='heroContainer'>
        <div className='content'>
          <h1>Elevate Spaces,</h1>
          <h1>Inspire Lives.</h1>
          <p >Step into a World of Warmth and Design Excellence: Your </p>
          <p >Welcome Mat to Interior Innovation and Cozy Living.</p>
          <button className='rounded-pill button'>Get Started</button>
          <button className='rounded-pill button'>Learn More</button>
        </div>
        <div className='overlay'></div>
      </div>
      <div style={{ backgroundColor: "#E89F71" }} className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>15+</h4>
              <h4 className='text-white'>Years of Experience</h4>
            </div>
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>97%</h4>
              <h4 className='text-white'>Client Statisfaction</h4>
            </div>
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>350+</h4>
              <h4 className='text-white'>Complete Project</h4>
            </div>
            <div className="col-md-3 card-responsive">
              <h4 className='ps-5 ms-4 text-white heading-number'>24+</h4>
              <h4 className='text-white'>Award & Nominee</h4>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomeTopPage;
