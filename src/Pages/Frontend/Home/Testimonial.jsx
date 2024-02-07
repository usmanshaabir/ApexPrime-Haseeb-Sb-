import React from 'react';
// Import Swiper React components
import "../../../Scss/_testimonial.scss";
import haseeb from "../../../Assets/Images/haseeb.png"



export default function Testimonial() {
    return (
        <>
            <swiper-container class="mySwiper" pagination="true" pagination-type="progressbar" navigation="true" >
                <swiper-slide>
                    <div className="container mb-5">
                        <div className="row ">
                            <div>
                                <h4 style={{ color: "#9b6f4c" }} className='fs-5 fw-medium display-5'>What They Say About Xhiloh</h4>
                                <h2 className='text-light display-1'>Testimonials</h2>
                                <p className='text-center mt-5 pt-4 text-light'>Exceeded my expectations! Xhiloh transformed my space into a sanctuary. Their attention to detail, creativity, and professionalism are unmatched. Living in my newly designed home feels like a dream come true!</p>
                                <div className='d-flex justify-content-center'>
                                    <img src={haseeb} alt="haseeb sb not found" className='rounded-pill' style={{ width: "7%", height: "22%" }} />
                                </div>
                                <h4 className='text-white mt-4'>Mian Haseeb</h4>
                                <h6 style={{ color: "#E89F71" }}>Bussinessman</h6>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="container mb-5">
                        <div className="row ">
                            <div>
                                <h4 style={{ color: "#9b6f4c" }} className='fs-5 fw-medium display-5'>What They Say About Xhiloh</h4>
                                <h2 className='text-light display-1'>Testimonials</h2>
                                <p className='text-center mt-5 pt-4 text-light'>Exceeded my expectations! Xhiloh transformed my space into a sanctuary. Their attention to detail, creativity, and professionalism are unmatched. Living in my newly designed home feels like a dream come true!</p>
                                <div className='d-flex justify-content-center'>
                                    <img src={haseeb} alt="haseeb sb not found" className='rounded-pill' style={{ width: "7%", height: "22%" }} />
                                </div>
                                <h4 className='text-white mt-4'>Mian Haseeb</h4>
                                <h6 style={{ color: "#E89F71" }}>Bussinessman</h6>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="container mb-5">
                        <div className="row ">
                            <div>
                                <h4 style={{ color: "#9b6f4c" }} className='fs-5 fw-medium display-5'>What They Say About Xhiloh</h4>
                                <h2 className='text-light display-1'>Testimonials</h2>
                                <p className='text-center mt-5 pt-4 text-light'>Exceeded my expectations! Xhiloh transformed my space into a sanctuary. Their attention to detail, creativity, and professionalism are unmatched. Living in my newly designed home feels like a dream come true!</p>
                                <div className='d-flex justify-content-center'>
                                    <img src={haseeb} alt="haseeb sb not found" className='rounded-pill' style={{ width: "7%", height: "22%" }} />
                                </div>
                                <h4 className='text-white mt-4'>Mian Haseeb</h4>
                                <h6 style={{ color: "#E89F71" }}>Bussinessman</h6>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper-container>
        </>
    );
}
