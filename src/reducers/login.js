import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  LOGIN_DISMISS,
} from '../actions/action-types';

const initialState = {
  content: 'Hello',
  type: 'success',
  show: true,
};

const logInReducer = (state = initialState, action) => {
  if (action.type === FETCH_LOGIN_REQUEST) {
    return {
      content: 'Logging in...',
      type: 'info',
      show: true,
    };
  } if (action.type === FETCH_LOGIN_SUCCESS) {
    return {
      content: 'Logged in successfully.',
      type: 'success',
      show: true,
    };
  } if (action.type === LOGIN_DISMISS) {
    return {
      content: '',
      type: '',
      show: false,
    };
  } if (action.type === FETCH_LOGIN_ERROR) {
    return {
      content: `Login failed: ${action.payload}`,
      type: 'danger',
      show: true,
    };
  }
  return state;
};

export default logInReducer;
