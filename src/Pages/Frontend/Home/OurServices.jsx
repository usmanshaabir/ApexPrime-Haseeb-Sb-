import React, { useEffect, useState } from 'react';
import archecturalDesgin from "../../../Assets/Images/arch3.jpg"
import archecturalDesgin2 from "../../../Assets/Images/arch1.jpg"
import archecturalDesgin3 from "../../../Assets/Images/arch2.jpg"
import interior1 from "../../../Assets/Images/interior1.jpg"
import interior2 from "../../../Assets/Images/interior2.jpg"
import interior3 from "../../../Assets/Images/interior3.jpg"
import remolding1 from "../../../Assets/Images/remolding1.jpg"
import remolding2 from "../../../Assets/Images/remoldind2.jpg"
import remolding3 from "../../../Assets/Images/remolding3.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';


const OurServices = () => {
  const [showMore, setShowMore] = useState(true)
  const [interior, setInterior] = useState(true)
  const [remolding, setRemolding] = useState(true)

  const navigation = useNavigate()

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Here you can find all the AOS attributes: https://michalsnik.github.io/aos/
      duration: 2000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      // ...more options
    });
  }, []);

  const handleArchitect = () => {
    setShowMore(!showMore)
  }
  const handleInterior = () => {
    setInterior(!interior)
  }
  const handleRemolding = () => {
    setRemolding(!remolding)
  }

  const handleExplore = () => {
    navigation("/project")
  }

  return (
    <section className="services-section py-5" style={{ backgroundColor: "#EDE4D9" }}>
      <div className="container">
        <h1 className='mt-5'>What We Do</h1>
        <h2 className="display-4 mt-5">Our Services</h2>
        <div className="row mt-5">
          <div className="col-md-8">
            <p className="lead">
              As an architect specializing in interior remodeling and architectural design, I provide innovative solutions to create inviting and functional spaces. My focus on creativity and attention to detail ensures that my architectural redesigns balance aesthetics with practicality, enhancing everyday living. Whether revitalizing outdated interiors or crafting new architectural plans, I aim to surpass expectations with designs tailored to your unique vision and lifestyle</p>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-dark text-light rounded-pill px-4 py-3 fs-5" onClick={handleExplore} >Explore All</button>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-4 mb-3 " data-aos="fade-up">
            <div className="card border-0">
              <img src={archecturalDesgin} className="card-img-top rounded-5 p-3" style={{ height: "25rem" }} alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Architectural</h3>
                <p className="card-text">As an architect, you design and plan buildings and structures, ensuring they are both visually appealing and functional.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 " data-aos="fade-up">
            <div className="card border-0">
              <img src={archecturalDesgin2} className="card-img-top rounded-5 p-3" style={{ height: "25rem" }} alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Architectural</h3>
                <p className="card-text">As an architect, you craft and scheme buildings and structures, ensuring they marry visual charm with functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 " data-aos="fade-up">
            <div className="card border-0">
              <img src={archecturalDesgin3} className="card-img-top rounded-5 p-3" style={{ height: "25rem" }} alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Architectural</h3>
                <p className="card-text">
                  As an architect, you create and organize buildings and structures, ensuring they blend visual charm with functionality
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-4 mb-3 " data-aos="fade-up">
            <div className="card border-0">
              <img src={interior1} className="card-img-top rounded-5 p-3" style={{ height: "25rem" }} alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Interior</h3>
                <p className="card-text">As an architect, you design and plan buildings and structures, ensuring they are both visually appealing and functional. <span >{showMore ? "..." : " "}</span>
                  <span style={{ display: showMore ? 'none' : 'inline' }} id="more">
                    You work closely with clients to understand their needs, create design concepts, produce detailed drawings, and oversee construction to ensure quality and safety. Collaboration with various professionals is key to successfully bringing projects to life.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-down">
            <div className="card border-0">
              <img src={interior2} style={{ height: "25rem" }} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Interior</h3>
                <p className="card-text">
                  As an interior designer, you craft visually appealing and functional indoor spaces by collaborating with clients to understand their needs and preferences <span >{interior ? "..." : " "}</span>
                  <span style={{ display: interior ? 'none' : 'inline' }} id="more">
                    Your work encompasses layout, color schemes, furniture selection, lighting, and decor, with a keen eye for detail. You coordinate with various professionals to bring designs to life, ensuring they align with the client's vision and budget.
                  </span>
                </p>

              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-up">
            <div className="card border-0">
              <img src={interior3} style={{ height: "25rem" }} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Interior</h3>
                <p className="card-text">
                  In remodeling projects, interior designers revitalize existing spaces by optimizing layout, refreshing colors, updating fixtures, and enhancing decor. s <span >{remolding ? "..." : " "}</span>
                  <span style={{ display: remolding ? 'none' : 'inline' }} id="more">
                    They collaborate closely with clients and contractors to ensure the project aligns with the client's vision and budget while maximizing functionality and aesthetics.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-4 mb-3 " data-aos="fade-up">
            <div className="card border-0">
              <img src={remolding1} className="card-img-top rounded-5 p-3" style={{ height: "25rem" }} alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Remolding</h3>
                <p className="card-text">Revamping requires reshaping and reorganizing areas and place, ensuring they uphold both visual charm and usefulness.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-down">
            <div className="card border-0">
              <img src={remolding2} style={{ height: "25rem" }} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Remolding</h3>
                <p className="card-text">
                  Revamping entails reimagining and reorganizing areas, guaranteeing they uphold both visual allure and functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-up">
            <div className="card border-0">
              <img src={remolding3} style={{ height: "25rem" }} className="card-img-top rounded-5 p-3" alt="Architectural" />
              <div className="card-body">
                <h3 className="card-title">Remolding</h3>
                <p className="card-text">
                  Remodeling involves redesigning and restructuring spaces, ensuring they maintain both aesthetic appeal and practicality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
