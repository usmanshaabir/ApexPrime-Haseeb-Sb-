import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import Contact from "./Contact";

export default function index() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
