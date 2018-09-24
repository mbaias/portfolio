import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import posed from 'react-pose';
import '../../styles/navbar.css';

const Nav = posed.nav({
  origin: {
    top: 'calc(100% - 30px)',
    right: 'calc(100% - 30px)',
    flip: true,
    transition: {
      duration: 1000,
    },
  },
  moved: {
    top: '50%',
    right: '-100%',
    flip: true,
    transition: {
      duration: 1000,
    },
  },
});

const Navbar = ({ path }) => {
  const animateLinkOnHoverOff = e => {
    e.target.classList.add('hoverOff');
  };

  const navClass = path !== '/' ? 'nav' : 'nav nav--moved';

  const navbarLinkClass =
    path !== '/' ? 'navbar__link' : 'navbar__link navbar__link--primary-1';

  const activeNavbarLinkClass = path !== '/' ? 'active' : 'active--primary-1';

  const navbarCounterClass =
    path !== '/'
      ? 'navbar__counter'
      : 'navbar__counter navbar__counter--primary-1';

  return (
    <Nav pose={path === '/' ? 'moved' : 'origin'} className={navClass}>
      <ul className="navbar">
        <li className="navbar__item">
          <span className={navbarCounterClass}>01</span>
          <NavLink
            onMouseOut={animateLinkOnHoverOff}
            activeClassName={activeNavbarLinkClass}
            className={navbarLinkClass}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <span className={navbarCounterClass}>02</span>
          <NavLink
            onMouseOut={animateLinkOnHoverOff}
            className={navbarLinkClass}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="navbar__item">
          <span className={navbarCounterClass}>03</span>
          <NavLink
            onMouseOut={animateLinkOnHoverOff}
            className={navbarLinkClass}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="navbar__item">
          <span className={navbarCounterClass}>04</span>
          <NavLink
            onMouseOut={animateLinkOnHoverOff}
            className={navbarLinkClass}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

Navbar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Navbar;
