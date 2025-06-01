import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import IslandScene from './scenes/IslandScene'

function App() {

  return (
    <Routes>
      <Route path='/'element={<IslandScene />} />
    </Routes>
  )
}

export default App
