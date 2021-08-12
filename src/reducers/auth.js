import {
  AUTH_KEY,
  AUTH_CLEAR,
} from '../actions/action-types';

const initialState = {
  uid: null,
  email: null,
  key: null,
};

const authReducer = (state = initialState, action) => {
  if (action.type === AUTH_KEY) {
    return {
      uid: action.payload.uid,
      email: action.payload.email,
      key: action.payload.key,
    };
  } if (action.type === AUTH_CLEAR) {
    return {
      uid: null,
      email: null,
      key: null,
    };
  }
  return state;
};

export default authReducer;
