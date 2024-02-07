import React from 'react';
import archecturalDesgin from "../../../Assets/Images/archectural.jpg"
import interiorDesgin from "../../../Assets/Images/interior.jpg"
import remoldingDesgin from "../../../Assets/Images/remoldingImage.jpg"


const OurProject = () => {
    return (
        <section className="services-section py-5" style={{ backgroundColor: "#EDE4D9" }}>
            <div className="container">
                <h1 className='mt-5'>What We Do</h1>
                <h2 className="display-4 mt-5">Our Project</h2>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.</p>
                    </div>
                    <div className="col-md-4 text-end">
                        <button className="btn btn-dark text-light rounded-pill px-4 py-3 fs-5" >Explore All</button>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-md-6 mb-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <h3 className="card-title px-3" style={{ fontSize: "3.5rem" }}>Harmony In Hues: Interior Concept</h3>
                                <div className='d-flex justify-content-around'>
                                    <div style={{ color: "#C0C0C0" }}>Date : 21 januari 2024</div>
                                    <div style={{ color: "#C0C0C0" }}>Author : mpirtm</div>
                                </div>
                                <img src={archecturalDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <h3 className="card-title px-3" style={{ fontSize: "3.5rem" }}>Harmony In Hues: Interior Concept</h3>
                                <div className='d-flex justify-content-around'>
                                    <div style={{ color: "#C0C0C0" }}>Date : 21 januari 2024</div>
                                    <div style={{ color: "#C0C0C0" }}>Author : mpirtm</div>
                                </div>
                                <img src={archecturalDesgin} className="card-img-top rounded-5 p-3" alt="Architectural" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurProject;
