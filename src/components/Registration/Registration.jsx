import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Registration.module.css";

import decor from "../../assets/img/decorLarge.png";
import image from "../../assets/img/img.png";
import RegForm from "../Forms/RegForm/RegForm";

const Registration = (props) => {
  return (
    <div>
      <div className={css.registration}>
        <div className={css.body}>
          <h1 className={css.title}>Регистрация</h1>
          <img src={decor} alt="" />
          <RegForm {...props} />
          <div className={css.subtext}>
            Уже есть аккаунт? <NavLink to="/logIn">Войдите</NavLink>
          </div>
        </div>

        <img src={image} alt="" className={css.img} />
      </div>
    </div>
  );
};

export default Registration;
