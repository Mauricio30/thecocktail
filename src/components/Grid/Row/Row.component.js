import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../../utils/PropTypes';

const Row = ({ className, children, noGutters, style }) => (
  <div
    className={classNames(className, 'row', noGutters && 'no-gutters')}
    style={style}
  >
    {children}
  </div>
);

Row.defaultProps = {
  noGutters: false,
  className: '',
  style: {}
};

Row.propTypes = {
  children: PropTypes.children.isRequired,
  className: PropTypes.string,
  style: PropTypes.style,
  noGutters: PropTypes.bool
};

export default Row;
