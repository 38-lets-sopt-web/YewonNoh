import { useNavigate } from 'react-router-dom';

import * as styles from './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.container} onClick={() => navigate('/')}>
      ← 목록으로 돌아가기
    </header>
  );
};

export default Header;
