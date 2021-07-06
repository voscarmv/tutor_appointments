import {
  FETCH_APPOINTMENT_REQUEST,
  FETCH_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_ERROR,
} from '../actions/action-types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const appointmentListReducer = (state = initialState, action) => {
  if (action.type === FETCH_APPOINTMENT_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  } if (action.type === FETCH_APPOINTMENT_SUCCESS) {
    return {
      loading: false,
      data: action.payload,
      error: '',
    };
  } if (action.type === FETCH_APPOINTMENT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default appointmentListReducer;
