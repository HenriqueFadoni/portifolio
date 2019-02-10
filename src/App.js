import React, { Component } from 'react';

import Welcome from './containers/Welcome/Welcome';
import About from './containers/About/About';
import Menu from './containers/Menu/Menu';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <Welcome />
        <Menu />
        <About />
        <section className="portifolio"></section>
      </>
    );
  }
}

export default App;
