import React from 'react';

import ProfessionalContact from './ProfessionalContact/ProfessionalContact';
import Header from './Header/Header';
import SocialMedia from './SocialMedia/SocialMedia';
import Address from './Address/Address';
import Email from './Email/Email';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <Header />
            <ProfessionalContact />
            <div className="vertical-bar"></div>
            <SocialMedia />
            <Address />
            <Email />
        </section>
    );
}

export default Contact;