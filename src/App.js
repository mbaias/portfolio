import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import PageCounter from './PageCounter';
import About from './components/About/About';

class App extends Component {
  render() {
    const { pathname: path } = this.props.location;
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
          <Route path="/about" component={About} />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(hot(module)(App));
