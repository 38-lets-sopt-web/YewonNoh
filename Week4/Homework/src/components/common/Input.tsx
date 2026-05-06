import * as styles from './Input.css';

interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  rightElement?: React.ReactNode;
}

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  rightElement,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />

        {rightElement && (
          <div className={styles.rightElement}>{rightElement}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
