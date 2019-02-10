import React from 'react';

import image from '../../styles/assets/images/backgr-about.jpg';

const About = () => {
    return (
        <>
            <section id="about" className="section-about">
                <h1>About</h1>
                <img className="section-about__image" src={image} />
            </section>
        </>

    );
}

export default About;