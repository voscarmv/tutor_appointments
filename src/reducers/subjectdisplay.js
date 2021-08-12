import { UPDATE_SUBJECT } from '../actions/action-types';

const initialState = {
  name: '',
  tutor: '',
  description: '',
  tutorpic: '',
};

const subjectDisplayReducer = (state = initialState, action) => {
  if (action.type === UPDATE_SUBJECT) {
    return action.payload;
  }
  return state;
};

export default subjectDisplayReducer;
