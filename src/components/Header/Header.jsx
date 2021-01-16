import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.row}>
          <NavLink to="/" className={css.company}>
            <span className={css.title}>Aromato</span>
            <span className={css.subtitle}>• Minsk •</span>
          </NavLink>
          <NavLink to="/logIn" className={css.logIn}>
            Войти
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
