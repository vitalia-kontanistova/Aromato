import React from "react";
import { connect } from "react-redux";
import { setClientWidth } from "../redux/landing_reducer";

let withWidthResizeHandle = (Component) => {
  class WidthResizeHandleComponent extends React.Component {
    componentDidMount() {
      this.props.setClientWidth();
      window.addEventListener("resize", this.handleWindowResize);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowResize);
    }
    handleWindowResize = () => {
      this.props.setClientWidth();
    };

    render() {
      return <Component {...this.props} />;
    }
  }

  let mapStateToProps = (state) => ({});

  WidthResizeHandleComponent = connect(mapStateToProps, { setClientWidth })(
    WidthResizeHandleComponent
  );

  return WidthResizeHandleComponent;
};

export default withWidthResizeHandle;
