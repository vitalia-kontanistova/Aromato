import React from "react";
import { connect } from "react-redux";
import {
  showFirstPortion,
  showSecondPortion,
  activateAnimation,
} from "../../../redux/landing_reducer";
import HowItWorks from "./HowItWorks";
import withWidthRedirect from "../../../hoc/WithWidthRedirect";
import withWidthResizeHandle from "../../../hoc/WithWidthResizeHandle";
import { compose } from "redux";

class HowItWorksContainer extends React.Component {
  componentDidMount() {
    if (this.props.clientWidth <= 570) {
      this.props.showFirstPortion(true);
      this.props.showSecondPortion(false);
    } else {
      this.props.showFirstPortion(true);
      this.props.showSecondPortion(true);
    }
  }
  // toggleAnimation = () => {
  //   this.props.activateAnimation();
  //   setTimeout(() => {
  //     this.props.deactivateAnimation();
  //   }, 100);
  // };
  onClickNext = () => {
    this.props.showFirstPortion(false);
    this.props.showSecondPortion(true);
    // this.toggleAnimation();
  };
  onClickPrev = () => {
    this.props.showFirstPortion(true);
    this.props.showSecondPortion(false);
    // this.toggleAnimation();
  };

  render() {
    return (
      <HowItWorks
        {...this.props}
        onClickNext={this.onClickNext}
        onClickPrev={this.onClickPrev}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  firstPortion: state.landingReducer.isFirstPortionShown,
  secondPortion: state.landingReducer.isSecondPortionShown,
  clientWidth: state.landingReducer.clientWidth,
});

export default HowItWorksContainer = connect(mapStateToProps, {
  showFirstPortion,
  showSecondPortion,
  activateAnimation,
})(HowItWorksContainer);

export let HowItWorksWithWidthRedirect = compose(
  withWidthRedirect,
  withWidthResizeHandle
)(HowItWorksContainer);
