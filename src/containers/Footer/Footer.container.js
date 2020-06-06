import React from 'react';
import { ReactComponent as FooterImg } from '../../assets/images/Footer.svg';

import './Footer.stylesheet.scss';

const Footer = () => {
  return (
    <div className="footer_container">
      <span className="footer_container--text">Powered by: &nbsp;</span>
      <FooterImg />
    </div>
  );
};

export default Footer;
