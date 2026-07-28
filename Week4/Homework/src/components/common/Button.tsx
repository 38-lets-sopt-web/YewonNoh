import * as styles from './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
