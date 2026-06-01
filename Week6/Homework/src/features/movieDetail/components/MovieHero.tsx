import type { MovieDetailResponse } from '@/shared/types/movie';

import * as styles from './MovieHero.css';

interface MovieHeroProps {
  movie: MovieDetailResponse;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieHero = ({ movie }: MovieHeroProps) => {
  return (
    <section className={styles.container}>
      <img
        className={styles.backdrop}
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
      />

      <div className={styles.content}>
        <img
          className={styles.poster}
          src={`${POSTER_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />

        <div className={styles.info}>
          <span className={styles.date}>{movie.release_date}</span>

          <h1 className={styles.title}>{movie.title}</h1>

          <div className={styles.genres}>
            {movie.genres.map(genre => (
              <span key={genre.id} className={styles.genre}>
                {genre.name}
              </span>
            ))}
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <span className={styles.label}>평점</span>
              <p className={styles.value}>
                {movie.vote_average.toFixed(1)} / 10
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.label}>투표 수</span>
              <p className={styles.value}>
                {movie.vote_count.toLocaleString()}
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.label}>상영 시간</span>
              <p className={styles.value}>{movie.runtime}분</p>
            </div>

            <div className={styles.card}>
              <span className={styles.label}>상태</span>
              <p className={styles.value}>{movie.status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieHero;
