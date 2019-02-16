import React from 'react';

const Backdrop = props => (
    props.show ? <div className='modal__backdrop'></div> : null
);

export default Backdrop;