import React from 'react';
import interiorDesgin from "../../../Assets/Images/interiorser.jpg"

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
              <p >ur interior design services offer personalized solutions to transform your space into a stylish and functional environment. From concept development to final execution, we focus on optimizing layouts, selecting quality materials, and curating decor to reflect your unique style. Contact us to start your design journey today!.</p>
              <p >Discover the epitome of interior design excellence with our comprehensive services tailored to elevate your space. From initial consultations to the final touches, we prioritize your vision, ensuring every detail reflects your personality and lifestyle. With meticulous attention to space optimization, material selection, and aesthetic cohesion, we promise to create an environment that exceeds your expectations. Experience the transformative power of our expertise and let us bring your dream interior to life.</p>
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
