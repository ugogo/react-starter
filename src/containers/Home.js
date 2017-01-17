import { decrement, increment } from "../modules/Counter/actions.js";
import Home from "../components/Home/Home.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counterTotal: state.getIn(["counter", "total"]),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    decrement,
    increment,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
