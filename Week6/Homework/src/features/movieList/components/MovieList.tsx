import * as styles from './MovieList.css';
import MovieCard from './MovieCard';

import type { MovieResponse } from '@/shared/types/movie';

interface MovieListProps {
  movies: MovieResponse[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <section className={styles.container}>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </section>
  );
};

export default MovieList;