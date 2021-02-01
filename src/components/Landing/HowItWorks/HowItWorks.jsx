import React from "react";
import css from "./HowItWorks.module.css";

import decor from "../../../assets/img/decorLarge.png";
import bg from "../../../assets/img/img.png";
import arrD from "../../../assets/img/arrDown.png";
import arrU from "../../../assets/img/arrUp.png";

const HowItWorks = (props) => {
  return (
    <div className={css.howItWorks}>
      <div className={css.subtitle}>Как это работает?</div>
      <img className={css.decor} src={decor} alt="" />

      <div
        className={`${css.portion} ${!props.firstPortion ? css.hidden : ""}`}
      >
        <div className={css.step}>
          <div className={css.stepNum}>1</div>
          <div className={css.stepText}>
            <span>Доверьтесь</span>ежемесячной подборке состоящей из трех
            брендовых ароматов
          </div>
        </div>
        <div className={css.step}>
          <div className={css.stepNum}>2</div>
          <div className={css.stepText}>
            <span>Активируйте подписку</span>оплатив с помощью карты или
            платежного сервиса.
          </div>
        </div>
        <div className={css.step}>
          <div className={css.stepNum}>3</div>
          <div className={css.stepText}>
            <span>Получайте свой заказ</span>в середине каждого месяца, с
            помощью бесплатной курьерской доставки.
          </div>
        </div>
        <img
          src={arrD}
          alt=""
          onClick={props.onClickNext}
          className={`${css.arrrow} ${
            props.clientWidth > 570 ? css.hidden : ""
          }`}
        />
      </div>

      <div
        className={`${css.portion} ${!props.secondPortion ? css.hidden : ""}`}
      >
        <img
          src={arrU}
          alt=""
          onClick={props.onClickPrev}
          className={`${css.arrrow} ${
            props.clientWidth > 570 ? css.hidden : ""
          }`}
        />
        <div className={css.step}>
          <div className={css.stepNum}>4</div>
          <div className={css.stepText}>
            <span>Знакомьтесь</span>с ароматами сами, и делитесь с друзьями.
          </div>
        </div>
        <div className={css.step}>
          <div className={css.stepNum}>5</div>
          <div className={css.stepText}>
            <span>Отменяйте</span>подписку в любой удобный момент. Вы всегда
            сможете активировать её снова.
          </div>
        </div>
        <div className={css.step}>
          <div className={css.stepNum}>6</div>
          <div className={css.stepText}>
            <span>Накопительная скидка</span>для подписчиков которые надолго с
            нами. С каждым месяцем ваша скидка растет, достигая 25%.
          </div>
        </div>
      </div>
      <img src={bg} alt="" className={css.bg} />
    </div>
  );
};

export default HowItWorks;
