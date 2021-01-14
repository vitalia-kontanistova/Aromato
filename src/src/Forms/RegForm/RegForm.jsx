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

  const usedEmails = ["test@google.com", "test@yandex.ru"];
  const required = "Поле обязательно для заполнения";

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPass: "",
      }}
      validationSchema={yup.object({
        name: yup.string().min(2, "Выберете имя подлинее").required(required),
        email: yup
          .string()
          .email("Почта введена некорректно")
          .notOneOf(usedEmails, "Введеная почта уже используется")
          .required(required),
        phone: yup
          .string()
          .matches(
            "(+375\\s\\()(25|29|33|44)\\)\\s(\\d{3})\\s(\\d{2})\\s(\\d{2})",
            "Похоже Вы неверно ввели номер телефона"
          )
          .required(required),
        /*password: yup.string().min(6, "Пароль должен быть хотя бы 6 символов").matches("[\\d]{1,}", "Пароль должен содержать хотя бы одну цифру").matches("[A-ZА-Я]{1,}","Пароль должен содержать хотя бы одну заглавную букву").required(required),*/
        password: yup
          .string()
          .min(6, "Пароль должен быть хотя бы 6 символов")
          .required(required),
        confirmPass: yup
          .string()
          .when("password", {
            is: (password) => (password && password.length > 0 ? true : false),
            then: yup
              .string()
              .oneOf([yup.ref("password")], "Пароли должны совпадать"),
          })
          .required(required),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        debugger;
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
        debugger;
      }}
    >
      {(props) => (
        <Form className={css.form} method="POST">
          <CustomInput type="text" name="name" placeholder="Имя" />
          {/* <CustomInput type="email" name="email" placeholder="E-mail" /> */}
          {/*           <MaskedTextInput
            mask={phoneNumberMask}
            type="text"
            name="phone"
            placeholder="Телефон"
          />
          */}
          {/*           <CustomInput type="password" name="password" placeholder="Пароль" />
          <CustomInput
            type="password"
            name="confirmPass"
            placeholder="Повторите пароль"
          />
          */}
          <button type="submit" className={css.btn}>
            Продолжить
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegForm;
