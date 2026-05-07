import { Outlet } from 'react-router-dom';
import Header from './Header';

const RootLayout = () => {
  return (
    <>
      <Header userName="" activeTab="mypage" />
      <Outlet />
    </>
  );
};

export default RootLayout;
