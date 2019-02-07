import React, { Component } from 'react';
import './styles/main.scss';

class App extends Component {
  state = {
    isMenuActv: false
  }

  menuHandler = () => {
    const toggleHandler = !this.state.isMenuActv;
    this.setState({isMenuActv: toggleHandler});
  }

  render() {
    let menu = "hamburger hamburger--vortex";
    if (this.state.isMenuActv) {
      menu = "hamburger hamburger--vortex is-active";
    }
    return (
      <>
        <section className="section-welcome">
          <button 
            class={menu}
            type="button"
            onClick={this.menuHandler}>
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>

          <div className="welcome-text-container">
            <div className="welcome-text-1">
              <h1>Hello,</h1>
            </div>
            <div className="welcome-text-2">
              <h3>My name is <span className="name-color">Henrique Fadoni</span>,</h3>
              <h3>I'm a <span className="name-color">Front-End Developer</span></h3>
            </div>
          </div>
        </section>
        <section className="section-about"></section>
      </>
    );
  }
}

export default App;
