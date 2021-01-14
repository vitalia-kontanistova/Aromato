import React from "react";
import css from "./MaskedTextInput.module.css";
import { useField } from "formik";
import MaskedInput from "react-text-mask";

const MaskedTextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <MaskedInput
        className={css.input}
        mask={props.mask}
        {...field}
        {...props}
      />
      {/*  mask={props.mask} ????? */}
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default MaskedTextInput;
