import React from "react";
import Burger from "./Burger/Burger";
import { NavLink } from "react-router-dom";
import decor from "../../../assets/img/decor.png";
import { StyledLi, StyledMenu } from "./BurgerMenu.styled";

const BurgerMenu = (props) => {
  return (
    <div className={props.className}>
      <StyledMenu {...props} onClick={props.toggleBurgerMenu}>
        <ul>
          <StyledLi decorL={true}>
            <img src={decor} alt="" />
          </StyledLi>
          <StyledLi accent={true}>
            <NavLink to="/reg">Войти</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/">Главная</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/offer">Предложение месяца</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/how-it-works">Как это работает</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/how-it-looks">Как это выглядит</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/why">Зачем мне это</NavLink>
          </StyledLi>
          <StyledLi decorS={true}>
            <img src={decor} alt="" />
          </StyledLi>
          <StyledLi contact={true}>test@gmail.com</StyledLi>
          <StyledLi contact={true}>+375(29)1231231</StyledLi>
          <StyledLi contact={true}>+375(29)1231231</StyledLi>
        </ul>
      </StyledMenu>
      <Burger {...props} />
    </div>
  );
};

export default BurgerMenu;
