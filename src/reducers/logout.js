import {
  FETCH_LOGOUT_REQUEST,
  FETCH_LOGOUT_SUCCESS,
  FETCH_LOGOUT_ERROR,
  DISMISS,
} from '../actions/action-types';

const initialState = {
  content: '',
  type: '',
  show: false,
};

const logOutReducer = (state = initialState, action) => {
  if (action.type === FETCH_LOGOUT_REQUEST) {
    return {
      content: 'Logging out...',
      type: 'info',
      show: true,
    };
  } if (action.type === FETCH_LOGOUT_SUCCESS) {
    return {
      content: 'Logged out successfully.',
      type: 'success',
      show: true,
    };
  } if (action.type === DISMISS) {
    return {
      content: '',
      type: '',
      show: false,
    };
  } if (action.type === FETCH_LOGOUT_ERROR) {
    return {
      content: `Logout failed: ${action.payload}`,
      type: 'danger',
      show: true,
    };
  }
  return state;
};

export default logOutReducer;
