/* eslint-disable react/button-has-type */
import React from 'react';
import { Breakpoint } from 'react-socks';
import FooterImg from '../../assets/images/Logo.png';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';
import Check from '../../components/CheckFavorite/CheckFavorite.component';
import './PopularDrinks.stylesheet.scss';

const PopularDrinks = () => {
  const PopularDrinksContentMobile = item => (
    <div className="popular-drink_container--item">
      <Check value={item.value} className="popular-drink_container--icon" />
      <img
        className="popular-drink_container--img"
        alt="item"
        src={FooterImg}
        width={140}
        height={110}
      />
      <h2 className="popular-drink_container--title-img">Titulo</h2>
      <span className="popular-drink_container--tex-img">Ingredientes</span>
    </div>
  );

  const PopularDrinksContentDesktop = item => (
    <div className="popular-drink_container--item-desktop">
      <Check
        value={item.value}
        className="popular-drink_container--icon-desktop"
      />
      <img
        className="popular-drink_container--img"
        alt="item"
        src={FooterImg}
        width={169}
        height={133}
      />
      <h2 className="popular-drink_container--title-img">Titulo</h2>
      <span className="popular-drink_container--tex-img">Ingredientes</span>
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
    <div className="popular-drink_container">
      <SectionMobile title="Popular drinks" action={() => {}} showButton />
      <Breakpoint sm down>
        <div className="popular-drink_container--content">
          {a.map(b => {
            return PopularDrinksContentMobile(b);
          })}
        </div>
      </Breakpoint>
      <Breakpoint md up>
        <div className="popular-drink_container--content">
          {a.map(b => {
            return PopularDrinksContentDesktop(b);
          })}
        </div>
      </Breakpoint>
    </div>
  );
};

export default PopularDrinks;
