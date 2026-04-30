import { LeftPanel, GameSection } from '@components/index';

const GamePage = () => {
  return (
    <div className="mt-6 flex gap-6">
      <LeftPanel />
      <GameSection />
    </div>
  );
};

export default GamePage;
