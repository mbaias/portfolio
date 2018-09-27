import React from 'react';
import posed from 'react-pose';
import '../../styles/portfolio.css';

const PortfolioContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const Portfolio = () => (
  <PortfolioContainer className="portfolio-wrapper">
    <div className="neon">
      <div className="box">
        C<span className="blink">o</span>
        mi
        <span className="blink1">n</span>g
      </div>
      <div className="box box1">
        <span className="blink2">s</span>o<span className="off">o</span>n
        <span className="loading-dots loading-dots-1" />
        <span className="loading-dots loading-dots-2" />
        <span className="loading-dots loading-dots-3" />
      </div>
    </div>
  </PortfolioContainer>
);

export default Portfolio;
