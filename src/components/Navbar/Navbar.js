import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = ({ path }) => {
  const navClass = path !== '/' ? 'nav' : 'nav nav--moved';
  const navbarLinkClass =
    path !== '/' ? 'navbar__link' : 'navbar__link navbar__link--primary-1';

  return (
    <nav className={navClass}>
      <ul className="navbar">
        <li className="navbar__item">
          <Link className={navbarLinkClass} to="/">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className={navbarLinkClass} to="/about">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link className={navbarLinkClass} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="navbar__item">
          <Link className={navbarLinkClass} to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
