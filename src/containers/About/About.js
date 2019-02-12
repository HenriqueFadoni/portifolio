import React from 'react';

import image from '../../styles/assets/images/backgr-about.jpg';

const About = () => {
    return (
        <>
            <section id="about" className="section-about">
                <h1 className='about__headline'>ABOUT</h1>
                <div className='about__headline_line'></div>
                <div className='row'>
                    <div className='col-1-of-2 about'>
                        <img className="section-about__image" src={image} />
                    </div>
                    <div className='col-1-of-2 about'>
                        <h1>Skills</h1>
                        {/* JavaScript, REACT, REDUX, JEST, CSS3, SASS, HTML, C++ */}
                    </div>
                </div>
            </section>
        </>

    );
}

export default About;