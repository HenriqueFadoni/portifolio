import React, { Component } from 'react';

import Backdrop from './Backdrop/Backdrop';
import ModalContent from './ModalContent/ModalContent';

class Modal extends Component {

    render() {
        return (
            <>
                <Backdrop show={this.props.show} />
                <div
                    className='modal__container'
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <ModalContent />
                </div>
            </>
        );
    }
}

export default Modal;