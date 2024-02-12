import React from 'react';
import ScrollToUp from "../Assets/Images/up-arrow.png";
import { Routes, Route } from 'react-router-dom';
import Frontend from "./Frontend";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function PrivateRoutes() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Header />
      <main>
        <div className='text-end'>
          <img src={ScrollToUp} onClick={scrollToTop} className="scroll-to-up" alt="ScrollToUp Not Found" />
        </div>
        <Routes >
          <Route path='/*' element={<Frontend />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
