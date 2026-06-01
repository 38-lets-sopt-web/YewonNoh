import { useParams } from 'react-router-dom';

import {
  Header,
  MovieBasicInfo,
  MovieHero,
  MovieOverview,
} from '@/features/movieDetail/components';
import { useMovieDetail } from '@/features/movieDetail/hooks/useMovieDetail';

import * as styles from './Page.css';

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data: movie } = useMovieDetail(Number(id));

  if (!movie) {
    return <div>loading...</div>;
  }

  return (
    <main className={styles.container}>
      <Header />

      <MovieHero movie={movie} />

      <MovieOverview overview={movie.overview} />

      <MovieBasicInfo movie={movie} />
    </main>
  );
};

export default MovieDetailPage;
