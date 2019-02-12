import React from 'react';

import Text from './AboutAttributesText/AboutAttributesText';

const AboutAttributes = () => (
    <div className='grid-row'>
        <div className='grid-1-of-3 about__icon'><ion-icon name="jet"></ion-icon></div>
        <div className='grid-1-of-3 about__icon'><ion-icon name="pulse"></ion-icon></div>
        <div className='grid-1-of-3 about__icon'><ion-icon name="tablet-portrait"></ion-icon></div>
        <Text />
    </div>
);

export default AboutAttributes;