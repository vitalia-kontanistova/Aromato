import React from "react";
import css from "./Offer.module.css";

import decor from "../../../assets/img/decorLarge.png";
import arrL from "../../../assets/img/arrLeft.png";
import arrR from "../../../assets/img/arrRight.png";

const Offer = (props) => {
  let monthName = props.currentMonth;
  let firstPerfume = props.firstPerfume;
  let secondPerfume = props.secondPerfume;
  let thirdPerfume = props.thirdPerfume;

  return (
    <div className={css.offer}>
      <div className={css.control}>
        <img src={arrL} alt="" onClick={props.onClickPrev} className={css.arrrow} />
        <span className={`${css.subtitle} ${props.isAnimationActive ? css.animatedElem : ""}`}>{monthName}</span>
        <img src={arrR} alt="" onClick={props.onClickNext} className={css.arrrow} />
      </div>

      <img className={css.decor} src={decor} alt="" />

      <div className={css.slider}>
        <div className={css.perfume}>
          <div className={`${css.perfumeImg} ${props.isAnimationActive ? css.animatedElem : ""}`}><img src={firstPerfume.img} alt="" /></div>
          <div className={`${css.perfumeName} ${props.isAnimationActive ? css.animatedElem : ""}`}>{firstPerfume.name}</div>
        </div>
        <div className={css.perfume}>
          <div className={`${css.perfumeImg} ${props.isAnimationActive ? css.animatedElem : ""}`}><img src={secondPerfume.img} alt="" /></div>
          <div className={`${css.perfumeName} ${props.isAnimationActive ? css.animatedElem : ""}`}>{secondPerfume.name}</div>
        </div>
        <div className={css.perfume}>
          <div className={`${css.perfumeImg} ${props.isAnimationActive ? css.animatedElem : ""}`}><img src={thirdPerfume.img} alt="" /></div>
          <div className={`${css.perfumeName} ${props.isAnimationActive ? css.animatedElem : ""}`}>{thirdPerfume.name}</div>
        </div>
      </div>
      
    </div>
  );
};

export default Offer;
