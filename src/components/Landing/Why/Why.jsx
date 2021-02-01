import React from "react";
import css from "./Why.module.css";
import decor from "../../../assets/img/decorLarge.png";
import bg from "../../../assets/img/img.png";

const Why = (props) => {
  return (
    <div className={css.why}>
      <div className={css.subtitle}>Зачем мне это?</div>
      <img className={css.decor} src={decor} alt="" />
      <div className={css.text}>
        <span>Парфюм расскрывается не сразу.</span> Поэтому найти свой аромат в
        магазине не прострая задача.
        <span>
          Ежемесячная подборка духов содержит различные ароматы из которых Вы
          обязательно найдете свой. Флакона объемом 10 мл. будет достаточно для
          использования в течении месяца, пока не будет доставлен следующий
          набор. Парфюм который не нашел отклика в душе можно подарить друзьям и
          знакомым. Каждый найдет для себя что-то по вкусу.
        </span>
      </div>
      <img src={bg} alt="" className={css.bg} />
    </div>
  );
};

export default Why;
