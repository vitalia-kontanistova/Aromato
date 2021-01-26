import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import BurgerMenuContainer from "./BugerMenu/BurgerMenuContainer";

const Header = (props) => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.row}>
          <NavLink to="/" className={css.company}>
            <span className={css.title}>Aromato</span>
            <span className={css.subtitle}>• Minsk •</span>
          </NavLink>
          <NavLink to="/reg" className={css.logIn}>
            Войти
          </NavLink>
          <BurgerMenuContainer {...props} className={css.burgerMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
