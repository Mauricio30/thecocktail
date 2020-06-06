import {
  APPLICATION_IS_LOADING,
  APPLICATION_IS_NOT_LOADING
} from '../../constants/Application/Application.types';

const initialState = {
  // isLoading: true
  isLoading: false
};

const ApplicationReducer = (state = initialState, { type, payload } = {}) => {
  if (type === APPLICATION_IS_LOADING)
    return { ...state, isLoading: true, ...payload };
  if (type === APPLICATION_IS_NOT_LOADING)
    return { ...state, isLoading: false, ...payload };
  return state;
};

export default ApplicationReducer;
