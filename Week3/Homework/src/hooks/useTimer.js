import { useEffect } from 'react';

const useTimer = (isPlaying, setTime, onEnd) => {
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTime((t) => {
        const next = +(t - 0.1).toFixed(1);

        if (next <= 0) {
          clearInterval(timer);
          onEnd();
          return 0.0;
        }

        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPlaying, setTime, onEnd]);
};

export default useTimer;
