import { Button, GameBoard } from '@components/index';

const GameSection = ({
  isPlaying,
  onStart,
  onStop,
  level,
  onLevelChange,
  boardSize,
  cells,
  onClick,
}) => {
  return (
    <div className="flex-1 bg-amber-100 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="relative inline-block">
          <select
            value={level}
            onChange={(e) => onLevelChange(Number(e.target.value))}
            disabled={isPlaying}
            className="
              appearance-none
              bg-amber-200
              text-stone-700
              text-sm font-medium
              px-4 pr-8 py-2
              rounded-full
              outline-none
              cursor-pointer
            "
          >
            <option value={1}>Level 1</option>
            <option value={2}>Level 2</option>
            <option value={3}>Level 3</option>
          </select>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-600 text-xs">
            ▼
          </span>
        </div>

        <div className="flex gap-2">
          <Button variant="primary" active={isPlaying} onClick={onStart}>
            시작
          </Button>

          <Button variant="secondary" active={!isPlaying} onClick={onStop}>
            중단
          </Button>
        </div>
      </div>

      <GameBoard boardSize={boardSize} cells={cells} onClick={onClick} />
    </div>
  );
};

export default GameSection;
