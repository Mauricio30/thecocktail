import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../../utils/PropTypes';

const Container = ({ className, children, fluid, style }) => (
  <div
    className={classNames(className, fluid ? 'container-fluid' : 'container')}
    style={style}
  >
    {children}
  </div>
);

Container.defaultProps = {
  fluid: false,
  className: '',
  style: {}
};

Container.propTypes = {
  children: PropTypes.children.isRequired,
  className: PropTypes.string,
  style: PropTypes.style,
  fluid: PropTypes.bool
};

export default Container;
