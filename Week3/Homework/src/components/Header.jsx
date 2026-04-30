import { useState } from 'react';
import { Button } from '@components/index';

const Header = () => {
  const [tab, setTab] = useState('game');

  return (
    <header className="w-full bg-amber-100 rounded-xl p-8 flex items-center">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-stone-700">두더지 게임</h1>

        <div className="flex gap-2">
          <Button
            variant={tab === 'game' ? 'tabActive' : 'tabInactive'}
            onClick={() => setTab('game')}
          >
            게임
          </Button>

          <Button
            variant={tab === 'ranking' ? 'tabActive' : 'tabInactive'}
            onClick={() => setTab('ranking')}
          >
            랭킹
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
