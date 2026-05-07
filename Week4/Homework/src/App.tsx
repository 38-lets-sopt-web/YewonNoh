import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '@pages/index';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
