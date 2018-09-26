import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import PageCounter from './PageCounter';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
  },
});

// const BackgroundOverlay = posed.div({
//   overlay: {
//     x: ({ path }) =>
//       // eslint-disable-next-line
//       path === '/portfolio' ? '0%' : path === '/' ? '-50%' : '-80%',
//     transition: {
//       type: 'spring',
//       stiffness: 300,
//       damping: 40,
//       duration: 1000,
//     },
//   },
// });

class App extends Component {
  render() {
    const { location } = this.props;
    const { pathname: path, key } = location;

    const backgroundOverlayClass =
      // eslint-disable-next-line
      path === '/'
        ? 'background__overlay'
        : path === '/portfolio'
          ? 'background__overlay background__overlay--fluid'
          : 'background__overlay background__overlay--partial';
    return (
      <div className="wrapper">
        <div className="background">
          <div
            // pose="overlay"
            // poseKey={path}
            // path={path}
            className={backgroundOverlayClass}
          />
        </div>
        <div className="page-side-content">
          <Header path={path} />
          <Navbar path={path} />
        </div>
        <main className="secondary-content-wrapper">
          <PageCounter path={path} />
          <PoseGroup>
            <RoutesContainer className="routes-container" key={key}>
              <Switch location={location}>
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(hot(module)(App));
