import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './Signup.css';
import {
  SignupStepId,
  SignupStepPassword,
  SignupStepProfile,
} from '@components/index';

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    loginId: '',
    password: '',
    passwordCheck: '',
    name: '',
    email: '',
    age: '',
    part: '웹',
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSignup = () => {
    try {
      const requestBody = {
        loginId: form.loginId,
        password: form.password,
        name: form.name,
        email: form.email,
        age: Number(form.age),
        part: form.part,
      };

      console.log(requestBody);

      alert(`${form.name}님의 회원가입이 완료되었습니다.`);

      navigate('/login');
    } catch {
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>회원가입</h1>

        {step === 1 && (
          <SignupStepId
            loginId={form.loginId}
            onChange={handleChange}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <SignupStepPassword
            password={form.password}
            passwordCheck={form.passwordCheck}
            onChange={handleChange}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <SignupStepProfile
            form={{
              name: form.name,
              email: form.email,
              age: form.age,
              part: form.part,
            }}
            onChange={handleChange}
            onSignup={handleSignup}
          />
        )}

        <div className={styles.loginWrapper}>
          <p className={styles.loginText}>이미 계정이 있나요?</p>
          <p className={styles.loginLink} onClick={() => navigate('/login')}>
            로그인
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
