import React from 'react';
import "./footer.css";
import linkedin from '../../assets/linkedin.png';
import gmail from '../../assets/gmail.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
      <a href="https://www.linkedin.com/in/alondra-al-ahmar"><img src={linkedin} alt='' className='socialImg'/></a>
      <a href="https://mail.google.com/mail/u/?authuser=alondraalahmar@gmail.com"><img src={gmail} alt='' className='socialImg'/></a>
      </div>
    <span className='footerText'>Copyright &#169; 2023 Alondra Al Ahmar. All rights reserved.</span>
    </footer>
  );
}

export default Footer;