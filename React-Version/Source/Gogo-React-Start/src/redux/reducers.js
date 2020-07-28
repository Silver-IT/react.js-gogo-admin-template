import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';

const reducers = combineReducers({
  menu,
  settings,
});

export default reducers;
