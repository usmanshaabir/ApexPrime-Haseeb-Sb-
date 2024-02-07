import React from 'react';
import haseeb from "../../../Assets/Images/haseeb.png";
import fahid from "../../../Assets/Images/fahid.png";
import remoldingDesgin from "../../../Assets/Images/remoldingImage.jpg";
import instragram from "../../../Assets/Images/instagram.png";
import facebook from "../../../Assets/Images/facebook.png";
import linkdin from "../../../Assets/Images/linkedin.png";
import nauman from "../../../Assets/Images/nauman.png";


const OurDesginer = () => {
    return (
        <section className="services-section py-5" >
            <div className="container">
                <h1 className='mt-5' style={{ color: "#E89F71" }}>Curating Excellence</h1>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <h2 className="display-4 ">Meet Our Design </h2>
                        <h2 className="display-4 ">Mestros</h2>
                    </div>
                    <div className="col-md-4 text-end">
                        <button className="btn btn-dark text-light rounded-pill px-4 py-3 fs-5" >Explore All</button>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-md-4 mb-3">
                        <div className="card border-0 rounded-0" style={{ backgroundColor: "#F9F1E7" }}>
                            <img src={haseeb} className="card-img-top p-2 img-fluid" alt="Architectural" />
                            <div className="card-body">
                                <h3 className="card-title">Mian Haseeb</h3>
                                <p className="card-text">Interior Designer</p>
                                <img src={instragram} alt="instragram icon not found" />
                                <img src={facebook} className='ms-3' alt="instragram icon not found" />
                                <img src={linkdin} className='ms-3' alt="instragram icon not found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card border-0 rounded-0" style={{ backgroundColor: "#F9F1E7" }}>
                            <img src={fahid} className="card-img-top p-2 img-fluid" alt="Architectural" />
                            <div className="card-body">
                                <h3 className="card-title">Fahid Jutt</h3>
                                <p className="card-text">2D Planner</p>
                                <img src={instragram} alt="instragram icon not found" />
                                <img src={facebook} className='ms-3' alt="instragram icon not found" />
                                <img src={linkdin} className='ms-3' alt="instragram icon not found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card border-0 rounded-0" style={{ backgroundColor: "#F9F1E7" }}>
                            <img src={nauman} className="card-img-top p-2 img-fluid" alt="Architectural" />
                            <div className="card-body">
                                <h3 className="card-title">Nauman Shabbir</h3>
                                <p className="card-text">React Developer</p>
                                <img src={instragram} alt="instragram icon not found" />
                                <img src={facebook} className='ms-3' alt="instragram icon not found" />
                                <img src={linkdin} className='ms-3' alt="instragram icon not found" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurDesginer;