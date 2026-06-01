import { get } from '@/shared/api/api';

import type { MovieDetailResponse } from '@/shared/types/movie';

export const getMovieDetail = (movieId: number) => {
  return get<MovieDetailResponse>(`/movie/${movieId}`);
};
