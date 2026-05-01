import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = ({ open, level, score, onEnd }) => {
  const [remaining, setRemaining] = useState(3);

  useEffect(() => {
    if (!open) return;

    const start = Date.now();

    const timer = setInterval(() => {
      const diff = Date.now() - start;
      const sec = 3 - Math.floor(diff / 1000);

      if (sec <= 0) {
        clearInterval(timer);
        setRemaining(0);
        onEnd();
      } else {
        setRemaining(sec);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [open, onEnd]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-10 py-8 shadow-xl text-center w-80">
        <p className="text-sm text-stone-500 mb-1">Level {level}</p>

        <p className="text-xl font-bold text-stone-700 mb-4">게임 종료</p>

        <div className="bg-white rounded-xl py-4 mb-5 border border-amber-100">
          <p className="text-sm text-stone-400 mb-1">최종 점수</p>
          <p className="text-2xl font-bold text-amber-600">{score}점</p>
        </div>

        <p className="text-sm text-stone-500">
          <span className="font-semibold text-amber-600">{remaining}</span>초 후
          다시 시작됩니다
        </p>
      </div>
    </div>,
    document.body
  );
};

export default ResultModal;
