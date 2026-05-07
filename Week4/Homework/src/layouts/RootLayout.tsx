import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

const RootLayout = () => {
  const { pathname } = useLocation();

  const activeTab = pathname === '/members' ? 'members' : 'mypage';

  return (
    <>
      <Header activeTab={activeTab} />
      <Outlet />
    </>
  );
};

export default RootLayout;
