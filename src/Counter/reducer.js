import { DECREMENT, INCREMENT } from './constants.js';

const initialState = 0;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT:
      return state - 1;

    case INCREMENT:
      return state + 1;

    default:
      return state;
  }
}

export default counterReducer;
