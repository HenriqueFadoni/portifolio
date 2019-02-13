import React, { Component } from 'react';

class Portifolio extends Component {
    render() {
        return (
            <section id="portifolio" className="portifolio">
                <div>
                    <h1 className='portifolio__headline'>Portifolio</h1>
                </div>
                <div className='grid-row-portifolio'>
                    <div className='grid-row-portifolio__1-of-4'></div>
                    <div className='grid-row-portifolio__1-of-4'></div>
                    <div className='grid-row-portifolio__1-of-4'></div>
                    <div className='grid-row-portifolio__1-of-4'></div>
                </div>
            </section>
        );
    }
}

export default Portifolio;