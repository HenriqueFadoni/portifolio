import React, { Component } from 'react';

import Welcome from './containers/Welcome/Welcome';
import About from './containers/About/About';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <Welcome />
        <About />
      </>
    );
  }
}

export default App;
