import React from "react";
import css from "./HowItLooks.module.css";

import decor from "../../../assets/img/decorLarge.png";
import image from "../../../assets/img/img.png";

const HowItLooks = (props) => {
  return (
    <div className={css.howItLooks}>
      <div className={css.subtitleBlock}>
        <div className={css.subtitle}>Как это выглядит?</div>
        <img className={css.decor} src={decor} alt="" />
      </div>
      <div className={css.img}>
        <img src={image} alt="" />
      </div>

      <div className={css.description}>
        <div className={css.text}>
          <span className={css.text}>Три небольших флакона объемом 10мл.</span>
          Этого объема достаточно для использования в течении месяца.
        </div>
      </div>
    </div>
  );
};

export default HowItLooks;
