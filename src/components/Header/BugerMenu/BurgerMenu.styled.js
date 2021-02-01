import styled from "styled-components";
import { colors } from "../../../global";

export const StyledMenu = styled.nav`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: ${colors.green};
  z-index: 15;
  padding: 80px 15px 15px 15px;

  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLi = styled.li`
  font-size: 18px;
  line-height: 25px;
  margin: 5px 0;
  color: ${colors.white};
  font-weight: ${(props) => (props.contact ? "300" : "400")};
  font-size: ${(props) => (props.contact ? "16px" : "18px")};
  line-height: ${(props) => (props.contact ? "19px" : "25px")};
  width: ${(props) => (props.decorL ? "150px" : "fit-content")};
  width: ${(props) => (props.decorS ? "100px" : "fit-content")};

  a,
  a:visited {
    color: ${(props) => (props.accent ? colors.red : colors.white)};
  }
  img {
    width: 100%;
    display: block;
  }
`;
