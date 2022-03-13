import { useState } from 'react'
import Grid from './components/Grid/Grid'
import Case from './components/Case/Case'
import isThereAWinner from './helpers/isThereAWinner'
import './App.css'

function App() {
  const [isPlayer1, setIsPlayer1] = useState(true)
  const [grid, setGrid] = 
    useState([null, null, null, null, null, null, null, null, null])
  
  const handleClick = (index) => {
    const onClick = () => {
      if (grid[index]) return;
      const newGrid = [...grid];
      newGrid[index] = isPlayer1 ? 'X' : 'O'
      setGrid(newGrid)
      console.log('WINNER?: ', isThereAWinner(newGrid, isPlayer1 ? 'X' : 'O'))
      setIsPlayer1(!isPlayer1)
    }
    return onClick;
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
    </div>
  )
}

export default App
