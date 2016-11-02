import React, { PropTypes } from 'react';

const Counter = ({ decrement, increment, total }) =>
  <div className="Counter">
    <p>Total: { total } </p>
    <button onClick={ decrement }>Decrement</button>
    &nbsp;
    <button onClick={ increment }>Increment</button>
  </div>
;

Counter.propTypes = {
  total: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

export default Counter;
