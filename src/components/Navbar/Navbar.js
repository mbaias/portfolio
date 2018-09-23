import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = ({ path }) => {
  const navClass = path !== '/' ? 'nav' : 'nav nav--moved';
  const navbarLinkClass =
    path !== '/' ? 'navbar__link' : 'navbar__link navbar__link--primary-1';
  const activeNavbarLinkClass = path !== '/' ? 'active' : 'active--primary-1';
  const navbarCounterClass =
    path !== '/'
      ? 'navbar__counter'
      : 'navbar__counter navbar__counter--primary-1';

  return (
    <nav className={navClass}>
      <ul className="navbar">
        <li className="navbar__item">
          <span className={navbarCounterClass}>01</span>
          <NavLink
            activeClassName={activeNavbarLinkClass}
            className={navbarLinkClass}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <span className={navbarCounterClass}>02</span>
          <NavLink className={navbarLinkClass} to="/about">
            About
          </NavLink>
        </li>
        <li className="navbar__item">
          <span className={navbarCounterClass}>03</span>
          <NavLink className={navbarLinkClass} to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="navbar__item">
          <span className={navbarCounterClass}>04</span>
          <NavLink className={navbarLinkClass} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Navbar;
