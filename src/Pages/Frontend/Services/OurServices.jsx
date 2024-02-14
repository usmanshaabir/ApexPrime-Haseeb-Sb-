import React, { useEffect } from 'react';
import archecturalDesgin from "../../../Assets/Images/archectural.jpg";
import interiorDesgin from "../../../Assets/Images/interior.jpg";
import remoldingDesgin from "../../../Assets/Images/remoldingImage.jpg";
import Sustainability from "../../../Assets/Images/Sustainability.jpg";
import DecorArt from "../../../Assets/Images/Decor&Art.jpg";
import Renovation from "../../../Assets/Images/Renovation.jpg";
import AOS from "aos";
import "aos/dist/aos.css"


const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    })
  }, [])

  return (
    <section className="services-section py-5" style={{ backgroundColor: "#EDE4D9" }}>
      <div className="container">
        <h1 className='mt-5'>What We Do</h1>
        <h2 className="display-4 mt-5">Our Services</h2>
        <div className="row mt-5">
          <div className="col-md-12">
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.</p>
          </div>

        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="card border-0">
              <img src={archecturalDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Architectural</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="btn" style={{ color: "#9B6F4C" }}>Read More →</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="flip-right">
            <div className="card border-0">
              <img src={interiorDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Interior</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="btn" style={{ color: "#9B6F4C" }}>Read More →</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="card border-0">
              <img src={remoldingDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Remodeling</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="btn" style={{ color: "#9B6F4C" }}>Read More →</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="card border-0">
              <img src={Sustainability} className="card-img-top rounded-5 p-3" alt="Sustainability not found" />
              <div className="card-body">
                <h3 className="card-title">Sustainability</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="btn" style={{ color: "#9B6F4C" }}>Read More →</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="card border-0">
              <img src={DecorArt} className="card-img-top rounded-5 p-3" alt="DecorArt not found" />
              <div className="card-body">
                <h3 className="card-title">Decor & Art</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="btn" style={{ color: "#9B6F4C" }}>Read More →</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <div className="card border-0">
              <img src={Renovation} className="card-img-top rounded-5 p-3" alt="Renovation not found" />
              <div className="card-body">
                <h3 className="card-title">Renovation</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="btn" style={{ color: "#9B6F4C" }}>Read More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
