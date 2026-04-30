import { StatBox } from '@components/index';

const LeftPanel = () => {
  return (
    <div className="w-64 h-full flex flex-col gap-4">
      <StatBox>
        <p className="text-sm font-semibold text-slate-700 mb-2">남은 시간</p>
        <p className="text-4xl font-bold text-slate-700">20.0</p>
      </StatBox>

      <StatBox>
        <p className="text-sm font-semibold text-slate-700 mb-2">총 점수</p>
        <p className="text-4xl font-bold text-slate-700">0</p>
      </StatBox>

      <div className="flex gap-2">
        <StatBox>
          <p className="text-green-500 text-sm font-semibold mb-2">성공</p>
          <p className="text-2xl font-bold">0</p>
        </StatBox>

        <StatBox>
          <p className="text-red-400 text-sm font-semibold mb-2">실패</p>
          <p className="text-2xl font-bold">0</p>
        </StatBox>
      </div>

      <div className="flex-[1.2] flex">
        <StatBox>
          <p className="text-sm font-semibold text-slate-700 mb-3">
            안내 메시지
          </p>
          <p className="text-base text-slate-700 font-medium">
            게임을 시작하세요!
          </p>
        </StatBox>
      </div>
    </div>
  );
};

export default LeftPanel;
