import React, { Component } from 'react';

import Welcome from './containers/Welcome/Welcome';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <Welcome />
        <section className="section-about"></section>
      </>
    );
  }
}

export default App;
