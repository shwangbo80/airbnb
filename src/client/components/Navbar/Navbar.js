import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import MemberPortal from './MemberPortal';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <ul className="nav" sticky="top">
            <Logo />
            <NavItem title="Places to stay" />
            <NavItem title="Experiences" />
            <NavItem title="Online Experiences" />
            <li class="ms-auto">Become a host</li>
            <li className="ms-2">
              <i className="bi bi-globe" />
            </li>
            <MemberPortal />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
