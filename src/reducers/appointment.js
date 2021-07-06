import {
  POST_APPOINTMENT_REQUEST,
  POST_APPOINTMENT_SUCCESS,
  POST_APPOINTMENT_ERROR,
  DISMISS,
} from '../actions/action-types';

const initialState = {
  content: '',
  type: '',
  show: false,
};

const appointmentReducer = (state = initialState, action) => {
  if (action.type === POST_APPOINTMENT_REQUEST) {
    return {
      content: 'Signing up...',
      type: 'info',
      show: true,
    };
  } if (action.type === POST_APPOINTMENT_SUCCESS) {
    return {
      content: 'Signed up successfully.',
      type: 'success',
      show: true,
    };
  } if (action.type === DISMISS) {
    return {
      content: '',
      type: '',
      show: false,
    };
  } if (action.type === POST_APPOINTMENT_ERROR) {
    return {
      content: `Signup failed: ${action.payload}`,
      type: 'danger',
      show: true,
    };
  }
  return state;
};

export default appointmentReducer;
