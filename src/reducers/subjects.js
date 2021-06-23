import {
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_ERROR,
  DISMISS_SUBJECT,
} from '../actions/action-types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const subjectsReducer = (state = initialState, action) => {
  if (action.type === FETCH_SUBJECTS_REQUEST) {
    return {
      loading: true,
      data: [],
      error: '',
    };
  } if (action.type === FETCH_SUBJECTS_SUCCESS) {
    return {
      loading: false,
      data: action.payload,
      error: '',
    };
  } if (action.type === FETCH_SUBJECTS_ERROR) {
    return {
      loading: false,
      data: [],
      error: action.payload,
    };
  } if (action.type === DISMISS_SUBJECT) {
    return {
      loading: false,
      data: [],
      error: '',
    };
  }
  return state;
};

export default subjectsReducer;
