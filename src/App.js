import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, withRouter } from 'react-router-dom';
import posed from 'react-pose';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    const { pathname: path } = this.props.location;
    return (
      <div className="wrapper">
        <div className="background">
          <div className="background__overlay" />
        </div>
        <div className="main-content-wrapper">
          <Navbar path={path} />
        </div>
        <div className="secondary-content-wrapper" />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(hot(module)(App));
