import { Field } from "formik";
import React from "react";
import styles from "./style.module.scss";

const AllowOfferBtn = (props) => {
  const { name } = props;
  return (
    <div className={styles.allowOfferBtn}>
      <Field id="offerInput" name={name} type="checkbox" />
      <label htmlFor='offerInput' className={styles.text}>
        Allow Squadhelp to send marketing/promotional offers from time to time
      </label>
    </div>
  );
};

export default AllowOfferBtn;
