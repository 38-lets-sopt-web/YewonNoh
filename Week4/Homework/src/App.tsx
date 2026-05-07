import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Signup, Mypage, Members } from '@pages/index';
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
