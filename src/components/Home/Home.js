import React, { PropTypes } from "react";
import Counter from "../Counter/Counter.js";

const Home = ({ counterTotal, decrement, increment }) =>
  <div>
    <p className="App-intro">Home</p>
    <Counter
      total={counterTotal}
      decrement={decrement}
      increment={increment}
    />
  </div>
;

Home.propTypes = {
  counterTotal: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Home;
