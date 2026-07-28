import { useMemo } from 'react';

import type { MovieResponse } from '@/shared/types/movie';

interface UseMovieFilterProps {
  movies: MovieResponse[];
  rank: string;
}

export const useMovieFilter = ({ movies, rank }: UseMovieFilterProps) => {
  const filteredMovies = useMemo(() => {
    if (!rank) {
      return movies;
    }

    const rankNumber = Number(rank);

    return movies.filter(
      movie =>
        movie.vote_average >= rankNumber && movie.vote_average < rankNumber + 1,
    );
  }, [movies, rank]);

  return filteredMovies;
};
