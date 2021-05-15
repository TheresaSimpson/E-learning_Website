import React from 'react'
import Header from '../components/navigation/Header'
import AboutSec1 from '../components/AboutSec1';
import AboutSec2 from "../components/AboutSec2";
import AboutSec3 from '../components/AboutSec3';

import Footer from '../components/Footer';



const AboutUs = () => {
    return (
      <div>
        <Header />
        <AboutSec1 />
        <AboutSec2 />
        <AboutSec3 />
        
        <Footer />
      </div>
    );
}

export default AboutUs;
