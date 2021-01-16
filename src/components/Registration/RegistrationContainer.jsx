import React from "react";
import { connect } from "react-redux";
import { setUserIpThunkCreator } from "../../redux/form_reducer";
import Registration from "./Registration";

class RegistrationContainer extends React.Component {
  componentDidMount() {
    this.props.setUserIp();
  }

  render() {
    return (
      <Registration setUserIp={this.setUserIp} userIp={this.props.userIp} />
    );
  }
}

/* ************************** */

let mapStateToProps = (state) => ({
  userIp: state.formReducer.userIp,
  a: "aaaa",
  b: state.formReducer.b,
});

export default connect(mapStateToProps, {
  setUserIp: setUserIpThunkCreator,
})(RegistrationContainer);
