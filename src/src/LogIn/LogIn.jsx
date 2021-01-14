import React from "react";
import { NavLink } from "react-router-dom";
import css from "./LogIn.module.css";
import decor from "../../assets/img/decorLarge.png";
import image from "../../assets/img/img.png";
import LogInForm from "../Forms/LogInForm/LogInForm";

const LogIn = (props) => {
  return (
    <div>
      <div className={css.logIn}>
        <div className={css.body}>
          <h1 className={css.title}>Вход</h1>
          <img src={decor} alt="" />
          <LogInForm />
          <div className={css.subtext}>
            Нет аккаунта? <NavLink to="/reg">Зарегистрируйтесь</NavLink>
          </div>
          <div className={css.subtext}>
            Забыли пароль? <NavLink to="/reg">Восстановить</NavLink>
          </div>
        </div>

        <img src={image} alt="" className={css.img} />
      </div>
    </div>
  );
};

export default LogIn;
