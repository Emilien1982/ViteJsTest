import { useState } from 'react'
import Grid from './components/Grid/Grid'
import './App.css'

function App() {
  const [isPlayer1, setIsPlayer1] = useState(true)

  return (
    <div className="App">
      <h1>Morpion</h1>
      <h3>Player {isPlayer1 ? '1' : '2'} turn</h3>
      <Grid />
    </div>
  )
}

export default App
