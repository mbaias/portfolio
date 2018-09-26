import React from 'react';
import '../../styles/portfolio.css';

const Portfolio = () => (
  <div className="portfolio-wrapper">
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
  </div>
);

export default Portfolio;
