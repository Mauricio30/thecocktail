/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import StarRatings from 'react-star-ratings';
import FooterImg from '../../assets/images/Logo.png';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';

import './Recommended.stylesheet.scss';
import { clone } from '../../utils/utils';

const initialRecommended = [
  {
    id: '1',
    score: 3
  },
  {
    id: '2',
    score: 4
  },
  {
    id: '3',
    score: 3
  }
];

const Recommended = () => {
  const [a, setA] = useState(initialRecommended);

  const RecommendedDrinksContentMobile = item => (
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
          rating={item.score}
          starRatedColor="#FFC400"
          starEmptyColor="#E6E6E6"
          starHoverColor="#FFC400"
          changeRating={newScore => {
            const c = clone(a);
            c.find(b => b.id === item.id).score = newScore;
            setA(c);
          }}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="1px"
          name="rating"
        />
      </div>
    </div>
  );

  return (
    <div className="recommended_container">
      <Breakpoint sm down>
        <SectionMobile title="Recommended" action={() => {}} showButton />
        <div className="recommended_container--content">
          {a.map(b => {
            return RecommendedDrinksContentMobile(b);
          })}
        </div>
      </Breakpoint>
      <Breakpoint sm down />
    </div>
  );
};

export default Recommended;
