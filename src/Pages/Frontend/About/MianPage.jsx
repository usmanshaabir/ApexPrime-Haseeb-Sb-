import React from 'react';
import Header from './Header';
import InteriorPower from './InteriorPower';
import OurVision from '../Home/Version';
import OurServices from '../Home/OurServices';
import OurDesginer from '../Home/OurDesginer';
import OurChoose from '../Home/Choose';

export default function MianPage() {
    return (
        <>
            <Header />
            <InteriorPower />
            <OurVision />
            <OurServices />
            <OurDesginer />
            <OurChoose />
        </>
    )
}
