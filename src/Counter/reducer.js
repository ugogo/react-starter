import { Map } from 'immutable';
import { DECREMENT, INCREMENT } from './constants.js';

const initialState = new Map({
  total: 0
});

function counterReducer(state = initialState, action) {
  const currentTotal = state.get('total');

  switch (action.type) {
    case DECREMENT:
      return state.set('total', currentTotal - 1)

    case INCREMENT:
      return state.set('total', currentTotal + 1)

    default:
      return state;
  }
}

export default counterReducer;
