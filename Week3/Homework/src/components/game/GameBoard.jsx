import { GRID_COLS } from '@constants/game';

const GameBoard = ({ boardSize }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-amber-50 rounded-xl p-6 w-full max-w-lg flex items-center justify-center border border-amber-200">
        <div className={`grid ${GRID_COLS[boardSize]} gap-4 w-full h-full`}>
          {Array.from({ length: boardSize * boardSize }).map((_, i) => (
            <div key={i} className="bg-amber-200 rounded-full aspect-square" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
