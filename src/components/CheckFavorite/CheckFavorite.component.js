/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import IconHeart from '../../assets/icons/heart.svg';
import Icon from '../../assets/icons/heartWhite.svg';
import { changeLikeState, likeState } from '../../utils/utils';

const CheckFavorite = ({ id, className }) => {
  const [check, setValue] = useState(likeState(id));

  useEffect(() => {
    changeLikeState(id, check);
  }, [check, id]);

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
