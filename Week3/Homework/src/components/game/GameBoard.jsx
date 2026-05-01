import { GRID_COLS } from '@constants/game';
import cat from '@assets/cat.jpg';
import bomb from '@assets/bomb.jpg';
import surprised from '@assets/cat_surprised.jpeg';

const GameBoard = ({ boardSize, cells, onClick }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-amber-50 rounded-xl p-6 w-full max-w-lg flex items-center justify-center border border-amber-200">
        <div className={`grid ${GRID_COLS[boardSize]} gap-4 w-full h-full`}>
          {cells.map((cell) => (
            <div
              key={cell.id}
              onClick={() => cell.active && onClick(cell)}
              className="bg-amber-200 rounded-full aspect-square overflow-hidden cursor-pointer"
            >
              {cell.active && (
                <img
                  src={
                    cell.type === 'mole'
                      ? cat
                      : cell.type === 'hit'
                        ? surprised
                        : cell.type === 'bomb'
                          ? bomb
                          : null
                  }
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
