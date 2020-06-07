/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import StarRatings from 'react-star-ratings';
import FooterImg from '../../assets/images/Logo.png';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';

import './Recommended.stylesheet.scss';

const Recommended = () => {
  const [value, setValue] = useState(5);
  const PopularDrinksContentMobile = () => (
    <div className="recommended_container--card">
      <img
        className="recommended_container--img"
        alt="item"
        src={FooterImg}
        width={140}
        height={110}
      />
      <div className="recommended_container--card-items">
        <h2 className="recommended_container--title-img">Titulo</h2>
        <span className="recommended_container--tex-img">Ingredientes</span>
        <span className="recommended_container--tex-img">Sabor</span>
        <StarRatings
          rating={value}
          starRatedColor="#FFC400"
          starEmptyColor="#E6E6E6"
          starHoverColor="#FFC400"
          changeRating={setValue}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="1px"
          name="rating"
        />
      </div>
    </div>
  );

  const a = [
    {
      id: '1',
      value: true
    },
    {
      id: '2',
      value: false
    },
    {
      id: '3',
      value: true
    }
  ];
  return (
    <div className="recommended_container">
      <Breakpoint sm down>
        <SectionMobile title="Recommended" action={() => {}} showButton />
        <div className="recommended_container--content">
          {a.map(b => {
            return PopularDrinksContentMobile(b);
          })}
        </div>
      </Breakpoint>
      <Breakpoint sm down />
    </div>
  );
};

export default Recommended;
