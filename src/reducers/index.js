import { combineReducers } from 'redux';
import alertReducer from './alert';
import breedMenuReducer from './breedmenu';
import catReducer from './cat';
import filterReducer from './filter';
import signUpReducer from './signup';
import logInReducer from './login';
import authReducer from './auth';

export default combineReducers({
  breedState: breedMenuReducer,
  filterState: filterReducer,
  catState: catReducer,
  signUpState: signUpReducer,
  logInState: logInReducer,
  alertState: alertReducer,
  authState: authReducer,
});
