import { useEffect, useState } from 'react';

import { initGuestSession } from '@/features/movieDetail/utils/initGuestSession';
import { useDeleteMovieRating } from '@/features/movieDetail/hooks/useDeleteMovieRating';
import { usePostMovieRating } from '@/features/movieDetail/hooks/usePostMovieRating';
import { useRatedMovies } from '@/features/movieDetail/hooks/useRatedMoviesQuery';

import * as sectionStyles from './MovieSection.css';
import * as styles from './MovieRating.css';

interface MovieRatingProps {
  movieId: number;
}

const MovieRating = ({ movieId }: MovieRatingProps) => {
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');
  const [guestSessionId, setGuestSessionId] = useState('');

  const { data } = useRatedMovies(guestSessionId);

  const postMovieRatingMutation = usePostMovieRating();
  const deleteMovieRatingMutation = useDeleteMovieRating();

  const isLoading =
    postMovieRatingMutation.isPending || deleteMovieRatingMutation.isPending;

  useEffect(() => {
    const initialize = async () => {
      const guestSessionId = await initGuestSession();
      setGuestSessionId(guestSessionId);
    };

    initialize();
  }, []);

  const ratedMovie = data?.results.find(movie => movie.id === movieId);
  const inputValue = rating || (ratedMovie ? String(ratedMovie.rating) : '');

  const handleSave = async () => {
    const value = Number(rating);

    if (value < 0.5 || value > 10) {
      alert('별점은 0.5 ~ 10.0 사이의 값만 입력할 수 있습니다.');
      return;
    }

    const response = await postMovieRatingMutation.mutateAsync({
      movieId,
      guestSessionId,
      value,
    });

    setMessage(response.status_message);
  };

  const handleDelete = async () => {
    const response = await deleteMovieRatingMutation.mutateAsync({
      movieId,
      guestSessionId,
    });

    setRating('');
    setMessage(response.status_message);
  };

  return (
    <section className={sectionStyles.container}>
      <h2 className={sectionStyles.title}>별점 남기기</h2>
      <p className={styles.range}>0.5 ~ 10.0</p>

      <input
        className={styles.input}
        type="number"
        min={0.5}
        max={10}
        step={0.5}
        value={inputValue}
        onChange={e => setRating(e.target.value)}
      />

      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={styles.primaryButton}
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? '저장중...' : '별점 저장'}
        </button>

        <button
          type="button"
          className={styles.secondaryButton}
          onClick={handleDelete}
          disabled={isLoading}
        >
          별점 삭제하기
        </button>
      </div>

      {message && <p className={styles.message}>{message}</p>}
    </section>
  );
};

export default MovieRating;
