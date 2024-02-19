import React from 'react';
import ScrollToUp from "../Assets/Images/up-arrow.png";
import whatsApp from "../Assets/Images/whatsapp.png";
import { Routes, Route } from 'react-router-dom';
import Frontend from "./Frontend";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function PrivateRoutes() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // };

  const scrollWhatsApp = () => {
    const whatsAppLink = 'https://wa.me/+923047649053';
    window.open(whatsAppLink, '_blank');
  }
  return (
    <>
      <Header />
      <main>
        {/* <div className='text-end'>
          <img src={ScrollToUp} onClick={scrollToTop} className="scroll-to-up" alt="ScrollToUp Not Found" />
        </div> */}
        <div className='text-start'>
          <img src={whatsApp} onClick={scrollWhatsApp} className="whats-app" alt="ScrollToUp Not Found" />
        </div>
        <Routes >
          <Route path='/*' element={<Frontend />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
