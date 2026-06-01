import { Link } from 'react-router-dom';

import * as styles from './MovieCard.css';

import type { MovieResponse } from '@/shared/types/movie';

interface MovieCardProps {
  movie: MovieResponse;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/${movie.id}`} className={styles.link}>
      <article className={styles.card}>
        <img
          className={styles.poster}
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />

        <div className={styles.content}>
          <h3 className={styles.title}>{movie.title}</h3>

          <span className={styles.date}>{movie.release_date}</span>

          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
