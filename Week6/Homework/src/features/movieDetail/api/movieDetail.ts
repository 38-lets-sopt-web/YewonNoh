import { get, post, del } from '@/shared/api/api';

import type {
  MovieDetailResponse,
  GuestSessionResponse,
  RatedMoviesResponse,
  RatingResponse,
} from '@/shared/types/movie';

export const getMovieDetail = (movieId: number) => {
  return get<MovieDetailResponse>(`/movie/${movieId}`);
};

export const getGuestSession = () => {
  return get<GuestSessionResponse>('/authentication/guest_session/new');
};

export const postMovieRating = (
  movieId: number,
  guestSessionId: string,
  value: number,
) => {
  return post<RatingResponse>(
    `/movie/${movieId}/rating?guest_session_id=${guestSessionId}`,
    {
      value,
    },
  );
};

export const getRatedMovies = (guestSessionId: string) => {
  return get<RatedMoviesResponse>(
    `/guest_session/${guestSessionId}/rated/movies`,
  );
};

export const deleteMovieRating = (movieId: number, guestSessionId: string) => {
  return del<RatingResponse>(`/movie/${movieId}/rating`, {
    guest_session_id: guestSessionId,
  });
};
