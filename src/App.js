import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

// Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import PageCounter from './PageCounter';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';

// Posed animation
const RouteContainer = posed.div({
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
  toggleMenu = () => {
    document
      .getElementsByClassName('page-side-content')[0]
      .classList.toggle('shown');
    document
      .getElementsByClassName('background__overlay')[0]
      .classList.toggle('shown');
    // document
    //   .getElementsByClassName('page-side-content')[0]
    //   .classList.toggle('shown');
  };

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

    const pageSideContentClass =
      path === '/'
        ? 'page-side-content page-side-content--main'
        : 'page-side-content';

    return (
      <div className="wrapper">
        <div className="background" />
        <div className={backgroundOverlayClass} />
        <div className={pageSideContentClass}>
          <Header path={path} />
          <Navbar path={path} />
        </div>
        {path !== '/' ? (
          <Link to="/" className="menu-icon">
            <img src="../public/menu.svg" alt="menu" />
          </Link>
        ) : (
          <button
            type="submit"
            // eslint-disable-next-line
            onClick={ this.props.history.goBack}
            className="menu-icon"
          >
            <img src="../public/menu.svg" alt="menu" />
          </button>
        )}
        <main className="page-main-content">
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
            <RouteContainer className="routes-container" key={ID()}>
              <Switch location={location}>
                <Route exact path="/about" component={About} key="about" />
                <Route
                  exact
                  path="/portfolio"
                  component={Portfolio}
                  key="portfolio"
                />
                <Route
                  exact
                  path="/contacts"
                  component={Contacts}
                  key="contacts"
                />
              </Switch>
            </RouteContainer>
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
