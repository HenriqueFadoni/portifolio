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
            },
            {
                name: 'Burger Builder',
                class: 'burgerbuilder',
                description: 'React.JS + Redux + Firebase'
            },
            {
                name: 'WishList',
                class: 'wishlist',
                description: 'React.JS + Redux',
            },
            {
                name: 'Forkify Website',
                class: 'forkifywebsite',
                description: 'JS ES6 + Webpack',
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
                <section id="portifolio" className="portifolio">
                    <Modal
                        item={this.state.portifolioItem}
                        items={this.state.portifolio}
                        show={this.state.isModalActive} 
                        backdropClick={this.modalHandler}/>
                    <div>
                        <h1 className='portifolio__headline'>Portifolio</h1>
                        <div className='portifolio__headline_line'></div>
                    </div>
                    <div className='grid-row-portifolio'>
                        {displayPortifolio}
                    </div>
                </section>
            </>
        );
    }
}

export default Portifolio;