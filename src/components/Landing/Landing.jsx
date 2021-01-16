import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Landing.module.css";

import decor from "../../assets/img/decorLarge.png";
import image from "../../assets/img/img.png";
import img1 from "../../assets/img/perfumes/img_1.png";
import img2 from "../../assets/img/perfumes/img_2.png";
import img3 from "../../assets/img/perfumes/img_3.png";
import arrL from "../../assets/img/arrLeft.png";
import arrR from "../../assets/img/arrRight.png";

class Landing extends React.Component {
  state = {
    perfumes: [
      {
        title: "Набор февраля",
        first: { name: "first name февраля", img: img1 },
        second: { name: "second name февраля", img: img1 },
        third: { name: "third name февраля", img: img1 },
      },
      {
        title: "Набор марта",
        first: { name: "first name марта", img: img2 },
        second: { name: "second name марта", img: img2 },
        third: { name: "third name марта", img: img2 },
      },
      {
        title: "Набор апреля",
        first: { name: "first name апреля", img: img3 },
        second: { name: "second name апреля", img: img3 },
        third: { name: "third name апреля", img: img3 },
      },
    ],
  };

  getNexMonthOffer = () => {
    let perfumes = this.state.perfumes;
    perfumes.push(perfumes.shift());
    this.setState(perfumes);
  };

  getPrefMonthOffer = () => {
    let perfumes = this.state.perfumes;
    perfumes.unshift(perfumes.pop());
    this.setState(perfumes);
  };

  monthName = this.state.perfumes[0].title;

  render = () => {
    return (
      <div className={css.landing}>
        <div className={`${css.subscription} + " " + ${css.block}`}>
          <div className={css.subscriptionBody}>
            <h1 className={css.title}>Духи по подписке</h1>
            <img src={decor} alt="" />
            <div className={css.subtext}>
              Открывай для себя новые брендовые ароматы каждый месяц.
              Ежемесячная подборка из трех ароматов за <span>20$</span>.
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
              onClick={this.getPrefMonthOffer}
              className={css.arrrow}
            />
            <span className={css.subtitle}>{this.state.perfumes[0].title}</span>
            <img
              src={arrR}
              alt=""
              onClick={this.getNexMonthOffer}
              className={css.arrrow}
            />
          </div>
          <img className={css.decor} src={decor} alt="" />
          <div className={`${css.slider} + " " + ${css.blockBody}`}>
            <div className={css.perfume}>
              <div className={css.perfumeImg}>
                <img src={this.state.perfumes[0].first.img} alt="" />
              </div>
              <div className={css.perfumeName}>
                {this.state.perfumes[0].first.name}
              </div>
            </div>
            <div className={css.perfume}>
              <div className={css.perfumeImg}>
                <img src={this.state.perfumes[0].second.img} alt="" />
              </div>
              <div className={css.perfumeName}>
                {this.state.perfumes[0].second.name}
              </div>
            </div>
            <div className={css.perfume}>
              <div className={css.perfumeImg}>
                <img src={this.state.perfumes[0].third.img} alt="" />
              </div>
              <div className={css.perfumeName}>
                {this.state.perfumes[0].third.name}
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
                <span>Накопительная скидка</span>для подписчиков которые надолго
                с нами. С каждым месяцем ваша скидка растет, достигая 25%.
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
            <span>Парфюм расскрывается не сразу.</span> Поэтому найти свой
            аромат в магазине не прострая задача. Ежемесячная подборка духов
            содержит различные ароматы из которых Вы обязательно найдете свой.
            Флакона объемом 10 мл. будет достаточно для использования в течении
            месяца, пока не будет доставлен следующий набор. Парфюм который не
            нашел отклика в душе можно подарить друзьям и знакомым. Каждый
            найдет для себя что-то по вкусу.
          </div>
        </div>
      </div>
    );
  };
}

export default Landing;
