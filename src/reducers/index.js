import { combineReducers } from 'redux';
import alertReducer from './alert';
import breedMenuReducer from './breedmenu';
import catReducer from './cat';
import filterReducer from './filter';

export default combineReducers({
  breedState: breedMenuReducer,
  filterState: filterReducer,
  catState: catReducer,
  alertState: alertReducer,
});
