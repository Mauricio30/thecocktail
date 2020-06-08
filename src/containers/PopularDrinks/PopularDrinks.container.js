/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';
import Check from '../../components/CheckFavorite/CheckFavorite.component';
import './PopularDrinks.stylesheet.scss';

const QUERY = gql`
  {
    popularDrinks {
      id
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

const PopularDrinks = () => {
  const { data, error, loading } = useQuery(QUERY);
  const [popularDrinks, setPopularDrinks] = useState([]);

  useEffect(() => {
    if (!loading || error) {
      setPopularDrinks(data.popularDrinks);
    }
  }, [loading, data, error]);

  console.log('popularDrinks', popularDrinks);

  const PopularDrinksContentMobile = ({ id, name, thumb }) => (
    <div className="popular-drink_container--item">
      <Check id={id} className="popular-drink_container--icon" />
      <img
        className="popular-drink_container--img"
        alt="item"
        src={thumb}
        width={140}
        height={110}
      />
      <h2 className="popular-drink_container--title-img">{name}</h2>
      <span className="popular-drink_container--tex-img">Ingredientes</span>
    </div>
  );

  const PopularDrinksContentDesktop = ({ id, name, thumb }) => (
    <div className="popular-drink_container--item-desktop">
      <Check id={id} className="popular-drink_container--icon-desktop" />
      <img
        className="popular-drink_container--img"
        alt="item"
        src={thumb}
        width={169}
        height={133}
      />
      <h2 className="popular-drink_container--title-img">{name}</h2>
      <span className="popular-drink_container--tex-img">Ingredientes</span>
    </div>
  );

  return (
    <div className="popular-drink_container">
      <SectionMobile title="Popular drinks" action={() => {}} showButton />
      <Breakpoint sm down>
        <div className="popular-drink_container--content">
          {popularDrinks.map(item => {
            return PopularDrinksContentMobile(item);
          })}
        </div>
      </Breakpoint>
      <Breakpoint md up>
        <div className="popular-drink_container--content">
          {popularDrinks.map(item => {
            return PopularDrinksContentDesktop(item);
          })}
        </div>
      </Breakpoint>
    </div>
  );
};

export default PopularDrinks;
