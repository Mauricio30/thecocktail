/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
// import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';
import Check from '../../components/CheckFavorite/CheckFavorite.component';
import { getFavourites } from '../../utils/utils';

import './Favourites.stylesheet.scss';

const Favourites = () => {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    if (!favourites) setFavourites(getFavourites);
  }, []);

  const FavouritesContentMobile = ({ id, name, thumb }) => (
    <div className="favourites_container--item">
      <Check id={id} className="favourites_container--icon" />
      <img
        className="favourites_container--img"
        alt="item"
        src={thumb}
        width={140}
        height={110}
      />
      <h2 className="favourites_container--title-img">{name}</h2>
      <span className="favourites_container--tex-img">Ingredientes</span>
    </div>
  );

  const FavouritesContentDesktop = ({ id, name, thumb }) => (
    <div className="favourites_container--item-desktop">
      <Check id={id} className="favourites_container--icon-desktop" />
      <img
        className="favourites_container--img"
        alt="item"
        src={thumb}
        width={169}
        height={133}
      />
      <h2 className="favourites_container--title-img">{name}</h2>
      <span className="favourites_container--tex-img">Ingredientes</span>
    </div>
  );

  return (
    favourites && (
      <div className="favourites_container">
        <SectionMobile title="Favourites" action={() => {}} />
        <Breakpoint sm down>
          <div className="favourites_container--content">
            {favourites.map(item => {
              return FavouritesContentMobile(item);
            })}
          </div>
        </Breakpoint>
        <Breakpoint md up>
          <div className="favourites_container--content">
            {favourites.map(item => {
              return FavouritesContentDesktop(item);
            })}
          </div>
        </Breakpoint>
      </div>
    )
  );
};

export default Favourites;
