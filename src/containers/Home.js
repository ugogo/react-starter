import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment } from '../modules/Counter/actions.js';
import Home from '../components/Home/Home.js';

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
