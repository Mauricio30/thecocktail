import {
  APPLICATION_IS_LOADING,
  APPLICATION_IS_NOT_LOADING,
  APPLICATION_SET_SEARCH_TEXT,
  APPLICATION_SET_TEMP_SEARCH_TEXT
} from '../../constants/Application/Application.types';

export const showLoading = () => dispatch =>
  dispatch({ type: APPLICATION_IS_LOADING, payload: {} });

export const hideLoading = () => dispatch =>
  dispatch({ type: APPLICATION_IS_NOT_LOADING, payload: {} });

export const setTempSearchText = tempSearchText => ({
  type: APPLICATION_SET_TEMP_SEARCH_TEXT,
  payload: tempSearchText
});

export const setSearchText = searchText => ({
  type: APPLICATION_SET_SEARCH_TEXT,
  payload: searchText
});
