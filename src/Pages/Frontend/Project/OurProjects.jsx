import React from 'react';
import FirstProject from "../../../Assets/Images/firstProject.jpg";
import SecondProject from "../../../Assets/Images/secondProject.jpg";

export default function OurProjects() {
  return (
    <>
      <section className='py-5 mt-5'>
        <div className="container">
          <div className="row">
            <div class="card p-3">
              <div class="card-body">
                <h2 class="card-title ">Harmony In Hues: Interior Concept</h2>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src={FirstProject} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5">
              <div class="card-body">
                <h2 class="card-title ">Modern Minimalism Room</h2>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src={SecondProject} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5">
              <div class="card-body">
                <h2 class="card-title ">Modern Minimalism Room</h2>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src={SecondProject} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5">
              <div class="card-body">
                <h2 class="card-title ">Modern Minimalism Room</h2>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src={SecondProject} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
            <div class="card p-3 mt-5">
              <div class="card-body">
                <h2 class="card-title ">Modern Minimalism Room</h2>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src={SecondProject} class="card-img-bottom rounded" alt="FirstProject not found" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
