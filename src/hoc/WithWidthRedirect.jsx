import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let withWidthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if (props.clientWidth <= 570) {
      return <Component {...props} />;
    } else {
      return <Redirect to={"/"} />;
    }
  };

  let mapStateToProps = (state) => ({
    clientWidth: state.landingReducer.clientWidth,
  });

  RedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return RedirectComponent;
};

export default withWidthRedirect;
