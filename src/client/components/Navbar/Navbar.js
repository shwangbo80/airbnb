import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import MemberPortal from './MemberPortal';
import { Navbar } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import SearchBarNav from '../Hero/SearchBarNav';

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
        <span className="logo-hide">
          <Logo />
        </span>
        <span className="nav-items">
          <NavItem title="Places to stay" />
          <NavItem title="Experiences" />
          <NavItem title="Online Experiences" />
        </span>

        <span className="d-lg-none">
          <SearchBarNav />
        </span>
        <div className="member">
          <li className=" d-none d-lg-inline host mx-3">Become a host</li>
          <li className="mx-3 d-none d-lg-inline">
            <i className="bi bi-globe" />
          </li>
          <span className="mx-3">
            <MemberPortal />
          </span>
        </div>
      </Navbar>
    </>
  );
};

export default MainNavbar;
