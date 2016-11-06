import { DECREMENT, INCREMENT } from './constants.js';

export const decrement = () => ({
  type: DECREMENT
});

export const increment = () => ({
  type: INCREMENT
});
