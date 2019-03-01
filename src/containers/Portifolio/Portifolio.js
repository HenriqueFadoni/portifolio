import React, { Component } from 'react';

import Modal from '../../components/PortifolioModal/Modal';
import PortifolioItem from '../../components/PortifolioItem/PortifolioItem';

class Portifolio extends Component {
    state = {
        portifolio: [
            {
                name: 'My Chat Example',
                class: 'mychatexample',
                description: 'React.JS + Chatkit',
                technologies: ['Javascript ES6', 'React', 'ChatKit', 'HTML5/CSS3'],
                urlGitHub:'my-chat-example',
                summary: `My Chat Example is a simple chat application where 
                users can interact with each other in a Global Chat. Users can create 
                and join different Chat rooms.`
            },
            {
                name: 'Burger Builder',
                class: 'burgerbuilder',
                description: 'React.JS + Redux + Firebase',
                technologies: ['Javascript ES6', 'React', 'Redux', 'HTML5/CSS3', 'Firebase', 'Enzyme'],
                urlGitHub:'the-burguer-builder',
                summary: `Burger Builder is an Application that let users build their own burger
                and order it from a fictional store without any delay. The user may Log In or
                Subscribe in order to see its own orders.`
            },
            {
                name: 'WishList',
                class: 'wishlist',
                description: 'React.JS + Redux',
                technologies: ['Javascript ES6', 'React', 'Redux', 'HTML5/CSS3', 'SASS/SCSS', 'Firebase'],
                urlGitHub:'WishList',
                summary: `WishList is a Website where users can register their own wishes online. 
                Nonetheless, the user may register in the platform in order to post/delete wishes.`
            },
            {
                name: 'Forkify Website',
                class: 'forkifywebsite',
                description: 'JS ES6 + Webpack',
                technologies: ['Javascript ES6', 'Webpack', 'Babel', 'External API', 'HTML5/CSS3'],
                urlGitHub: 'Forkify-Website',
                summary: `Forkify is a Web Application where users can search for their favorite food recipe, and favorite them. 
                Additionally, the user can generate a shopping list that is adjustable to the number of people that it might be
                served.`
            }
        ],
        isModalActive: false,
        portifolioItem: ''
    }

    modalHandler = event => {
        const element = event.target.parentNode.parentNode.className.split('-');
        const newModalStatus = ! this.state.isModalActive;
        this.setState({ 
            isModalActive: newModalStatus,
            portifolioItem: element[5]
        });
    };

    render() {
        const x = this.state.portifolio;
        const displayPortifolio = x.map((items, index) => {
            return (
                <PortifolioItem
                    key={index}
                    classN={items.class}
                    title={items.name}
                    description={items.description}
                    clicked={event => this.modalHandler(event)}
                />
            );
        });

        return (
            <>
                <section id='portifolio' className='portifolio'>
                    <Modal
                        item={this.state.portifolioItem}
                        items={this.state.portifolio}
                        show={this.state.isModalActive} 
                        backdropClick={this.modalHandler}/>
                    <div>
                        <h1 className='portifolio__headline'>Portfolio</h1>
                        <div className='portifolio__headline_line'></div>
                    </div>
                    <p className='portifolio__paragraph'>
                        Here you can find some of my Projects! Don't worry, you can access their unique Websites as well as their Git repository. 
                        Make yourself at home!
                    </p>
                    <div className='grid-row-portifolio'>
                        {displayPortifolio}
                    </div>
                </section>
            </>
        );
    }
}

export default Portifolio;