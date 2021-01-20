import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Landing.module.css";

import img from "../../assets/img/perfumes/img_1.png";

import decor from "../../assets/img/decorLarge.png";
import image from "../../assets/img/img.png";
import arrL from "../../assets/img/arrLeft.png";
import arrR from "../../assets/img/arrRight.png";

const Landing = (props) => {
  let monthName = props.currentMonth;
  let firstPerfume = props.firstPerfume;
  let secondPerfume = props.secondPerfume;
  let thirdPerfume = props.thirdPerfume;

  /* let onClickNext = () => {
    props.setNextMonthOffer();
    props.activateAnimation();
    setTimeout(() => {
      props.deactivateAnimation();
    }, 500);
  }; */

  return (
    <div className={css.landing}>
      <div className={`${css.subscription} + " " + ${css.block}`}>
        <div className={css.subscriptionBody}>
          <h1 className={css.title}>Духи по подписке</h1>
          <img src={decor} alt="" />
          <div className={css.subtext}>
            Открывай для себя новые брендовые ароматы каждый месяц. Ежемесячная
            подборка из трех ароматов за <span>20$</span>.
          </div>
          <NavLink to="/reg" className={css.btn}>
            Оформить подписку
          </NavLink>
        </div>
        <img src={image} alt="" className={css.img} />
      </div>

      <div className={`${css.offer} + " " + ${css.block}`}>
        <div className={css.management}>
          <img
            src={arrL}
            alt=""
            onClick={props.onClickPrev}
            className={css.arrrow}
          />
          <span
            className={`${css.subtitle} ${
              props.isAnimationActive ? css.animatedElem : ""
            }`}
          >
            {monthName}
          </span>
          <img
            src={arrR}
            alt=""
            onClick={props.onClickNext}
            className={css.arrrow}
          />
        </div>
        <img className={css.decor} src={decor} alt="" />
        <div className={`${css.slider} + " " + ${css.blockBody}`}>
          <div className={css.perfume}>
            <div
              // className={css.perfumeImg + " " + css.animatedElem}
              className={`${css.perfumeImg} ${
                props.isAnimationActive ? css.animatedElem : ""
              }`}
            >
              <img src={firstPerfume.img} alt="" />
            </div>
            <div
              // className={css.perfumeName + " " + css.animatedElem}
              className={`${css.perfumeName} ${
                props.isAnimationActive ? css.animatedElem : ""
              }`}
            >
              {firstPerfume.name}
            </div>
          </div>
          <div className={css.perfume}>
            <div
              // className={css.perfumeImg + " " + css.animatedElem}
              className={`${css.perfumeImg} ${
                props.isAnimationActive ? css.animatedElem : ""
              }`}
            >
              <img src={secondPerfume.img} alt="" />
            </div>
            <div
              // className={css.perfumeName + " " + css.animatedElem}
              className={`${css.perfumeName} ${
                props.isAnimationActive ? css.animatedElem : ""
              }`}
            >
              {secondPerfume.name}
            </div>
          </div>
          <div className={css.perfume}>
            <div
              // className={css.perfumeImg + " " + css.animatedElem}
              className={`${css.perfumeImg} ${
                props.isAnimationActive ? css.animatedElem : ""
              }`}
            >
              <img src={thirdPerfume.img} alt="" />
            </div>
            <div
              // className={css.perfumeName + " " + css.animatedElem}
              className={`${css.perfumeName} ${
                props.isAnimationActive ? css.animatedElem : ""
              }`}
            >
              {thirdPerfume.name}
            </div>
          </div>
        </div>
      </div>

      <div className={`${css.howItWorks} + " " + ${css.block}`}>
        <div className={css.subtitle}>Как это работает?</div>
        <img className={css.decor} src={decor} alt="" />

        <div className={`${css.steps} + " " + ${css.blockBody}`}>
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
      </div>

      <div className={`${css.howItLooks} + " " + ${css.block}`}>
        <div className={css.subtitle}>Как это выглядит?</div>
        <img className={css.decor} src={decor} alt="" />

        <div className={`${css.description} + " " + ${css.blockBody}`}>
          <img src={image} alt="" className={css.img} />
          <div className={css.descriptionText}>
            <span>Три небольших флакона объемом 10 мл.</span> Этого объема
            достаточно для использования в течении месяца.
          </div>
        </div>
      </div>

      <div className={`${css.why} + " " + ${css.block}`}>
        <div className={css.subtitle}>Зачем мне это??</div>
        <img className={css.decor} src={decor} alt="" />

        <div className={`${css.whyBody}`}>
          <span>Парфюм расскрывается не сразу.</span> Поэтому найти свой аромат
          в магазине не прострая задача. Ежемесячная подборка духов содержит
          различные ароматы из которых Вы обязательно найдете свой. Флакона
          объемом 10 мл. будет достаточно для использования в течении месяца,
          пока не будет доставлен следующий набор. Парфюм который не нашел
          отклика в душе можно подарить друзьям и знакомым. Каждый найдет для
          себя что-то по вкусу.
        </div>
      </div>
    </div>
  );
};

export default Landing;
