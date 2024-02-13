import React from 'react';
import choose from "../../../Assets/Images/choose.jpg";
import "../../../Scss/_homeStyling.scss"


const Choose = () => {
  return (
    <>
      <section className="why-choose-us py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 text-center">
              <h6 className="text-uppercase" style={{ color: "#E89F71" }}>What Sets Us Apart</h6>
              <h2 className="display-3">Why Choose Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div class="card text-white card-responsive" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                      <span className='display-4'>Creative Excellent</span>
                      <span className='display-4'>01</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card text-white" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                      <span className='display-4'>Creative Excellent</span>
                      <span className='display-4'>01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <div class="card text-white card-responsive" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                      <span className='display-4'>Creative Excellent</span>
                      <span className='display-4'>01</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card text-white" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                      <span className='display-4'>Creative Excellent</span>
                      <span className='display-4'>01</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={choose} className='img-fluid rounded h-100' alt="Choose Photo Not Found" />
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* choose us */}
        <div className='over'></div>
        <div className="parallax text-white text-center d-flex flex-column justify-content-center">
          <h2 >Connect With Us! Let's</h2>
          <h2 >Design Your Dream Together</h2>
          <div className='mt-3' style={{ zIndex: "2" }}>
            <button type="button" class="btn btn-lg text-light rounded-pill" style={{ backgroundColor: "#E89F71" }}>Get Started</button>
          </div>
        </div>
      </section>

    </>
  );
};

export default Choose;
