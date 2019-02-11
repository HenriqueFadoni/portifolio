import React from 'react';

import image from '../../styles/assets/images/backgr-about.jpg';

const About = () => {
    return (
        <>
            <section id="about" className="section-about">
                <h1>About</h1>
                <div className='row'>
                    <div className='col-1-of-2'>
                        <img className="section-about__image" src={image} />
                    </div>
                    <div className='col-1-of-2'>
                        <p className="section-about__description">LALALALALALALALAL</p>
                    </div>
                </div>
            </section>
        </>

    );
}

export default About;