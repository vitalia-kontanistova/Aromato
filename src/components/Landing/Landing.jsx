import React from "react";
import css from "./Landing.module.css";

import Subscription from "./Subscription/Subscription";
import Why from "./Why/Why";
import HowItLooks from "./HowItLooks/HowItLooks";
import OfferContainer from "./Offer/OfferContainer";
import HowItWorksContainer from "./HowItWorks/HowItWorksContainer";

const Landing = (props) => {
  if (props.clientWidth <= 570) {
    return (
      <div className={css.landing}>
        <Subscription {...props} />
      </div>
    );
  } else {
    return (
      <div className={css.landing}>
        <Subscription {...props} />
        <OfferContainer {...props} />
        <HowItWorksContainer {...props} />
        <HowItLooks {...props} />
        <Why {...props} />
      </div>
    );
  }
};

export default Landing;
