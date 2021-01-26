import React from "react";
import css from "./Footer.module.css";
import decor from "../../assets/img/decor.png";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={css.footer}>
      <div className={`${css.container} container`}>
        <NavLink to="/" className={css.company}>
          <span className={css.title}>Aromato</span>
          <span className={css.subtitle}>• Minsk •</span>
          <img src={decor} alt="" />
        </NavLink>

        <ul className={css.contacts}>
          <li>test@gmail.com</li>
          <li>+375(29)1231231</li>
          <li>+375(29)1231231</li>
        </ul>

        <div className={css.copyrights}>
          <img src={decor} alt="" />
          <div>© Aromato Minsk 2021 - Smells Good</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
