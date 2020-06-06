import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from '../../utils/PropTypes';

const RouteAnimation = ({
  children,
  transition,
  inVariant,
  outVariant,
  className
}) => {
  const pageVariants = {
    in: {
      opacity: 1,
      ...inVariant
    },
    out: {
      opacity: 0,
      ...outVariant
    }
  };

  const pageTransition = {
    ...transition
  };

  return (
    <motion.section
      className={className}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.section>
  );
};

RouteAnimation.propTypes = {
  children: PropTypes.children.isRequired,
  transition: PropTypes.objectOf(PropTypes.any),
  inVariant: PropTypes.objectOf(PropTypes.any),
  outVariant: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string
};

RouteAnimation.defaultProps = {
  transition: {},
  inVariant: {},
  outVariant: {},
  className: ''
};

export default RouteAnimation;
