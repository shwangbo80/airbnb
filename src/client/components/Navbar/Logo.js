import React from 'react';
import logoImg from './img/logo-img.png';
import logoImgRed from './img/logo-img-red.png';
import { useState, useEffect } from 'react';

function Logo() {
  const [logoColor, setLogoColor] = useState(logoImg);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setLogoColor(logoImgRed);
      } else if (window.scrollY < 10) {
        setLogoColor(logoImg);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <img className="logo" src={logoColor} alt="logo" />;
}

export default Logo;
