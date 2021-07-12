import {
  POST_APPOINTMENT_REQUEST,
  POST_APPOINTMENT_SUCCESS,
  POST_APPOINTMENT_ERROR,
} from '../actions/action-types';

const initialState = {
  content: '',
  type: '',
  show: false,
};

const appointmentReducer = (state = initialState, action) => {
  if (action.type === POST_APPOINTMENT_REQUEST) {
    return {
      content: 'Loading appointments...',
      type: 'info',
      show: true,
    };
  } if (action.type === POST_APPOINTMENT_SUCCESS) {
    return {
      content: 'Appointments loaded.',
      type: 'success',
      show: true,
    };
  } if (action.type === POST_APPOINTMENT_ERROR) {
    return {
      content: `Loading appointments failed: ${action.payload}`,
      type: 'danger',
      show: true,
    };
  }
  return state;
};

export default appointmentReducer;
