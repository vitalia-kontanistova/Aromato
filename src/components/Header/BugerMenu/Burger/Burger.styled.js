import styled from "styled-components";
import { colors } from "../../../../global";

export const StyledBurger = styled.button`
  height: 26px;
  width: fit-content;
  background: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 5;

  div {
    width: 40px;
    height: 2px;
    background: ${colors.white};
    transition: all 0.3s ease-out;
    transform-origin: 12% 50%;

    :first-child {
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
