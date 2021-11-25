import React from "react";
import { Field } from "formik";

import styles from "./style.module.scss";

const RememberMe = (props) => {
  const { name } = props;
  return (
    <div className={styles.wrapper}>
      <label>
        <Field name={name} type="checkbox" />
        Remember me
      </label>
    </div>
  );
};

export default RememberMe;
