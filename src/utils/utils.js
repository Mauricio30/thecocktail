import { pathRootAplication } from '../environment/environment';

export const formatUrl = url => `${pathRootAplication}${url}`;

export const likeState = drinkId => {
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  return favourites.includes(drinkId);
};

export const changeLikeState = (drinkId, drinkLike) => {
  let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  const includes = favourites.includes(drinkId);

  if (drinkLike) {
    if (!includes) favourites.push(drinkId);
  } else favourites = favourites.filter(fav => fav !== drinkId);

  localStorage.setItem('favourites', JSON.stringify(favourites));
};

export const clone = arr => {
  return JSON.parse(JSON.stringify(arr));
};

export const gola = 'hola';
