import {Form, Formik } from "formik";
import React from "react";
import FieldWithValidation from "../../component/FieldWithValidation";
import Header from "../../component/Header";
import RememberMe from "../../component/RememberMe";

import loginSchema from "../../schemas/loginSchema";
import styles from "./login.module.scss";

const initialValues = {
  email: "",
  password: "",
  rememberUser : false
};

const LoginPage = (props) => {
  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <>
      <Header btnLinkTo="/sign_up" btnText="Signup" />
      <section className={styles.login_section}>
        <h1 className={styles.heading}>login to your account</h1>
        <Formik
          onSubmit={submitHandler}
          validationSchema={loginSchema}
          initialValues={initialValues}
        >
          <Form className={styles.login_form}>
            <FieldWithValidation inRow name="email" placeholder='Email' />
            <FieldWithValidation type='password' inRow name="password" placeholder='Password'/>
            <RememberMe name='rememberUser'/>
            <button type="submit" className={styles.login_btn}>
              login
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
};

export default LoginPage;
