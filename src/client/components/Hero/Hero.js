import React from 'react';
import HeroButton from './HeroButton';
import MainNavbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <div className="hero-img">
      <MainNavbar />
      <div className="hero-container">
        <h3 className="hero-text">Not sure where to go? Perfect.</h3>
        <HeroButton />
      </div>
    </div>
  );
};

export default Hero;
