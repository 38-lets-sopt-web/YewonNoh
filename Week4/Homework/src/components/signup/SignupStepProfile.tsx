import { Input, Button } from '@components/index';
import * as styles from '@pages/Signup.css';
import { validateProfile } from '@utils/validation/signupValidation';
import { PART_OPTIONS } from '@constants/part';

interface SignupStepProfileProps {
  form: {
    name: string;
    email: string;
    age: string;
    part: string;
  };
  onChange: (key: 'name' | 'email' | 'age' | 'part', value: string) => void;
  onSignup: () => void;
}

const SignupStepProfile = ({
  form,
  onChange,
  onSignup,
}: SignupStepProfileProps) => {
  const errorMessage =
    form.name || form.email || form.age || form.part
      ? validateProfile(form.name, form.email, form.age, form.part)
      : null;

  const isDisabled =
    !form.name.trim() ||
    !form.email.trim() ||
    !form.age.trim() ||
    !form.part.trim() ||
    !!errorMessage;

  return (
    <>
      <div className={styles.inputGroup}>
        <Input
          label="이름"
          type="text"
          placeholder="이름을 입력해 주세요"
          value={form.name}
          onChange={e => onChange('name', e.target.value)}
        />

        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력해 주세요"
          value={form.email}
          onChange={e => onChange('email', e.target.value)}
        />

        <Input
          label="나이"
          type="number"
          placeholder="나이를 입력해 주세요"
          value={form.age}
          onChange={e => onChange('age', e.target.value)}
        />

        <div className={styles.selectWrapper}>
          <label className={styles.selectLabel}>파트</label>

          <select
            className={styles.select}
            value={form.part}
            onChange={e => onChange('part', e.target.value)}
          >
            {PART_OPTIONS.map(part => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </select>
        </div>
      </div>

      {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}

      <Button disabled={isDisabled} onClick={onSignup}>
        회원가입
      </Button>
    </>
  );
};

export default SignupStepProfile;
