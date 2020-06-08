/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import StarRatings from 'react-star-ratings';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';

import './Recommended.stylesheet.scss';
import { clone } from '../../utils/utils';

const QUERY = gql`
  {
    recommendedDrinks {
      id
      score
      name
      thumb
      complements {
        name
      }
      liquors {
        name
      }
    }
  }
`;

const Recommended = () => {
  const { data, error, loading } = useQuery(QUERY);
  const [recommendedDrinks, setRecommendedDrinks] = useState([]);

  useEffect(() => {
    if (!loading || error) {
      setRecommendedDrinks(data.recommendedDrinks);
    }
  }, [loading, data, error]);

  console.log('recommendedDrinks', recommendedDrinks);

  const RecommendedDrinksContentMobile = ({ id, score, name, thumb }) => (
    <div className="recommended_container--card">
      <img
        className="recommended_container--img"
        alt="item"
        src={thumb}
        width={140}
        height={110}
      />
      <div className="recommended_container--card-items">
        <h2 className="recommended_container--title-img">{name}</h2>
        <span className="recommended_container--tex-img">Ingredientes</span>
        <span className="recommended_container--tex-img">Sabor</span>
        <StarRatings
          rating={5}
          starRatedColor="#FFC400"
          starEmptyColor="#E6E6E6"
          starHoverColor="#FFC400"
          changeRating={newScore => {
            const c = clone(recommendedDrinks);
            c.find(b => b.id === id).score = newScore;
            setRecommendedDrinks(c);
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
          {recommendedDrinks.map(item => {
            return RecommendedDrinksContentMobile(item);
          })}
        </div>
      </Breakpoint>
      <Breakpoint sm down />
    </div>
  );
};

export default Recommended;
