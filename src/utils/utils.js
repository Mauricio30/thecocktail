import { pathRootAplication } from '../environment/environment';

export const formatUrl = url => `${pathRootAplication}${url}`;

export const getArrayFromLS = item => {
  return JSON.parse(localStorage.getItem(item)) || [];
};

export const isInLSItem = (item, id) => {
  const array = getArrayFromLS(item);

  return array.includes(id);
};

export const checkIdInLSItem = (item, id, shoulBe = true) => {
  let array = getArrayFromLS(item);
  const includes = array.includes(id);

  if (shoulBe) {
    if (!includes) array.push(id);
  } else array = array.filter(i => i !== id);

  localStorage.setItem(item, JSON.stringify(array));
};

export const likeState = drinkId => {
  return isInLSItem('favourites', drinkId);
};

export const changeLikeState = (drinkId, drinkLike) => {
  checkIdInLSItem('favourites', drinkId, drinkLike);
};

export const getFavourites = () => {
  return getArrayFromLS('favourites');
};

export const getRecentSearch = () => {
  return getArrayFromLS('recentSearch');
};

export const addRecentSearch = searchText => {
  checkIdInLSItem('recentSearch', searchText);
};

export const clone = arr => {
  return JSON.parse(JSON.stringify(arr));
};

export const gola = 'hola';
