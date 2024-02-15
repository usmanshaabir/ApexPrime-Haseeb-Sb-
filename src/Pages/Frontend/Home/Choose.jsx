import React, { useEffect } from 'react';
import choose from "../../../Assets/Images/choose.jpg";
import "../../../Scss/_homeStyling.scss";
import AOS from "aos";
import "aos/dist/aos.css"



const Choose = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
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
                <div className="col-md-6" data-aos="fade-down-right">
                  <div class="card text-white card-responsive" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">Driven by Creative Excellence, our architecture melds innovation with meticulous craftsmanship for structures that are as unique as they are exceptional</p>
                      <span className='display-5'>Creative Excellent</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-down-left">
                  <div class="card text-white" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">At the core of our architectural ethos is 'Client Centricity,' ensuring personalized designs that reflect the unique visions and practical needs of those.</p>
                      <span className='display-5'>Client</span>
                      <p className='display-5 mb-0'>Centric</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6" data-aos="fade-up-right" >
                  <div class="card text-white card-responsive" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">Our third step, 'Sustainable Innovation,' guides us to design spaces that are both forward-thinking and environmentally conscious, balancing aesthetics with ecological integrity.</p>
                      <span className='display-5'>Sustainable Innovation</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-up-left">
                  <div class="card text-white" style={{ backgroundColor: "#212121" }}>
                    <div class="card-body">
                      <p class="card-text">Our fourth step is 'Attention to Detail,' where we meticulously refine every element to achieve architectural perfection and enduring quality in our designs.</p>
                      <span className='display-5'>Attention to Detial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={choose} className='img-fluid rounded h-100' alt="Choose icon Not Found" />
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
