import React, { Component } from 'react';

import Backdrop from './Backdrop/Backdrop';
import ModalContent from './ModalContent/ModalContent';

class Modal extends Component {
    state = {
        selectedItem: ''
    }

    componentDidUpdate(prevProps) {
        const portifolioItem = prevProps.items.find(element => element.class === this.props.item);
        if (portifolioItem !== this.state.selectedItem) {
            this.setState({ selectedItem: portifolioItem });
        }
    }

    render() {
        let show = (
            <div
                className='modal__container'
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.show ? <ModalContent data={this.state.selectedItem} /> : null}
            </div>
        )

        if (!this.state.selectedItem) {
            show = null;
        }
        return (
            <>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.backdropClick} />
                {show}
            </>
        );
    }
}

export default Modal;