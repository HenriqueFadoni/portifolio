import React, { Component } from 'react';
import HumburgerMenu from '../components/HumburgerMenu';

class Welcome extends Component {
    state = {
        isMenuActv: false
    }

    menuHandler = () => {
        const toggleHandler = !this.state.isMenuActv;
        this.setState({ isMenuActv: toggleHandler });
    }

    render() {
        let menu = "hamburger hamburger--vortex";

        if (this.state.isMenuActv) {
            menu = "hamburger hamburger--vortex is-active";
        }

        return (
            <section className="section-welcome">
                <HumburgerMenu
                    classMenu={menu}
                    menuChange={this.menuHandler} />

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
        );
    }
}

export default Welcome;