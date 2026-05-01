import { useState } from 'react';
import { Button, RankingItem } from '@components/index';
import { getRanking, clearRanking } from '@utils/rankingStorage';

const RankingPage = () => {
  const [data, setData] = useState(() => getRanking());

  const handleClear = () => {
    if (!window.confirm('정말 초기화할까요?')) return;
    clearRanking();
    setData([]);
  };

  return (
    <div className="mt-6 bg-amber-100 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-stone-700">랭킹 보드</h2>

        <Button variant="danger" onClick={handleClear}>
          기록 초기화
        </Button>
      </div>

      <div className="bg-amber-50 rounded-lg overflow-hidden border border-amber-200">
        <div className="grid grid-cols-4 bg-amber-200 text-stone-700 text-sm font-medium px-6 py-3">
          <span>순위</span>
          <span>레벨</span>
          <span>점수</span>
          <span>기록 시간</span>
        </div>

        {data.length === 0 ? (
          <div className="text-center py-8 text-stone-400 text-sm">
            아직 기록이 없습니다. 게임을 시작하세요!
          </div>
        ) : (
          data.map((item, idx) => (
            <RankingItem
              key={item.id}
              rank={idx + 1}
              level={`Level ${item.level}`}
              score={`${item.score}점`}
              date={item.time}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RankingPage;
