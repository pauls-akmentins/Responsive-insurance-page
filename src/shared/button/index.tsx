import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  applyRightMargin?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  applyRightMargin,
}) => {
  return (
    <button
      className={classNames(styles.btn, styles[`btn-${variant}`], {
        [styles.applyRightMargin]: applyRightMargin,
      })}
      onClick={onClick}
      type={type}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
