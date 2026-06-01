import { useQuery } from '@tanstack/react-query';

import { getMovieDetail } from '@/features/movieDetail/api/movieDetail';

export const useMovieDetail = (movieId: number) => {
  return useQuery({
    queryKey: ['movieDetail', movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: !!movieId,
  });
};
