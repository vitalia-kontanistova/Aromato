import React from "react";
import { connect } from "react-redux";
import {
  setNextMonthOffer,
  setPrevMonthOffer,
  activateAnimation,
  deactivateAnimation,
} from "../../../redux/landing_reducer";
import Offer from "./Offer";
import withWidthRedirect from "../../../hoc/WithWidthRedirect";
import withWidthResizeHandle from "../../../hoc/WithWidthResizeHandle";
import { compose } from "redux";

class OfferContainer extends React.Component {
  toggleAnimation = () => {
    this.props.activateAnimation();
    setTimeout(() => {
      this.props.deactivateAnimation();
    }, 100);
  };
  onClickNext = () => {
    this.props.setNextMonthOffer();
    this.toggleAnimation();
  };
  onClickPrev = () => {
    this.props.setPrevMonthOffer();
    this.toggleAnimation();
  };

  render() {
    return (
      <Offer
        {...this.props}
        onClickNext={this.onClickNext}
        onClickPrev={this.onClickPrev}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  currentMonth: state.landingReducer.currentMonth,
  firstPerfume: state.landingReducer.firstPerfume,
  secondPerfume: state.landingReducer.secondPerfume,
  thirdPerfume: state.landingReducer.thirdPerfume,
  isAnimationActive: state.landingReducer.isAnimationActive,
});

export default OfferContainer = connect(mapStateToProps, {
  setNextMonthOffer,
  setPrevMonthOffer,
  activateAnimation,
  deactivateAnimation,
})(OfferContainer);

export let OfferWithWidthRedirect = compose(
  withWidthRedirect,
  withWidthResizeHandle
)(OfferContainer);
