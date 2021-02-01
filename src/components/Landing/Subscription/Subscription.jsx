import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Subscription.module.css";

import decor from "../../../assets/img/decorLarge.png";
import image from "../../../assets/img/img.png";

const Subscription = (props) => {
  return (
    <div className={css.subscription}>
      <div className={css.subscriptionBody}>
        <h1 className={css.title}>Духи по подписке</h1>
        <img src={decor} alt="" className={css.decor} />
        <div className={css.subtext}>
          Открывай для себя новые брендовые ароматы каждый месяц. Ежемесячная
          подборка из трех ароматов за <span>20$</span>.
        </div>
      </div>
      <div className={css.img}>
        <img src={image} alt="" />
      </div>
      <NavLink to="/reg" className={css.btn}>
        Оформить подписку
      </NavLink>
    </div>
  );
};

export default Subscription;
