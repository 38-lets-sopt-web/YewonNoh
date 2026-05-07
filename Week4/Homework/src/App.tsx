import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Signup } from '@pages/index';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
