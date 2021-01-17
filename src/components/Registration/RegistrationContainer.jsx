import React from "react";
import { connect } from "react-redux";
import { setUserMetaDataThunkCreator } from "../../redux/form_reducer";
import Registration from "./Registration";

class RegistrationContainer extends React.Component {
  componentDidMount() {
    this.props.setUserMeta();
  }

  render() {
    return (
      <Registration
        userIp={this.props.userIp}
        userOs={this.props.userOs}
        userBr={this.props.userBr}
      />
    );
  }
}

/* ************************** */

let mapStateToProps = (state) => ({
  userIp: state.formReducer.userIp,
  userOs: state.formReducer.userOs,
  userBr: state.formReducer.userBrowser,
});

export default connect(mapStateToProps, {
  setUserMeta: setUserMetaDataThunkCreator,

})(RegistrationContainer);
