import { useQuery } from '@tanstack/react-query';

import { getRatedMovies } from '@/features/movieDetail/api/movieDetail';
import type { RatedMoviesResponse } from '@/shared/types/movie';

export const useRatedMovies = (guestSessionId: string) => {
  return useQuery<RatedMoviesResponse>({
    queryKey: ['ratedMovies', guestSessionId],
    queryFn: () => getRatedMovies(guestSessionId),
    enabled: !!guestSessionId,
  });
};
