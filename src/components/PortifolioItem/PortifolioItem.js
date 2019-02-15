import React from 'react';

const PortifolioItem = props => {
    return (
        <>
            <div className={`grid-row-portifolio__1-of-4 item-${props.classN}`}>
                <div className='portifolio__info'>
                    <h2>{props.title}</h2>
                    <h3>{props.description}</h3>
                    <button className='btn-portifolio'>LEARN MORE</button>
                </div>
            </div>
        </>
    );
}

export default PortifolioItem;