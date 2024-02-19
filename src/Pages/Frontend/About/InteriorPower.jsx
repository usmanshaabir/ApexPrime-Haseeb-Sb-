import React from 'react';
import interiorPower from "../../../Assets/Images/about2.jpg"

export default function InteriorPower() {
  return (
    <>
      <section className='interiorPower mt-5 pt-5'>
        <div className="container">
          <div className="row">
            <h4 style={{ color: "#9b6f4c" }}>What We Do </h4>
            <h2 className=' mt-5 display-4'>We believe in the transformative power of interior Design</h2>
          </div>
          <div className="row mt-5 mb-5 ">
            <div className="col-md-6 ">
              <img src={interiorPower} className='img-fluid rounded me-5' alt="interiorPower icon not found" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-end">
              <p>

                Interior power in construction refers to the electrical infrastructure installed within buildings to support lighting, appliances, equipment, and other electrical needs. It involves planning, designing, and implementing electrical systems to ensure safe and efficient power distribution throughout the interior spaces of a structure. This includes wiring, outlets, switches, circuit breakers, and other components necessary for electricity to flow reliably and meet the demands of occupants. Properly designed interior power systems are essential for ensuring functionality, comfort, and compliance with building codes and regulations.</p>
              <div>
                <button type="button" class="btn btn-dark btn-lg rounded-pill mt-3">Contact Us</button>
              </div>
            </div>
          </div>
          {/* Vedio Section Here */}
          <div className="conatiner" style={{ marginTop: "150px", marginBottom: "150px" }}>
            <div className="row">
              <iframe width="560" style={{ borderRadius: "35px" }} height="500" src="https://www.youtube.com/embed/OzUkvzyBttA?si=h9mAF7S7kPwPYLI2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
