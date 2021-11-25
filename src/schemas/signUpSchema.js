import * as yup from "yup";
import * as messages from "./schemasMessages";

const signUpSchema = yup.object().shape({
  firstName: yup.string().max(100).required(messages.forRequired),

  lastName: yup.string().max(100).required(messages.forRequired),

  displayName: yup.string().max(100).required(messages.forRequired),

  email: yup
    .string()
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      messages.emailValidation
    )
    .required(messages.forRequired),

  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      messages.passwordValidation
    )
    .required(messages.forRequired),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(messages.forRequired),

  joinAs: yup.string().required(messages.forRadioButtons),

  allowOffer: yup.boolean(),
});

export default signUpSchema;
