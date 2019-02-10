import React, { Component } from 'react';

class Menu extends Component {
    state = {
        shouldNavStick: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 880) {
            this.setState({ shouldNavStick: true });
        } else if (window.scrollY < 880) {
            this.setState({ shouldNavStick: false });
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
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#portifolio'>Portifolio</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;