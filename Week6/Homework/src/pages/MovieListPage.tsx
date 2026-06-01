import { useState } from 'react';
import { MovieFilter, MovieList } from '@/features/movieList/components';
import { useInfiniteMovies } from '@/features/movieList/hooks/useInfiniteMovies';
import { useIntersectionObserver } from '@/features/movieList/hooks/useIntersectionObserver';
import { useMovieFilter } from '@/features/movieList/hooks/useMovieFilter';

import * as styles from './Page.css';

const MovieListPage = () => {
  const [rank, setRank] = useState('');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteMovies();

  const targetRef = useIntersectionObserver({
    hasNextPage: !!hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const allMovies = data?.pages.flatMap(page => page.results) ?? [];

  const movies = useMovieFilter({
    movies: allMovies,
    rank,
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Movie Explorer</h1>

      <MovieFilter value={rank} onChange={setRank} />

      <MovieList movies={movies} />

      <div ref={targetRef} />

      {isFetchingNextPage && <p>Loading...</p>}
    </main>
  );
};

export default MovieListPage;
