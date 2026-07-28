import { createBrowserRouter } from 'react-router-dom';

import MovieDetailPage from '@/pages/MovieDetailPage';
import MovieListPage from '@/pages/MovieListPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
  },
  {
    path: '/:id',
    element: <MovieDetailPage />,
  },
]);
