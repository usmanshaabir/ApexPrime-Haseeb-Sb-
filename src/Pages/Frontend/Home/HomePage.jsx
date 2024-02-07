import React from 'react'
import HomeTopPage from './HomeTopPage'
import OurServices from './OurServices'
import Version from './Version'
import Choose from './Choose'
import OurProject from './OurProject'
import OurDesginer from './OurDesginer'
import Testimonial from './Testimonial'
import OurJounery from './OurJounery'

export default function HomePage() {
    return (
        <div>
            <HomeTopPage />
            <OurServices />
            <Version />
            <Choose />
            <OurProject />
            <OurDesginer />
            <Testimonial />
            <OurJounery />
        </div>
    )
}
