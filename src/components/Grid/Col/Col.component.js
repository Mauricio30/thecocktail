import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../../utils/PropTypes';

const DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

const Col = ({ className, children, style, ...props }) => {
  const spans = [];
  const classes = [];

  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';

    let span;
    let offset;
    let order;

    if (propValue != null && typeof propValue === 'object') {
      ({ span, offset, order } = propValue);
    } else {
      span = propValue;
    }

    if (span !== null) spans.push(`col${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });

  if (!spans.length) spans.push('col');

  return (
    <div className={classNames(className, ...spans, ...classes)} style={style}>
      {children}
    </div>
  );
};

const colSize = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.oneOf(['auto'])
]);

const column = PropTypes.oneOfType([
  colSize,
  PropTypes.shape({
    span: colSize,
    order: PropTypes.stringOrNumber,
    offset: PropTypes.stringOrNumber
  })
]);

Col.defaultProps = {
  className: '',
  style: {},
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

Col.propTypes = {
  /**
   * The number of columns to span on sxtra small devices (<576px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  xs: column,

  /**
   * The number of columns to span on small devices (≥576px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  sm: column,

  /**
   * The number of columns to span on medium devices (≥768px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  md: column,

  /**
   * The number of columns to span on large devices (≥992px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  lg: column,

  /**
   * The number of columns to span on extra large devices (≥1200px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  xl: column,
  children: PropTypes.oneOfType([PropTypes.children, PropTypes.bool])
    .isRequired,
  className: PropTypes.string,
  style: PropTypes.style
};

export default Col;
