/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import IconHeart from '../../assets/icons/heart.svg';
import Icon from '../../assets/icons/heartWhite.svg';

const CheckFavorite = ({ value, className }) => {
  const [check, setValue] = useState(value);
  return (
    <i className={className}>
      <img
        alt="item"
        src={check ? IconHeart : Icon}
        onClick={() => setValue(!check)}
      />
    </i>
  );
};

export default CheckFavorite;
