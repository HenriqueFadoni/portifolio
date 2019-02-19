import React, { Component } from 'react';

import Welcome from './containers/Welcome/Welcome';
import About from './containers/About/About';
import Menu from './containers/Menu/Menu';
import Portifolio from './containers/Portifolio/Portifolio';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <Welcome />
        <Menu />
        <About />
        <Portifolio />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
