import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@components/index';
import * as styles from './Login.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    loginId: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const isDisabled = !form.loginId.trim() || !form.password.trim();

  const handleChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const handleSignup = async () => {
    navigate('/signup');
  };

  const handleLogin = async () => {
    try {
      const requestBody = {
        loginId: form.loginId,
        password: form.password,
      };

      console.log(requestBody);

      alert('로그인 성공');

      navigate('/');
    } catch {
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>SOPT MEMBERS</h1>

        <div className={styles.inputGroup}>
          <Input
            label="아이디"
            type="text"
            placeholder="아이디 입력"
            value={form.loginId}
            onChange={handleChange('loginId')}
          />

          <Input
            label="비밀번호"
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호 입력"
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
        </div>

        <Button disabled={isDisabled} onClick={handleLogin}>
          로그인
        </Button>

        <span className={styles.signup} onClick={handleSignup}>
          회원가입
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
