import {
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_ERROR,
} from '../actions/action-types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const signUpReducer = (state = initialState, action) => {
  if (action.type === FETCH_SIGNUP_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  } if (action.type === FETCH_SIGNUP_SUCCESS) {
    return {
      loading: false,
      data: action.payload,
      error: '',
    };
  } if (action.type === FETCH_SIGNUP_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default signUpReducer;
