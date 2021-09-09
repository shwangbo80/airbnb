import React from 'react';
import HeroButton from './HeroButton';
import MainNavbar from '../Navbar/Navbar';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="hero-img">
      <MainNavbar />
      <div className="search-bar-div">
        <div className="d-none d-lg-inline">
          <SearchBar />
        </div>
      </div>
      <div className="hero-container">
        <h3 className="hero-text">Not sure where to go? Perfect.</h3>

        {/* search */}
        <HeroButton />
      </div>
    </div>
  );
};

export default Hero;
