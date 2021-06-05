import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
} from '../actions/action-types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const logInReducer = (state = initialState, action) => {
  if (action.type === FETCH_LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  } if (action.type === FETCH_LOGIN_SUCCESS) {
    return {
      loading: false,
      data: action.payload,
      error: '',
    };
  } if (action.type === FETCH_LOGIN_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default logInReducer;
