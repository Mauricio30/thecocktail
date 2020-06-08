/* eslint-disable react/button-has-type */
import React from 'react';
import './header.scss';

const SectionHeaderMobile = ({ title, action, showButton }) => {
  return (
    <div className="popular-drink_container--header">
      <h2>{title}</h2>
      <div className="popular-drink_container--line" />
      {showButton && (
        <button
          className="popular-drink_container--button"
          onClick={() => {
            action();
          }}
        >
          View more
        </button>
      )}
    </div>
  );
};

export default SectionHeaderMobile;
