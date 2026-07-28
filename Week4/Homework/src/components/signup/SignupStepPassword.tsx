import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Input, Button } from '@components/index';
import * as styles from '@pages/Signup.css';
import { validatePassword } from '@utils/validation/signupValidation';

interface SignupStepPasswordProps {
  password: string;
  passwordCheck: string;
  onChange: (key: 'password' | 'passwordCheck', value: string) => void;
  onNext: () => void;
}

const SignupStepPassword = ({
  password,
  passwordCheck,
  onChange,
  onNext,
}: SignupStepPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const errorMessage =
    password || passwordCheck
      ? validatePassword(password, passwordCheck)
      : null;

  const isDisabled =
    !password.trim() || !passwordCheck.trim() || !!errorMessage;

  return (
    <>
      <div className={styles.inputGroup}>
        <Input
          label="비밀번호"
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={e => onChange('password', e.target.value)}
          rightElement={
            showPassword ? (
              <IoMdEyeOff
                size={18}
                color="#B8BEC6"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <IoMdEye
                size={18}
                color="#B8BEC6"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setShowPassword(true)}
              />
            )
          }
        />

        <Input
          label="비밀번호 확인"
          type={showPasswordCheck ? 'text' : 'password'}
          placeholder="비밀번호를 다시 입력해 주세요"
          value={passwordCheck}
          onChange={e => onChange('passwordCheck', e.target.value)}
          rightElement={
            showPasswordCheck ? (
              <IoMdEyeOff
                size={18}
                color="#B8BEC6"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setShowPasswordCheck(false)}
              />
            ) : (
              <IoMdEye
                size={18}
                color="#B8BEC6"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setShowPasswordCheck(true)}
              />
            )
          }
        />
      </div>

      {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}

      <Button disabled={isDisabled} onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default SignupStepPassword;
