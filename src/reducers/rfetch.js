import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DISMISS,
} from '../actions/action-types';

const initialState = {
  content: '',
  type: '',
  show: false,
  data: [],
};

const fetchReducer = (state = initialState, action) => {
  if (action.type === FETCH_REQUEST) {
    return {
      content: action.message.content,
      type: action.message.type,
      show: action.message.show,
      data: [],
    };
  } if (action.type === FETCH_SUCCESS) {
    return {
      content: action.message.content,
      type: action.message.type,
      show: action.message.show,
      data: action.payload,
    };
  } if (action.type === FETCH_ERROR) {
    return {
      content: action.message.content,
      type: action.message.type,
      show: action.message.show,
      data: action.error,
    };
  } if (action.type === DISMISS) {
    return {
      content: '',
      type: '',
      show: false,
      data: [],
    };
  }
  return state;
};

export default fetchReducer;
