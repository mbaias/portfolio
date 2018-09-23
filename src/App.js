import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, withRouter } from 'react-router-dom';
import posed from 'react-pose';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="background">
          <div className="background__overlay" />
        </div>
        <div className="main-content-wrapper" />
        <div className="secondary-content-wrapper" />
      </div>
    );
  }
}

export default withRouter(hot(module)(App));
