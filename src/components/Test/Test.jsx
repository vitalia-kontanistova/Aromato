import React from "react";
import css from "./Test.module.css";

const Test = (props) => {
  return (
    <div className={css.out}>
      <div className={css.in1}>1</div>
      <div className={css.in2}>2</div>
      <div className={css.in3}>3</div>
    </div>
  );
};

export default Test;
