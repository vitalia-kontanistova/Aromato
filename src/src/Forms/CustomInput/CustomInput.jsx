import React from "react";
import css from "./CustomInput.module.css";
import { useField } from "formik";

const CustomInput = (props) => {
  const [field, meta] = useField(props);

  const res = (
    <>
      <input className={css.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : null}
    </>
  );

  // debugger;

  return res;
};

export default CustomInput;
