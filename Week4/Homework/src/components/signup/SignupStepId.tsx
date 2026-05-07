import { Input, Button } from '@components/index';
import * as styles from '@/pages/Signup.css';
import { validateLoginId } from '@utils/validation/signupValidation';

interface SignupStepIdProps {
  loginId: string;
  onChange: (key: 'loginId', value: string) => void;
  onNext: () => void;
}

const SignupStepId = ({ loginId, onChange, onNext }: SignupStepIdProps) => {
  const errorMessage = loginId ? validateLoginId(loginId) : null;

  const isDisabled = !loginId.trim() || !!errorMessage;

  return (
    <>
      <div className={styles.inputGroup}>
        <Input
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
          value={loginId}
          onChange={e => onChange('loginId', e.target.value)}
        />
      </div>

      {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}

      <Button disabled={isDisabled} onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default SignupStepId;
