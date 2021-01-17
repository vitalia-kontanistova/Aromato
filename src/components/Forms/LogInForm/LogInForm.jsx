import React from "react";
import css from "./LogInForm.module.css";
import * as yup from "yup";
import { Form, Formik } from "formik";
import CustomInput from "../CustomInput/CustomInput";

const LogInForm = (props) => {
  debugger;
  const errors = {
    required: "Поле обязательно для заполнения",
    email: "Почта введена некорректно",
    pass: "Пароль должен быть хотя бы 6 символов",
  };

  return (
    <Formik
      {...props}
      initialValues={{ email: "", password: "" }}
      validationSchema={yup.object({
        email: yup.string().email(errors.email).required(errors.required),
        password: yup.string().min(6, errors.pass).required(errors.required),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
          props.history.push("/thanks");
        }, 500);
      }}
    >
      {(props) => (
        <Form className={css.form}>
          <CustomInput type="email" name="email" placeholder="E-mail" />
          <CustomInput type="password" name="password" placeholder="Пароль" />
          <button type="submit" className={css.btn}>
            Продолжить
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LogInForm;
