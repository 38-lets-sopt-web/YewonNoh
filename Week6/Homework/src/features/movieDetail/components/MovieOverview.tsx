import type { MovieDetailResponse } from '@/shared/types/movie';

import * as styles from './MovieSection.css';

interface MovieOverviewProps {
  overview: MovieDetailResponse['overview'];
}

const MovieOverview = ({ overview }: MovieOverviewProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>줄거리</h2>

      <p className={styles.content}>
        {overview || '등록된 줄거리 정보가 없습니다.'}
      </p>
    </section>
  );
};

export default MovieOverview;
