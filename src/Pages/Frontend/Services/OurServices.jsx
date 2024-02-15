import React, { useEffect, useState } from 'react';
import archecturalDesgin from "../../../Assets/Images/archectural.jpg";
import interiorDesgin from "../../../Assets/Images/interior.jpg";
import remoldingDesgin from "../../../Assets/Images/remoldingImage.jpg";
import Sustainability from "../../../Assets/Images/Sustainability.jpg";
import DecorArt from "../../../Assets/Images/Decor&Art.jpg";
import Renovation from "../../../Assets/Images/Renovation.jpg";
import AOS from "aos";
import "aos/dist/aos.css"


const OurServices = () => {
  const [showMore, setShowMore] = useState(true)
  const [interior, setInterior] = useState(true)
  const [remolding, setRemolding] = useState(true)
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    })
  }, [])

  const handleArchitect = () => {
    setShowMore(!showMore)
  }
  const handleInterior = () => {
    setInterior(!interior)
  }
  const handleRemolding = () => {
    setRemolding(!remolding)
  }

  return (
    <section className="services-section py-5" style={{ backgroundColor: "#EDE4D9" }}>
      <div className="container">
        <h1 className='mt-5'>What We Do</h1>
        <h2 className="display-4 mt-5">Our Services</h2>
        <div className="row mt-5">
          <div className="col-md-12">
            <p className="lead">We specialize in interior and exterior design and remodeling services. Our goal is to enhance the aesthetics and functionality of residential and commercial properties. From innovative interior designs to revitalizing exteriors, we offer personalized solutions to meet our clients' needs and exceed their expectations.</p>
          </div>

        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-4 mb-3 " data-aos="fade-up">
            <div className="card border-0">
              <img src={archecturalDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Architectural</h3>
                <p className="card-text">As an architect, you design and plan buildings and structures, ensuring they are both visually appealing and functional. <span >{showMore ? "..." : " "}</span>
                  <span style={{ display: showMore ? 'none' : 'inline' }} id="more">
                    You work closely with clients to understand their needs, create design concepts, produce detailed drawings, and oversee construction to ensure quality and safety. Collaboration with various professionals is key to successfully bringing projects to life.
                  </span>
                </p>
                <button className="btn" style={{ color: "#9B6F4C" }} onClick={handleArchitect} id="myBtn">{showMore ? 'Read more' : 'Read less'}</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-down">
            <div className="card border-0">
              <img src={interiorDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Interior</h3>
                <p className="card-text">
                  As an interior designer, you craft visually appealing and functional indoor spaces by collaborating with clients to understand their needs and preferences <span >{interior ? "..." : " "}</span>
                  <span style={{ display: interior ? 'none' : 'inline' }} id="more">
                    Your work encompasses layout, color schemes, furniture selection, lighting, and decor, with a keen eye for detail. You coordinate with various professionals to bring designs to life, ensuring they align with the client's vision and budget.
                  </span>
                </p>
                <button className="btn" style={{ color: "#9B6F4C" }} onClick={handleInterior} id="myBtn">{interior ? 'Read more' : 'Read less'}</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-up">
            <div className="card border-0">
              <img src={remoldingDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Remodeling</h3>
                <p className="card-text">
                  In remodeling projects, interior designers revitalize existing spaces by optimizing layout, refreshing colors, updating fixtures, and enhancing decor. s <span >{remolding ? "..." : " "}</span>
                  <span style={{ display: remolding ? 'none' : 'inline' }} id="more">
                    They collaborate closely with clients and contractors to ensure the project aligns with the client's vision and budget while maximizing functionality and aesthetics.
                  </span>
                </p>
                <button className="btn" style={{ color: "#9B6F4C" }} onClick={handleRemolding} id="myBtn">{remolding ? 'Read more' : 'Read less'}</button>
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
