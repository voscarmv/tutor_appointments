import {
  ALERT_MESSAGE,
} from '../actions/action-types';

const initialState = {
  content: 'Hello',
  type: 'success',
  show: true,
};

const alertReducer = (state = initialState, action) => {
  if (action.type === ALERT_MESSAGE) {
    return {
      content: action.payload.content,
      type: action.payload.type,
      show: action.payload.show,
    };
  }
  return state;
};

export default alertReducer;
