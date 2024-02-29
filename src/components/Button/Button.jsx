import cls from "classnames";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, variant, size, disabled }) => {
  return (
    <button
      className={cls(styles.button, styles[variant], {
        [styles.disabled]: disabled,
        [styles[size]]: size,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};

export default Button;
