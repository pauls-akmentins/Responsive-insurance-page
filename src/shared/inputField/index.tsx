import classNames from "classnames";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label?: string;
  type?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  invalid?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  id,
  value,
  invalid,
  onChange,
}) => {
  return (
    <div className={styles.inputContainer}>
      {label ? (
        <label
          className={classNames(styles.inputLabel, {
            [styles.labelInvalid]: !!invalid,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
      <input
        className={classNames(styles.inputField, {
          [styles.inputInvalid]: !!invalid,
        })}
        type={type}
        name={id}
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="off"
        data-testid="inputField"
      />
      {!!invalid ? (
        <p data-testid="inputInvalidMessage" className={styles.invalidMessage}>
          {invalid}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
