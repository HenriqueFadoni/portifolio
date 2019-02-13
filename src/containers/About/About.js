import React from 'react';

import AboutAttributes from '../../components/AboutAttributes/AboutAttributes';
import AboutSkill from '../../components/AboutSkill/AboutSkill';

const About = () => {
    return (
        <>
            <section id="about" className="section-about">
                <h1 className='about__headline'>ABOUT</h1>
                <div className='about__headline_line'></div>
                
                <AboutAttributes />
                <AboutSkill />
            </section>
        </>

    );
}

export default About;