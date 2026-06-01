import { useMutation } from '@tanstack/react-query';

import { deleteMovieRating } from '@/features/movieDetail/api/movieDetail';

export const useDeleteMovieRating = () => {
  return useMutation({
    mutationFn: ({
      movieId,
      guestSessionId,
    }: {
      movieId: number;
      guestSessionId: string;
    }) => deleteMovieRating(movieId, guestSessionId),
  });
};
