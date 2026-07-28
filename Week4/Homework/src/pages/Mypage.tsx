import { useEffect, useState } from 'react';
import { Input, Button } from '@components/index';
import * as styles from './Mypage.css';
import { validateEmail } from '@utils/validation/mypageValidation';
import { getUser, updateUser } from '@/services/member';

const Mypage = () => {
  const [loginId, setLoginId] = useState('');
  const [part, setPart] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem('userId');

        if (!userId) {
          return;
        }

        const response = await getUser(Number(userId));
        const user = response.data;

        setLoginId(user.loginId);
        setPart(user.part);
        setName(user.name);
        setEmail(user.email);
        setAge(String(user.age));
      } catch {
        alert('유저 정보를 불러오는데 실패했습니다.');
      }
    };

    fetchUser();
  }, []);

  const isDisabled =
    !name.trim() || !email.trim() || !age.trim() || !!emailError;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleUpdate = async () => {
    try {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        return;
      }

      await updateUser(Number(userId), {
        name,
        email,
        age: Number(age),
      });

      alert(`${name}님의 정보 수정에 성공했습니다.`);
    } catch {
      alert(`${name}님의 정보 수정에 실패했습니다.`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>내 정보</h1>

      <section className={styles.profileCard}>
        <div className={styles.profileRow}>
          <span className={styles.label}>아이디</span>
          <span className={styles.value}>{loginId}</span>
        </div>

        <div className={styles.profileRow}>
          <span className={styles.label}>파트</span>
          <span className={styles.value}>{part}</span>
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
