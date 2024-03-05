import { forwardRef } from "react";
import styles from "./TextInput.module.scss";
import cls from "classnames";

const TextInput = forwardRef(
  ({ label, type, value, onChange, size, disabled }, ref) => {
    return (
      <>
        {label && <label>{label}</label>}
        <input
          className={cls(styles.input, {
            [styles[size]]: size,
          })}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
        />
      </>
    );
  }
);

TextInput.defaultProps = {
  type: "text",
};
export default TextInput;
