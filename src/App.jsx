import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import IslandScene from './scenes/IslandScene';
import GameUI from './scenes/GameUI/GameUI';
import Loading from './scenes/GameUI/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route
          path="/"
          element={<IslandScene onLoadComplete={() => setIsLoading(false)} />}
        />
        <Route path="/GameUI" element={<GameUI />} />
      </Routes>
    </>
  );
}

export default App;
