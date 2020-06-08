import {
  APPLICATION_IS_LOADING,
  APPLICATION_IS_NOT_LOADING,
  APPLICATION_SET_SEARCH_TEXT,
  APPLICATION_SET_TEMP_SEARCH_TEXT
} from '../../constants/Application/Application.types';

const initialState = {
  isLoading: false,
  header: {
    searchText: '',
    tempSearchText: ''
  }
};

const ApplicationReducer = (state = initialState, { type, payload } = {}) => {
  if (type === APPLICATION_IS_LOADING)
    return { ...state, isLoading: true, ...payload };
  if (type === APPLICATION_IS_NOT_LOADING)
    return { ...state, isLoading: false, ...payload };
  if (type === APPLICATION_SET_TEMP_SEARCH_TEXT)
    return { ...state, header: { ...state.header, tempSearchText: payload } };
  if (type === APPLICATION_SET_SEARCH_TEXT)
    return { ...state, header: { ...state.header, searchText: payload } };
  return state;
};

export default ApplicationReducer;
