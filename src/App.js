import React, { Component } from 'react';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <section className="section-welcome">
          <h1>Hello,</h1>
          <h3>{`My name is Henrique Fadoni,\nI'm a Front-End Developer`}</h3>
        </section>
        <section className="section-about"></section>
      </>
    );
  }
}

export default App;
