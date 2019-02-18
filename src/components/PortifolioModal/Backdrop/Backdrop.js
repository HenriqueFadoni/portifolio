import React from 'react';

const Backdrop = props => (
    props.show ? 
        <div className='modal__backdrop' onClick={props.clicked}>
            <ion-icon name="close"></ion-icon>
        </div> 
        : null
);

export default Backdrop;