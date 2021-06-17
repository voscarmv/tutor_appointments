import {
  AUTH_KEY,
} from '../actions/action-types';

const initialState = {
  key: null,
};

const authReducer = (state = initialState, action) => {
  if (action.type === AUTH_KEY) {
    return {
      key: action.payload.key,
    };
  }
  return state;
};

export default authReducer;
