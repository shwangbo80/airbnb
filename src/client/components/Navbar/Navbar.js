import React from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <ul className="nav">
            <li className="logo">Airbnb</li>
            <NavItem title="Places to stay" />
            <NavItem title="Experiences" />
            <NavItem title="Online Experiences" />
            <li class="ms-auto">Become a host</li>
            <li className="mx-2">l+r</li>
            <li>M+p</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
