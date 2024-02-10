import React from 'react'
import HeaderSection from './HeaderSection'
import ContactInfo from './ContactInfo'
import Information from './Information'
import GoogleMap from './GoogleMap'

export default function MainPage() {
    return (
        <div>
            <HeaderSection />
            <ContactInfo />
            <Information />
            <GoogleMap />
        </div>
    )
}
