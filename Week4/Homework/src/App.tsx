import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Signup, Mypage, Members, MemberDetail } from '@pages/index';
import { RootLayout } from '@layouts/index';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: '/mypage',
        element: <Mypage />,
      },
      {
        path: '/members',
        element: <Members />,
      },
      {
        path: '/members/:memberId',
        element: <MemberDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
