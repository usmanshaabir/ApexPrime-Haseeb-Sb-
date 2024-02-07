import React from 'react';


const Version = () => {
  return (
    <section className="vision-section py-5 mt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-6">
            <h5 className='mb-4'>Xhilo’s Vision</h5>
            <h2 className="display-4">Our Vision</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-around">
            <p className='mb-0 fw-medium'>Idea & Concept</p>
            <div className="progress mb-3" >
              <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '80%', }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Idea & Concept</div>
            </div>
            <p className='mb-0 fw-medium'>Accuracy</p>
            <div className="progress mb-3">
              <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Accuracy</div>
            </div>
            <p className='mb-0 fw-medium'>Execution</p>
            <div className="progress mb-3">
              <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Execution</div>
            </div>
            <p className='mb-0 fw-medium'>Communication</p>
            <div className="progress">
              <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">Communication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version;