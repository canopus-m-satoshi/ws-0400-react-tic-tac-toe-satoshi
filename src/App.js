import { styled } from 'styled-components'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
  height: 100vh;
`

function App() {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [isCircleTurn, setIsCircleTurn] = useState(true)
  const [state, setState] = useState('starting...')

  const handleCellClick = (i) => {
    if (cells[i]) return

    const newCells = [...cells]
    newCells[i] = isCircleTurn ? '○' : 'X'

    setCells(newCells)

    if (calcWinner(cells)) {
      setState(`${newCells[i]} is Win!`)
    }

    setIsCircleTurn(!isCircleTurn)
  }

  const handleRestart = () => {
    setCells(Array(9).fill(null))
    setIsCircleTurn(true)
    setState('starting...')
  }

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function calcWinner(cells) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]

      // TODO : 勝利時のstateの挙動がズレる
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        // setState(`${cells[a]} is Win!`)
        return true
      }
    }

    return null
  }

  return (
    <div className="App">
      <StyledContainer>
        <Header />
        <Main
          onCellClick={handleCellClick}
          cells={cells}
          isCircleTurn={isCircleTurn}
        />
        <Footer onRestart={handleRestart} state={state} />
      </StyledContainer>
    </div>
  )
}

export default App
