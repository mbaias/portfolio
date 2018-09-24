import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import '../../styles/header.css';

const MainHeader = posed.header({
  origin: {
    top: '30px',
    left: '30px',
    flip: true,
    transition: {
      duration: 1000,
    },
  },
  moved: {
    top: '40%',
    left: '30%',
    flip: true,
    transition: {
      duration: 1000,
    },
  },
});

const Header = ({ path }) => {
  const headerClass = path !== '/' ? 'header' : 'header header--moved';

  return (
    <MainHeader
      pose={path !== '/' ? 'origin' : 'moved'}
      className={headerClass}
    >
      <div className="person">
        <h1 className="person__name">
          <span className="person-overlay" />
          {path === '/' ? (
            <span className="person__name__text">BAIAS MAMETJANOV</span>
          ) : (
            <span className="person__name__text">BAIAS M.</span>
          )}
        </h1>
        <h3 className="person__job-title">
          <span className="person-overlay person-overlay--delayed" />
          <span className="person__job-title__text">Front-end Developer</span>
        </h3>
      </div>
    </MainHeader>
  );
};

Header.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Header;
