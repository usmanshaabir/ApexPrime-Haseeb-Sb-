import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";

export default function index() {
  return (
    <>
      <Routes>
        <Route path='home' element={<Home />} />
      </Routes>
    </>
  )
}
