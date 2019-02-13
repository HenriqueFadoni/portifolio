import React from 'react';

import image from '../../styles/assets/images/backgr-about.jpg';

const AboutSkill = () => (
    <div className='grid-row-content'>
        <div className='grid-1-of-2 about'>
            <img className="section-about__image" src={image} />
        </div>
        <div className='grid-1-of-2 about'>
            <h1>Skills</h1>
            <h3>REACT</h3>
            <h3>REDUX</h3>
            <h3>SASS</h3>
            <h3>JEST</h3>
            <h3>HTML</h3>
            <h3>CSS3</h3>
            <h3>Firebase</h3> 
            {/* can be nested later */}

            <h1 className='about__text'>Let's Make Something <span>Awesome</span>!</h1>
            <h2>
                I'm a freelance Front-End Developer in Brazil.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                I would love to create your Mobile or Web Application.
            </h2>
        </div>
    </div>
);

export default AboutSkill;