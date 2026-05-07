import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './Header.css';
import { getUser } from '@services/member';

interface HeaderProps {
  activeTab: 'mypage' | 'members';
}

const Header = ({ activeTab }: HeaderProps) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem('userId');

        if (!userId) {
          return;
        }

        const response = await getUser(Number(userId));

        setUserName(response.data.name);
      } catch {
        alert('유저 정보를 불러오는데 실패했습니다.');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');

    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>SOPT MEMBERS</h1>

          <p className={styles.description}>안녕하세요, {userName}님!</p>
        </div>

        <nav className={styles.nav}>
          <span
            className={activeTab === 'mypage' ? styles.activeMenu : styles.menu}
            onClick={() => navigate('/mypage')}
          >
            내 정보
          </span>

          <span
            className={
              activeTab === 'members' ? styles.activeMenu : styles.menu
            }
            onClick={() => navigate('/members')}
          >
            회원 조회
          </span>

          <span className={styles.menu} onClick={handleLogout}>
            로그아웃
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
