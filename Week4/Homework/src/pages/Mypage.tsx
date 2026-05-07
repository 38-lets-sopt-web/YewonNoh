import { useState } from 'react';
import { Input, Button } from '@components/index';
import * as styles from './Mypage.css';
import { validateEmail } from '@utils/validation/mypageValidation';

const DUMMY_USER = {
  loginId: 'assignment',
  part: '웹',
  name: '예원',
  email: 'sopt@sopt.org',
  age: 24,
};

const Mypage = () => {
  const [name, setName] = useState(DUMMY_USER.name);
  const [email, setEmail] = useState(DUMMY_USER.email);
  const [age, setAge] = useState(String(DUMMY_USER.age));
  const [emailError, setEmailError] = useState<string | null>(null);

  const isDisabled =
    !name.trim() || !email.trim() || !age.trim() || !!emailError;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleUpdate = () => {
    try {
      const requestBody = { name, email, age: Number(age) };

      console.log(requestBody);

      alert(`${name}님의 정보 수정에 성공했습니다.`);
    } catch {
      alert(`${DUMMY_USER.name}님의 정보 수정에 실패했습니다.`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>내 정보</h1>

      <section className={styles.profileCard}>
        <div className={styles.profileRow}>
          <span className={styles.label}>아이디</span>
          <span className={styles.value}>{DUMMY_USER.loginId}</span>
        </div>

        <div className={styles.profileRow}>
          <span className={styles.label}>파트</span>
          <span className={styles.value}>{DUMMY_USER.part}</span>
        </div>
      </section>

      <div className={styles.inputGroup}>
        <Input
          label="이름"
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          label="이메일"
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={handleEmailChange}
        />

        <Input
          label="나이"
          type="number"
          placeholder="나이 입력"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>

      {emailError && <p className={styles.errorText}>{emailError}</p>}

      <Button disabled={isDisabled} onClick={handleUpdate}>
        정보 수정
      </Button>
    </div>
  );
};

export default Mypage;
