import { useState } from 'react';
import { LeftPanel, GameSection, ResultModal } from '@components/index';
import { LEVEL_CONFIG } from '@constants/game';
import initCells from '@utils/initCells';
import useTimer from '@hooks/useTimer';
import useMoleSpawner from '@hooks/useMoleSpawner';

const GamePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [level, setLevel] = useState(1);

  const { size: boardSize, time: limitTime } = LEVEL_CONFIG[level];

  const [time, setTime] = useState(limitTime);
  const [score, setScore] = useState(0);
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);

  const [cells, setCells] = useState(() => initCells(boardSize));
  const [message, setMessage] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetGame = () => {
    setCells(initCells(boardSize));
    setTime(limitTime);
    setScore(0);
    setSuccess(0);
    setFail(0);
    setMessage('');
  };

  const handleStart = () => {
    resetGame();
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
    resetGame();
  };

  const handleLevelChange = (nextLevel) => {
    setLevel(nextLevel);
    const { size, time } = LEVEL_CONFIG[nextLevel];
    setCells(initCells(size));
    setTime(time);
  };

  useTimer(isPlaying, setTime, () => {
    setTime(0.0);
    setIsPlaying(false);
    setCells(initCells(boardSize));
    setMessage('');
    setIsModalOpen(true);
  });

  useMoleSpawner(isPlaying, setCells);

  const handleClick = (cell) => {
    if (!cell.active || !isPlaying) return;

    if (cell.type === 'mole') {
      setScore((s) => s + 1);
      setSuccess((s) => s + 1);
      setMessage('두더지를 잡았다!');

      setCells((prev) =>
        prev.map((c) => (c.id === cell.id ? { ...c, type: 'hit' } : c))
      );

      setTimeout(() => {
        setCells((current) =>
          current.map((c) =>
            c.id === cell.id ? { ...c, active: false, type: null } : c
          )
        );
        setMessage('');
      }, 700);
    } else if (cell.type === 'bomb') {
      setScore((s) => s - 1);
      setFail((f) => f + 1);
      setMessage('땡!');

      setCells((prev) =>
        prev.map((c) =>
          c.id === cell.id ? { ...c, active: false, type: null } : c
        )
      );

      setTimeout(() => {
        setMessage('');
      }, 300);
    }
  };

  return (
    <div className="mt-6 flex gap-6">
      <LeftPanel
        time={time}
        score={score}
        success={success}
        fail={fail}
        isPlaying={isPlaying}
        message={message}
      />

      <GameSection
        isPlaying={isPlaying}
        onStart={handleStart}
        onStop={handleStop}
        level={level}
        onLevelChange={handleLevelChange}
        boardSize={boardSize}
        cells={cells}
        onClick={handleClick}
      />

      <ResultModal
        open={isModalOpen}
        level={level}
        score={score}
        onEnd={() => {
          setIsModalOpen(false);
          resetGame();
        }}
      />
    </div>
  );
};

export default GamePage;
