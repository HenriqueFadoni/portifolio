import React, { Component } from 'react';

import PortifolioItem from '../../components/PortifolioItem/PortifolioItem';
import myChatExample from '../../styles/assets/images/mychatexample.png';

class Portifolio extends Component {
    state = {
        portifolio: [
            {
                name: 'My Chat Example',
                class: 'mychatexample',
                description: 'React.JS + Chatkit',
                image: myChatExample
            },
            {
                name: 'Burger Builder',
                class: 'burgerbuilder',
                description: 'React.JS + Redux + Firebase',
                image: ''
            },
            {
                name: 'WishList',
                class: 'wishlist',
                description: 'React.JS + Redux',
                image: ''
            },
            {
                name: 'Forkify Website',
                class: 'forkifywebsite',
                description: 'JS ES6 + Webpack',
                image: ''
            }
        ]
    }

    render() {
        const x = this.state.portifolio;
        const displayPortifolio = x.map((items, index) => {
            return (
                <PortifolioItem
                    key={index}
                    classN={items.class} 
                    title={items.name}
                    description={items.description}
                    url={items.image}/>
            );
        });

        return (
            <section id="portifolio" className="portifolio">
                <div>
                    <h1 className='portifolio__headline'>Portifolio</h1>
                </div>
                <div className='grid-row-portifolio'>
                    {displayPortifolio}
                </div>
            </section>
        );
    }
}

export default Portifolio;