import React from 'react';
import PropTypes from 'prop-types';
import * as FIcon from 'react-feather';

const Icon = props => {
  const IconMap = {
    filter: <FIcon.Filter size={props.size} />,
    search: <FIcon.Search size={props.size} />,
    left: <FIcon.ArrowLeft size={props.size} />
  };
  console.log(IconMap, props.iconName);
  return IconMap[props.iconName] || IconMap.x;
};

Icon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.number
};

Icon.defaultProps = {
  iconName: 'x',
  size: 24
};

export default Icon;
