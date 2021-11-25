import React from "react";
import Header from "../../component/Header";
import styles from "./style.module.scss";
import { Formik, Form } from "formik";
import signUpSchema from "./../../schemas/signUpSchema";
import JoinAsButtons from "../../component/JoinAsButtons";
import FieldWithValidation from "../../component/FieldWithValidation";
import AllowOfferBtn from "../../component/AllowOfferBtn";

const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  joinAs: "",
  allowOffer: false,
};

const RegisterPage = (props) => {
  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <>
      <Header btnLinkTo="/login" btnText="Login" />
      <section className={styles.signup_section}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>create an account</h1>
          <p className={styles.caption}>
            We always keep your name and email address private.
          </p>
        </div>

        <Formik
          validationSchema={signUpSchema}
          initialValues={initialValues}
          onSubmit={submitHandler}
        >
          <Form className={styles.form}>
            <div className={styles.row}>
              <FieldWithValidation name="firstName" placeholder="First name" />
              <FieldWithValidation name="lastName" placeholder="Last name" />
            </div>

            <div className={styles.row}>
              <FieldWithValidation
                name="displayName"
                placeholder="Display name"
              />
              <FieldWithValidation name="email" placeholder="Email address" />
            </div>

            <div className={styles.row}>
              <FieldWithValidation
                type="password"
                name="password"
                placeholder="Password"
              />
              <FieldWithValidation
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
            </div>

            <JoinAsButtons name="joinAs" />
            <AllowOfferBtn name="allowOffer" />
            <button className={styles.createAccountBtn} type="submit">
              Create account
            </button>
          </Form>
        </Formik>
        <p>
          By clicking this button, you agree to our{" "}
          <a
            className={styles.termOfServiceLink}
            href="https://www.squadhelp.com/Terms&Conditions"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service.
          </a>
        </p>
      </section>
    </>
  );
};

export default RegisterPage;
