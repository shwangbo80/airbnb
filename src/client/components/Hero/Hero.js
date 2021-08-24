import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroButton from './HeroButton';

const Hero = () => {
  return (
    <div className="hero-img">
      <Navbar />
      <div className="hero-container">
        <h3 className="hero-text">Not sure where to go? Perfect.</h3>
        <HeroButton />
      </div>
    </div>
  );
};

export default Hero;
