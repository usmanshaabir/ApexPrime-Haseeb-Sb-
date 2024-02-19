import React, { useEffect } from 'react';
import FirstProject1 from "../../../Assets/Images/8 (4).jpg";
import SecondProject from "../../../Assets/Images/secondProject.jpg";
import SecondProject1 from "../../../Assets/Images/12.jpg";
import SecondProject2 from "../../../Assets/Images/0 (1).jpg";
import ourProject5 from "../../../Assets/Images/OurProject6.jpg";

import AOS from "aos";
import "aos/dist/aos.css"

export default function OurProjects() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    })
  }, [])

  return (
    <>
      <section className='py-5 mt-5'>
        <div className="container">
          <div className="row">
            <div class="card p-3" data-aos="fade-up">
              <div class="card-body">
                <h2 class="card-title ">Apex Prime: Interior Concept</h2>
                <p class="card-text">A short interior concept is a concise vision that captures the essence of a space through careful selection of colors, textures, furniture, and decor, creating a cohesive and inviting atmosphere tailored to the client's needs and preferences</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 5 hours ago</small></p>
              </div>
              <img src={FirstProject1} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5" data-aos="fade-down">
              <div class="card-body">
                <h2 class="card-title ">Modern Minimalism Room</h2>
                <p class="card-text">Discover the epitome of interior design excellence with our comprehensive services tailored to elevate your space. From initial consultations to the final touches, we prioritize your vision, ensuring every detail reflects your personality and lifestyle.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src={SecondProject} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5" data-aos="fade-right">
              <div class="card-body">
                <h2 class="card-title ">Front Elevation</h2>
                <p class="card-text">Front elevation refers to refining the external appearance of a structure to enhance its visual appeal and functionality, considering architectural elements, materials, proportions, and aesthetic details.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 58 mins ago</small></p>
              </div>
              <img src={SecondProject1} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5" data-aos="fade-left">
              <div class="card-body">
                <h2 class="card-title ">Interior Desgin</h2>
                <p class="card-text">Interior design is the art of enhancing interior spaces through layout planning, furniture selection, color coordination, and decor choices to create aesthetically pleasing and functional environments that reflect the client's preferences and needs..</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 4 day ago</small></p>
              </div>
              <img src={SecondProject2} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5" data-aos="fade-up-right">
              <div class="card-body">
                <h2 class="card-title ">Modern Front Elevation</h2>
                <p class="card-text">
                  A modern front elevation is sleek and minimalist, with clean lines, large windows, and a mix of materials like glass and metal. It often includes bold architectural features and minimal landscaping, exuding contemporary sophistication.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 1 Year ago</small></p>
              </div>
              <img src={ourProject5} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
