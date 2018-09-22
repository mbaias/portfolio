import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello World',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default hot(module)(App);
