import React from "react";
import { connect } from "react-redux";
import {
  sendUserDataThunkCreator,
  sendUserMetaDataThunkCreator,
  setUserMetaDataThunkCreator,
} from "../../redux/user_reducer";
import Registration from "./Registration";

class RegistrationContainer extends React.Component {
  componentDidMount() {
    this.props.setUserMeta();
  }
  render() {
    return <Registration {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  userIp: state.userReducer.userIp,
  userOs: state.userReducer.userOs,
  userBr: state.userReducer.userBrowser,
});

export default connect(mapStateToProps, {
  setUserMeta: setUserMetaDataThunkCreator,
  sendUserData: sendUserDataThunkCreator,
  sendUserMeta: sendUserMetaDataThunkCreator,
})(RegistrationContainer);
