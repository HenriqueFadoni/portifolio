import React from 'react';

const ModalContent = props => {
    return (
        <div className="modal__container__content">
            <h1>{props.data.name}</h1>
            <div className="modal__container__content__text">
                <p></p>
            </div>
            <a href="/"> GO TO WEBSITE</a>
            <a href="/">GitHub</a>
        </div>
    );
};

export default ModalContent;