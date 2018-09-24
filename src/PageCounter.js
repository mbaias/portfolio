import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import './styles/pageCounter.css';

const ProgressOverlay = posed.div({
  init: {
    width: ({ progress }) => progress,
    flip: true,
    transition: {
      duration: 200,
    },
  },
});

const CurrentPageNumber = posed.div({
  enter: {
    opacity: 1,
    y: '0',
    transition: { duration: 300, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    y: '-40px',
    transition: { duration: 300, ease: 'easeInOut' },
  },
});

export default class PageCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 4,
      pages: {
        '/': 1,
        '/about': 2,
        '/portfolio': 3,
        '/contacts': 4,
      },
    };
  }

  iterateOverTotal = () => {
    const { total, pages } = this.state;
    const currentPageNumber = `${pages[this.props.path]}`;
    let i = 0;
    while (i < total) {
      // eslint-disable-next-line
      i++;
      if (currentPageNumber === `${i}`) {
        return (
          <CurrentPageNumber key={i} className="page-counter__current">
            {currentPageNumber}
          </CurrentPageNumber>
        );
      }
    }
  };

  render() {
    const { path } = this.props;
    const { total, pages } = this.state;
    const progress = `${(pages[path] / total) * 100}%`;
    return (
      <React.Fragment>
        <div className="page-counter">
          <PoseGroup>{this.iterateOverTotal()}</PoseGroup>
          <div className="page-counter__progress">
            <ProgressOverlay
              pose="init"
              poseKey={progress}
              progress={progress}
              className="page-counter__progress__overlay"
            />
          </div>
          <div className="page-counter__total">{total}</div>
        </div>
      </React.Fragment>
    );
  }
}

PageCounter.propTypes = {
  path: PropTypes.string.isRequired,
};
