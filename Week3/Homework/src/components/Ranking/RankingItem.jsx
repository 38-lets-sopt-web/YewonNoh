const RankingItem = ({ rank, level, score, date }) => {
  return (
    <div className="grid grid-cols-4 px-6 py-3 text-sm text-stone-700 border-t border-amber-100">
      <span>{rank}</span>
      <span>{level}</span>
      <span>{score}</span>
      <span>{date}</span>
    </div>
  );
};

export default RankingItem;
