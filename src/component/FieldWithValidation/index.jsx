import { ErrorMessage, Field, useField } from "formik";
import React, { useState } from "react";
import ErrMessage from "../ErrMessage";
import styles from "./style.module.scss";
import cx from "classnames";

const FieldWithValidation = (props) => {
  const { name, placeholder,inRow ,type} = props;
  const [,meta] = useField(props);

  const [isError, setIsError] = useState(false);

  const wrapperClasses = cx({
    [styles.inputWrapper] : !inRow,
    [styles.inputWrapperLong] : inRow
  })

  const fieldClasses = cx(styles.input, {
    [styles.errStyle]: isError,
    [styles.correct] : !meta.error && meta.touched  
  });
  return (
    <div className={wrapperClasses}>
      <Field type={type} name={name} placeholder={placeholder} className={fieldClasses} />
      <ErrorMessage
        name={name}
        render={(msg) => <ErrMessage setIsError={setIsError} message={msg} />}
      />
    </div>
  );
};

export default FieldWithValidation;
