import React, { PropTypes } from "react";

const Counter = ({ decrement, increment, total }) =>
  <div className="Counter">
    <p>Total: { total } </p>
    <button onClick={ decrement }>Decrement</button>
    &nbsp;
    <button onClick={ increment }>Increment</button>
  </div>
;

Counter.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
