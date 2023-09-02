import { styled } from 'styled-components'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

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
  const winner = calcWinner(cells)

  useEffect(() => {
    if (winner) {
      // setState(`${isCircleTurn ? 'X' : 'O'} is Win!`)
      setState(`${winner} is Win!`)
    }
  }, [winner])

  const handleCellClick = (i) => {
    if (cells[i] || winner) return

    const newCells = [...cells]
    newCells[i] = isCircleTurn ? '○' : 'X'

    setCells(newCells)

    setIsCircleTurn(!isCircleTurn)
  }

  // const winner = calcWinner(cells)
  // if (winner) {
  //   // setState(`${isCircleTurn ? 'O' : 'X'} is Win!`)
  //   setState(`${winner} is Win!`)
  // }

  const handleRestart = () => {
    setCells(Array(9).fill(null))
    setIsCircleTurn(true)
    setState('starting...')
  }

  function calcWinner(cells) {
    // debugger
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]

      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a]
      }
      return null
    }
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
