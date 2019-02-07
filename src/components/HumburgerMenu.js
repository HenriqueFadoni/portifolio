import React from 'react';

const HumburgerMenu = props => {
    return (
        <div className="hamburger-menu-container">
            <button
                className={props.classMenu}
                type="button"
                onClick={props.menuChange}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    );
}

export default HumburgerMenu;