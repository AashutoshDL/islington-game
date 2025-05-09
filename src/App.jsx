import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Scene from './scenes/Scene'

function App() {

  return (
    <Routes>
      <Route path='/'element={<Scene />} />
    </Routes>
  )
}

export default App
