import type { MovieDetailResponse } from '@/shared/types/movie';

import * as styles from './MovieSection.css';

interface MovieBasicInfoProps {
  movie: MovieDetailResponse;
}

const MovieBasicInfo = ({ movie }: MovieBasicInfoProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>기본 정보</h2>

      <div className={styles.table}>
        <div className={styles.row}>
          <span className={styles.label}>원제</span>
          <p className={styles.value}>{movie.original_title}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>원어</span>
          <p className={styles.value}>{movie.original_language}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>제작 국가</span>
          <p className={styles.value}>
            {movie.production_countries.map(country => country.name).join(', ')}
          </p>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>사용 언어</span>
          <p className={styles.value}>
            {movie.spoken_languages
              .map(language => language.english_name)
              .join(', ')}
          </p>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>예산</span>
          <p className={styles.value}>
            {movie.budget.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          </p>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>수익</span>
          <p className={styles.value}>
            {movie.revenue.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieBasicInfo;
