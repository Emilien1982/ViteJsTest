const winningCombinaisons = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default (grid, playedSign) => {
  // check if there is less than 2 playedSign: return false
  if (grid.filter(item => item === playedSign).length < 3) return false
  // check every winning combinaison with playedSign:
  for (let i= 0; i < winningCombinaisons.length; i++){
    const playedSignCount = winningCombinaisons[i]
      .map(gridIndex => grid[gridIndex])
      .filter(sign => sign === playedSign)
      .length
    // console.log({i, playedSign, playedSignCount})
    if (playedSignCount === 3) return true;
  }
  if (grid.includes(null)) return false;
  return 'tie'
}