import React, { Component } from 'react';

class Menu extends Component {
    state = {
        isHome: false,
        isAbout: false,
        isPortifolio: false,
        isContact: false,
        shouldNavStick: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        // switch(window.scrollY) {}
        let position = window.scrollY;
        if (position > 880) {
            this.setState({ shouldNavStick: true });
        } else if (position < 880) {
            this.setState({ shouldNavStick: false });
        }

        if (position >= 0 && position < 800) {
            this.setState({isHome: true});
        } else {
            this.setState({isHome: false});
        }

        if (position >= 880 && position < 1600) {
            this.setState({isAbout: true});
        } else {
            this.setState({isAbout: false});
        }

        if (position >= 1600 && position < 2400) {
            this.setState({isPortifolio: true});
        } else {
            this.setState({isPortifolio: false});
        }

        if (position >= 2400 && position < 3200) {
            this.setState({isContact: true});
        } else {
            this.setState({isContact: false});
        }
    }

    render() {
        return (
            <div 
                className = {
                    this.state.shouldNavStick  ? 
                    'navbar__container navbar__container__sticky' : 
                    'navbar__container'}>
                <nav className='navbar__nav'>
                    <ul>
                        <li className={this.state.isHome ? 'active' : ''}><a href='#home'>Home</a></li>
                        <li className={this.state.isAbout ? 'active' : ''}><a href='#about'>About</a></li>
                        <li className={this.state.isPortifolio ? 'active' : ''}><a href='#portifolio'>Portifolio</a></li>
                        <li className={this.state.isContact ? 'active' : ''}><a href='/'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;