import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@components/index';
import * as styles from './Signup.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { validateSignupForm } from '@utils/validation/signupValidation';

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    loginId: '',
    password: '',
    passwordCheck: '',
    name: '',
    email: '',
    age: '',
    part: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const handleChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const isDisabled = Object.values(form).some(value => !value.trim());

  const handleSignup = async () => {
    try {
      const errorMessage = validateSignupForm(form);
      if (errorMessage) {
        alert(errorMessage);
        return;
      }

      const requestBody = {
        loginId: form.loginId,
        password: form.password,
        name: form.name,
        email: form.email,
        age: Number(form.age),
        part: form.part,
      };

      console.log(requestBody);

      alert('회원가입이 완료되었습니다.');

      navigate('/login');
    } catch {
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>회원가입</h1>

        <div className={styles.inputGroup}>
          <Input
            label="아이디"
            type="text"
            placeholder="아이디를 입력해주세요."
            value={form.loginId}
            onChange={handleChange('loginId')}
          />

          <Input
            label="비밀번호"
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요."
            value={form.password}
            onChange={handleChange('password')}
            rightElement={
              showPassword ? (
                <IoMdEyeOff
                  size={18}
                  color="#B8BEC6"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IoMdEye
                  size={18}
                  color="#B8BEC6"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPassword(true)}
                />
              )
            }
          />

          <Input
            label="비밀번호 확인"
            type={showPasswordCheck ? 'text' : 'password'}
            placeholder="비밀번호를 한 번 더 입력해주세요."
            value={form.passwordCheck}
            onChange={handleChange('passwordCheck')}
            rightElement={
              showPasswordCheck ? (
                <IoMdEyeOff
                  size={18}
                  color="#B8BEC6"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPasswordCheck(false)}
                />
              ) : (
                <IoMdEye
                  size={18}
                  color="#B8BEC6"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPasswordCheck(true)}
                />
              )
            }
          />

          <Input
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요."
            value={form.name}
            onChange={handleChange('name')}
          />

          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요."
            value={form.email}
            onChange={handleChange('email')}
          />

          <Input
            label="나이"
            type="number"
            placeholder="나이를 입력해주세요."
            value={form.age}
            onChange={handleChange('age')}
          />

          <Input
            label="파트"
            type="text"
            placeholder="파트명을 입력해주세요."
            value={form.part}
            onChange={handleChange('part')}
          />
        </div>

        <Button disabled={isDisabled} onClick={handleSignup}>
          회원가입
        </Button>

        <div className={styles.loginWrapper}>
          <p className={styles.loginText}>이미 계정이 있나요?</p>
          <p className={styles.loginLink} onClick={() => navigate('/login')}>
            로그인으로 돌아가기
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
