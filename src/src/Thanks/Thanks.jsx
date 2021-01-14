import React from "react";
import css from "./Thanks.module.css";

import decor from "../../assets/img/decorLarge.png";
import image from "../../assets/img/img.png";

const Thanks = (props) => {
  return (
    <div className={css.thanks}>
      <div className={css.body}>
        <h1 className={css.title}>Внимание</h1>
        <img src={decor} alt="" />
        <div className={css.subtext}>
          Спасибо за проявленый интерес к нашему предложению. В данный момент
          проект запущен в тестовом режиме и полноценно он начнет работать в
          феврале. Мы сообщим Вам о старте продаж по электронной почте или смс.
          <div className={css.subtext}>
            С наилучшими пожеланиями команда AROMATO.
          </div>
        </div>
      </div>
      <img src={image} alt="" className={css.img} />
    </div>
  );
};

export default Thanks;
