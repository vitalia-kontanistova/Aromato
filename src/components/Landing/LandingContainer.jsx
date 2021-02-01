import React from "react";
import { connect } from "react-redux";
import Landing from "./Landing";
import { compose } from "redux";
import withWidthResizeHandle from "../../hoc/WithWidthResizeHandle";

class LandingContainer extends React.Component {
  render() {
    return <Landing {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  clientWidth: state.landingReducer.clientWidth,
});

export default compose(
  connect(mapStateToProps),
  withWidthResizeHandle
)(LandingContainer);
