import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import IslandScene from './scenes/IslandScene';
import Loading from './scenes/GameUI/Loading';
import Terminal from './container/Terminal';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<IslandScene />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Suspense>
  );
}

export default App;
