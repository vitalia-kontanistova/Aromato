import React from "react";
import css from "./Registration.module.css";

import decor from "../../assets/img/decorLarge.png";
import image from "../../assets/img/img.png";
import RegForm from "./RegForm/RegForm";

const Registration = (props) => {
  return (
    <div>
      <div className={css.registration}>
        <div className={css.body}>
          <h1 className={css.title}>Регистрация</h1>
          <img src={decor} alt="" className={css.decor} />
          <RegForm {...props} />
        </div>

        <img src={image} alt="" className={css.img} />
      </div>
    </div>
  );
};

export default Registration;
