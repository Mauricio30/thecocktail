import React from 'react';
import { motion } from 'framer-motion';
import { Col } from '../../../components/Grid/Grid.component';
import Input from '../../../components/Input/Input.component';
import '../../Page/Page.stylesheet.scss';

const HeaderDesktop = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
        scale: 0,
        borderRadius: ['30%', '50%', '100%']
      }}
      animate={{
        ease: 'easeInOut',
        opacity: 1,
        scale: 1,
        y: 0,
        borderRadius: ['0', '0', '40px', '40px']
      }}
      transition={{
        duration: 0.25
      }}
      className="page_container--bubble"
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <h1 className="page_container--header-title">
        What we’ll drink tonight?
      </h1>
      <Col sm={12} className="page_container--form-input">
        <Input
          type="text"
          placeholder="Search for a drink"
          iconRight="search"
        />
      </Col>
    </motion.div>
  );
};

export default HeaderDesktop;
