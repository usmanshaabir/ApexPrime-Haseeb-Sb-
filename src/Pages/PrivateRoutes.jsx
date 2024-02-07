import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontend from "./Frontend";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function PrivateRoutes() {
    return (
        <>
            <Header />
            <Routes >
                <Route path='/*' element={<Frontend />} />
            </Routes>
            <Footer />
        </>
    )
}
