import React, { Component } from 'react';

import HumburgerMenu from '../../components/HumburgerMenu/HumburgerMenu';
import WelcomeText from '../../components/WelcomeText/WelcomeText';
import WelcomeIcons from '../../components/WelcomeIcons/WelcomeIcons';
import WelcomeArrow from '../../components/WelcomeArrow/WelcomeArrow';

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
            menu += " is-active";
        }

        return (
            <section id="home" className="section-welcome">
                <HumburgerMenu
                    classMenu={menu}
                    menuChange={this.menuHandler} />
                <WelcomeText/>
                <WelcomeIcons/>
                <WelcomeArrow/>
            </section>
        );
    }
}

export default Welcome;