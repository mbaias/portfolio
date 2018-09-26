import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import PageCounter from './PageCounter';
import About from './components/About/About';

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

class App extends Component {
  render() {
    const { location } = this.props;
    const { pathname: path, key } = location;
    return (
      <div className="wrapper">
        <div className="background">
          <div
            className={
              path === '/'
                ? 'background__overlay'
                : 'background__overlay background__overlay--moved'
            }
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
