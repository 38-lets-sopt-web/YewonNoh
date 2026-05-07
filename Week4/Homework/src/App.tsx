import './App.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Login, Signup, Mypage, Members, MemberDetail } from '@pages/index';
import { RootLayout } from '@layouts/index';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const userId = localStorage.getItem('userId');

  return userId ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const userId = localStorage.getItem('userId');

  return userId ? <Navigate to="/mypage" replace /> : children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
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
