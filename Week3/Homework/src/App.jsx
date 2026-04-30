import { Header } from '@components/index';
import { GamePage } from '@pages/index';

const App = () => {
  return (
    <div className="p-6 bg-amber-50 min-h-screen">
      <Header />
      <GamePage />
    </div>
  );
};

export default App;
