import {
  APPLICATION_IS_LOADING,
  APPLICATION_IS_NOT_LOADING
} from '../../constants/Application/Application.types';

export const showLoading = () => dispatch =>
  dispatch({ type: APPLICATION_IS_LOADING, payload: {} });

export const hideLoading = () => dispatch =>
  dispatch({ type: APPLICATION_IS_NOT_LOADING, payload: {} });
