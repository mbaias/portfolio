import React from 'react';
import '../../styles/socials.css';

const Socials = () => (
  <footer className="footer">
    <ul className="social-media">
      <li className="social-media__item">
        <a
          href="https://www.linkedin.com/in/mbaias/"
          className="social-media__link"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li className="social-media__item">
        <a href="https://github.com/mbaias" className="social-media__link">
          <i className="fab fa-github" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Socials;
