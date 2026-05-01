import { useEffect } from 'react';

const useMoleSpawner = (isPlaying, setCells) => {
  useEffect(() => {
    if (!isPlaying) return;

    let timeoutId;
    let lastIndex = -1;

    const spawn = () => {
      setCells((prev) => {
        if (prev.length === 0) return prev;

        let idx;
        do {
          idx = Math.floor(Math.random() * prev.length);
        } while (idx === lastIndex && prev.length > 1);

        lastIndex = idx;

        const isBomb = Math.random() < 0.3;

        return prev.map((c) =>
          c.id === idx
            ? { ...c, active: true, type: isBomb ? 'bomb' : 'mole' }
            : { ...c, active: false, type: null }
        );
      });

      timeoutId = setTimeout(() => {
        setCells((prev) =>
          prev.map((c) => ({ ...c, active: false, type: null }))
        );
        timeoutId = setTimeout(spawn, 400);
      }, 1000);
    };

    spawn();

    return () => clearTimeout(timeoutId);
  }, [isPlaying, setCells]);
};

export default useMoleSpawner;
