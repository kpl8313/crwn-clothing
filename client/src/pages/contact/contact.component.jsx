import React from 'react';
import './contact.styles.scss';
import AboutUs from '../../components/contact-us/about-us.component';
import ContactDev from '../../components/contact-us/contact-dev.component';

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <h3 className="contact-heading">
        Don't be shy, Get in touch!
      </h3>
      <AboutUs />
      <ContactDev />
    </div>
  );
}

export default ContactPage;