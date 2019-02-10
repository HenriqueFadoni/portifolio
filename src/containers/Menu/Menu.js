import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className='navbar__container'>
                <nav className='navbar__nav'>
                    <ul>
                        <li><a href='#section-01'>Home</a></li>
                        <li><a href='#section-02'>About</a></li>
                        <li><a href='/'>Portifolio</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;