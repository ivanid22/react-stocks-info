import { combineReducers } from 'redux';
import applicationStateReducer from './applicationStateReducer';
import filterReducer from './filterReducer';
import stocksReducer from './stocksReducer';

export default combineReducers({
  applicationState: applicationStateReducer,
  filter: filterReducer,
  stocks: stocksReducer,
});
