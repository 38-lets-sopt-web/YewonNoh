import { useState } from 'react';
import { Header } from '@components/index';
import { GamePage, RankingPage } from '@pages/index';

const App = () => {
  const [tab, setTab] = useState('game');

  return (
    <div className="p-6 bg-amber-50 min-h-screen">
      <Header tab={tab} setTab={setTab} />

      {tab === 'game' ? <GamePage /> : <RankingPage />}
    </div>
  );
};

export default App;
