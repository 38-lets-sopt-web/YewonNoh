import { StatBox } from '@components/index';

const LeftPanel = ({ time, score, success, fail, isPlaying, message }) => {
  return (
    <div className="w-64 h-full flex flex-col gap-4">
      <StatBox>
        <p className="text-sm font-semibold text-slate-700 mb-2">남은 시간</p>
        <p className="text-4xl font-bold text-slate-700">{time.toFixed(1)}</p>
      </StatBox>

      <StatBox>
        <p className="text-sm font-semibold text-slate-700 mb-2">총 점수</p>
        <p className="text-4xl font-bold text-slate-700">{score}</p>
      </StatBox>

      <div className="flex gap-2">
        <StatBox>
          <p className="text-green-500 text-sm font-semibold mb-2">성공</p>
          <p className="text-2xl font-bold">{success}</p>
        </StatBox>

        <StatBox>
          <p className="text-red-400 text-sm font-semibold mb-2">실패</p>
          <p className="text-2xl font-bold">{fail}</p>
        </StatBox>
      </div>

      <StatBox>
        <p className="text-sm font-semibold text-slate-700 mb-3">안내 메시지</p>
        <p className="text-base font-medium text-slate-700">
          {isPlaying ? message : ''}
        </p>
      </StatBox>
    </div>
  );
};

export default LeftPanel;
