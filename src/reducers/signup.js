import {
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_ERROR,
  DISMISS,
} from '../actions/action-types';

const initialState = {
  content: '',
  type: '',
  show: false,
};

const signUpReducer = (state = initialState, action) => {
  if (action.type === FETCH_SIGNUP_REQUEST) {
    return {
      content: 'Signing up...',
      type: 'info',
      show: true,
    };
  } if (action.type === FETCH_SIGNUP_SUCCESS) {
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
  } if (action.type === FETCH_SIGNUP_ERROR) {
    return {
      content: `Signup failed: ${action.payload}`,
      type: 'danger',
      show: true,
    };
  }
  return state;
};

export default signUpReducer;