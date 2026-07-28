import { useMutation } from '@tanstack/react-query';

import { postMovieRating } from '@/features/movieDetail/api/movieDetail';

export const usePostMovieRating = () => {
  return useMutation({
    mutationFn: ({
      movieId,
      guestSessionId,
      value,
    }: {
      movieId: number;
      guestSessionId: string;
      value: number;
    }) => postMovieRating(movieId, guestSessionId, value),
  });
};
