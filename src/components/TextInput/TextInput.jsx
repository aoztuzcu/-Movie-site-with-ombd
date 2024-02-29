import styles from "./TextInput.module.scss";
import cls from "classnames";

const TextInput = ({ label, type, value, onChange, size, disabled }) => {
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
      />
    </>
  );
};

TextInput.defaultProps = {
  type: "text",
};
export default TextInput;
