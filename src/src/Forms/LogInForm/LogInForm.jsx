import React from "react";
import css from "./LogInForm.module.css";
import * as yup from "yup";
import { Form, Formik } from "formik";
import CustomInput from "../CustomInput/CustomInput";

const LogInForm = () => {
  const REQUARED = "Поле обязательно для заполнения";

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={yup.object({
        email: yup
          .string()
          .email("Почта введена некорректно")
          .required(REQUARED),
        password: yup
          .string()
          .min(6, "Пароль был длинее 5 символов")
          .required(REQUARED),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
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
