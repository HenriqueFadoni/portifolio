import React from 'react';

import ProfessionalContact from './ProfessionalContact/ProfessionalContact';
import Header from './Header/Header';
import SocialMedia from './SocialMedia/SocialMedia';
import Address from './Address/Address';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <Header />
            <ProfessionalContact />
            <SocialMedia />
            <Address />
            <h1 className="contact__email">
                <a href="mailto:henriquefadonii@gmail.com">Contact Me By E-Mail</a>
            </h1>
        </section>
    );
}

export default Contact;