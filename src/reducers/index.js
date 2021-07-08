import { combineReducers } from 'redux';
import alertReducer from './alert';
import breedMenuReducer from './breedmenu';
import catReducer from './cat';
import filterReducer from './filter';
import signUpReducer from './signup';
import logInReducer from './login';
import authReducer from './auth';
import logOutReducer from './logout';
import subjectSelector from './subjects';
import subjectDisplayReducer from './subjectdisplay';
import appointmentListReducer from './appointmentlist';

export default combineReducers({
  breedState: breedMenuReducer,
  filterState: filterReducer,
  catState: catReducer,
  signUpState: signUpReducer,
  logInState: logInReducer,
  alertState: alertReducer,
  authState: authReducer,
  logOutState: logOutReducer,
  subjectsState: subjectSelector,
  subjectDisplayState: subjectDisplayReducer,
  appointmentsState: appointmentListReducer,
});
