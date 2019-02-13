import React, { Component } from 'react';

import Welcome from './containers/Welcome/Welcome';
import About from './containers/About/About';
import Menu from './containers/Menu/Menu';
import Portifolio from './containers/Portifolio/Portifolio';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <Welcome />
        <Menu />
        <About />
        <Portifolio />
        <section id='contact' className='contact'></section>
      </>
    );
  }
}

export default App;
