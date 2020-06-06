import { combineReducers } from 'redux';
import ApplicationReducer from './Application/Application.reducer';

export default combineReducers({
  application: ApplicationReducer
});
