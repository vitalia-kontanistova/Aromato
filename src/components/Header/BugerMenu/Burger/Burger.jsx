import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = (props) => {
  return (
    <StyledBurger {...props} onClick={props.toggleBurgerMenu}>
      <div /> <div /> <div />
    </StyledBurger>
  );
};

export default Burger;
