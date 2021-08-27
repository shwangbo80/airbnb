import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import MemberPortal from './MemberPortal';
import { Navbar } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';

const MainNavbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        className="nav"
        fixed="top"
        style={{
          transition: '200ms ease',
          backgroundColor: navBackground ? 'white' : 'transparent',
        }}
      >
        <Logo />
        <NavItem title="Places to stay" />
        <NavItem title="Experiences" />
        <NavItem title="Online Experiences" />
        <li class="ms-auto">Become a host</li>
        <li className="mx-3">
          <i className="bi bi-globe" />
        </li>
        <MemberPortal />
      </Navbar>
    </>
  );
};

export default MainNavbar;
