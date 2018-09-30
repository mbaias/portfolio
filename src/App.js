import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

// Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import PageCounter from './PageCounter';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Success from './Success';

// Posed animation
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

const ID = () =>
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

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
          <div className={backgroundOverlayClass} />
        </div>
        <div className="page-side-content">
          <Header path={path} />
          <Navbar path={path} />
        </div>
        <main className="secondary-content-wrapper">
          <span
            className={
              path === '/portfolio'
                ? 'page-name page-name--colored'
                : 'page-name'
            }
          >
            {path.substr(1)}
          </span>
          <PageCounter path={path} />
          <PoseGroup>
            <RoutesContainer className="routes-container" key={ID()}>
              <Switch location={location}>
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/success" component={Success} />
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
