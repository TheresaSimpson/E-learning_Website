import React from 'react';
import Header from "../components/navigation/Header";

import LandingPage from '../components/LandingPage';
import HomeMidsec from '../components/HomeMidsec';
import Footer from '../components/Footer';


const HomePage = () => {
    return (
      <div>
        <Header />
        <LandingPage />
        <HomeMidsec />
        <Footer />
      </div>
    );
}

export default HomePage;
