import { useState } from 'react'
import Grid from './components/Grid/Grid'
import Case from './components/Case/Case'
import isThereAWinner from './helpers/isThereAWinner'
import './App.css'

const emptyGrid = [null, null, null, null, null, null, null, null, null];

function App() {
  const [isPlayer1, setIsPlayer1] = useState(true)
  const [grid, setGrid] = useState(emptyGrid)
  const [gameContinue, setGameContinue] = useState(true)
  
  const handleClick = (index) => {
    const onClick = () => {
      if (!gameContinue) return;
      if (grid[index]) return;
      const newGrid = [...grid];
      newGrid[index] = isPlayer1 ? 'X' : 'O'
      setGrid(newGrid);
      setGameContinue(!isThereAWinner(newGrid, isPlayer1 ? 'X' : 'O'));
      setIsPlayer1(player => !player);
    }
    return onClick;
  }

  const handleReset = () => {
    setIsPlayer1(true);
    setGrid(emptyGrid);
    setGameContinue(true);
  }

  return (
    <div className="App">
      <h1>Morpion</h1>
      <h3>Player {isPlayer1 ? '1' : '2'} turn</h3>
      <Grid>
        {grid.map((val, index) => 
          <Case 
            value={val}
            handleClick={handleClick(index)}
            key={index}
          />
        )}
      </Grid>
      <button type='button' onClick={handleReset} >
        Reset
      </button>
    </div>
  )
}

export default App
