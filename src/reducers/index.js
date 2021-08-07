import { combineReducers } from 'redux';
import alertReducer from './alert';
import signUpReducer from './signup';
import logInReducer from './login';
import authReducer from './auth';
import logOutReducer from './logout';
import subjectSelector from './subjects';
import subjectDisplayReducer from './subjectdisplay';
import appointmentListReducer from './appointmentlist';
import appointmentReducer from './appointment';
import fetchReducer from './rfetch';

export default combineReducers({
  signUpState: signUpReducer,
  logInState: logInReducer,
  alertState: alertReducer,
  authState: authReducer,
  logOutState: logOutReducer,
  subjectsState: subjectSelector,
  subjectDisplayState: subjectDisplayReducer,
  appointmentsState: appointmentListReducer,
  postAppointmentState: appointmentReducer,
  fetchState: fetchReducer,
});
