import React from 'react';
import { IoMdMail, IoLogoLinkedin } from "react-icons/io";

import './contact-about-us.styles.scss';

const ContactDev = () => {
  return (
    <div className='contact-section'>    
      <h4 className="header"> THE DEVELOPER </h4>
      <p className="description">
        My name is Karen Lyons. I have been programming for nearly 20 years, 
        and I enjoy new challenges and giving users a functional, responsive 
        and eye-catching front-end experience! I recently created this site to enhance 
        my React skills. If you like what you see and think I am suitable for 
        your next digital endeavor, or if you would just like to say "hello", 
        feel free to get in touch.
      </p>
      <div className="reference">
          <IoMdMail className="mail-to icon"/><a class="link" href="mailto:kpl0813@gmail.com">kpl0813@gmail.com</a>
      </div>
      <div className="reference bottom">
          <IoLogoLinkedin class='linked-in icon'/><a class="link" href="https://www.linkedin.com/in/karenplyons/" target="blank">linkedin.com/in/karenplyons/</a>
      </div>
      
    </div>
  )
}

export default ContactDev