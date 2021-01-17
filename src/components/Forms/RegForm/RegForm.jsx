import React from "react";
import css from "./RegForm.module.css";
import * as yup from "yup";
import { Form, Formik } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import MaskedTextInput from "../MaskedTextInput/MaskedTextInput";

const RegForm = (props) => {
  const phoneNumberMask = [
    "+",
    "3",
    "7",
    "5",
    " ",
    "(",
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
  ];
  const phoneRegExp = /(\+375\s\()(25|29|33|44)\)\s(\d{3})\s(\d{2})\s(\d{2})/;
  const usedEmails = ["test@google.com", "test@yandex.ru"];
  const errors = {
    required: "Поле обязательно для заполнения",
    name: "Выберете имя подлинее",
    email: "Почта введена некорректно",
    usedEmail: "Введеная почта уже используется",
    phone: "Похоже Вы неверно ввели номер телефона",
    pass: "Пароль должен быть хотя бы 6 символов",
    // passNum: "Пароль должен содержать хотя бы одну цифру",
    // passUpper: "Пароль должен содержать хотя бы одну заглавную букву",
    confirmPass: "Пароли должны совпадать",
  };

  return (
    <>
      <Formik
        {...props}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPass: "",
        }}
        validationSchema={yup.object({
          name: yup.string().min(2, errors.name).required(errors.required),
          email: yup
            .string()
            .email(errors.email)
            .notOneOf(usedEmails, errors.usedEmail)
            .required(errors.required),
          phone: yup
            .string()
            .matches(phoneRegExp, errors.phone)
            .required(errors.required),
          /*password: yup.string().min(6, errors.pass).matches("[\\d]{1,}", errors.passNum).matches("[A-ZА-Я]{1,}",errors.passUpper).required(errors.required),*/
          password: yup.string().min(6, errors.pass).required(errors.required),
          confirmPass: yup
            .string()
            .when("password", {
              is: (password) =>
                password && password.length > 0 ? true : false,
              then: yup
                .string()
                .oneOf([yup.ref("password")], errors.confirmPass),
            })
            .required(errors.required),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            props.sendUserData(values.name, values.email, values.phone);
            props.sendUserMeta(props.userOs, props.userBr, props.userIp);
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => {
          return (
            <Form className={css.form} method="POST">
              <CustomInput type="text" name="name" placeholder="Имя" />
              <CustomInput type="email" name="email" placeholder="E-mail" />
              <MaskedTextInput
                mask={phoneNumberMask}
                type="text"
                name="phone"
                placeholder="Телефон"
              />
              <CustomInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <CustomInput
                type="password"
                name="confirmPass"
                placeholder="Повторите пароль"
              />
              <button type="submit" className={css.btn}>
                Продолжить
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegForm;
