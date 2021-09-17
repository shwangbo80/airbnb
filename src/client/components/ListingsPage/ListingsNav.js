import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavItem from '../Navbar/NavItem';
import Logo from '../Navbar/Logo';
import MemberPortal from '../Navbar/MemberPortal';
import logoImgRed from '../Navbar/img/logo-img-red.png';
import ListingsSearchBar from './ListingsSearchBar';

function ListingsNav() {
  return (
    <>
      <Navbar
        className="nav"
        fixed="top"
        style={{
          backgroundColor: 'white',
        }}
      >
        <span className="logo-hide">
          <img className="logo" src={logoImgRed} alt="logo" />
        </span>

        <ListingsSearchBar />

        <div className="member">
          <li className=" d-none d-lg-inline host mx-3">Become a host</li>
          <li className="mx-1 d-none d-lg-inline">
            <i className="bi bi-globe" />
          </li>
          <span className="ms-2">
            <MemberPortal />
          </span>
        </div>
      </Navbar>
    </>
  );
}

export default ListingsNav;
