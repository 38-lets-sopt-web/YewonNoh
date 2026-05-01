const RANKING_KEY = 'mole_ranking';

export const getRanking = () => {
  const data = localStorage.getItem(RANKING_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveRanking = (newRecord) => {
  const prev = getRanking();

  const next = [...prev, newRecord];

  next.sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    return b.score - a.score;
  });

  localStorage.setItem(RANKING_KEY, JSON.stringify(next));
};

export const clearRanking = () => {
  localStorage.removeItem(RANKING_KEY);
};
