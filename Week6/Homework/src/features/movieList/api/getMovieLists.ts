import { get } from '@/shared/api/api';

import type { MovieListResponse } from '@/shared/types/movie';

export const getMovieLists = (page: number) => {
  return get<MovieListResponse>('/discover/movie', {
    page,
  });
};
