import React from 'react'
import ServicesHeader from './ServicesHeader'
import InteriorServices from './InteriorServices'
import OurServices from './OurServices'
import ProcessSection from './ProcessSection'
import Testimonials from '../Home/Testimonial'
import ConectUs from './ConectUs'

export default function MainPage() {
    return (
        <>
            <ServicesHeader />
            <OurServices />
            <InteriorServices />
            <ProcessSection />
            <Testimonials />
            <ConectUs />
        </>
    )
}
