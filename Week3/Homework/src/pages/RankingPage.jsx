import { Button, RankingItem } from '@components/index';

const dummyData = [
  {
    id: 1,
    level: 'Level 2',
    score: '20점',
    date: '2026. 4. 25 오후 14:15',
  },
];

const RankingPage = () => {
  return (
    <div className="mt-6 bg-amber-100 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-stone-700">랭킹 보드</h2>

        <Button variant="danger">기록 초기화</Button>
      </div>

      <div className="bg-amber-50 rounded-lg overflow-hidden border border-amber-200">
        <div className="grid grid-cols-4 bg-amber-200 text-stone-700 text-sm font-medium px-6 py-3">
          <span>순위</span>
          <span>레벨</span>
          <span>점수</span>
          <span>기록 시간</span>
        </div>

        {dummyData.map((item, idx) => (
          <RankingItem
            key={item.id}
            rank={idx + 1}
            level={item.level}
            score={item.score}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default RankingPage;
