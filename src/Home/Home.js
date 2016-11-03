import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../Counter/Counter.js';
import { decrement, increment } from '../Counter/actions.js';

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
  increment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  counterTotal: state.getIn(['counter', 'total'])
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
