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

function App() {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [isCircleTurn, setIsCircleTurn] = useState(true)
  const [message, setMessage] = useState('starting...')
  const [isWin, setIsWin] = useState(false)

  const handleCellClick = (i) => {
    if (cells[i] || isWin) return
    const newCells = [...cells]
    newCells[i] = isCircleTurn ? '○' : 'X'

    setCells(newCells)
    const winner = calcWinner(newCells)

    if (winner) {
      setMessage(`${winner} is Win!`)
      setIsWin(!isWin)
      return
    }

    setIsCircleTurn(!isCircleTurn)
  }

  const handleRestart = () => {
    setCells(Array(9).fill(null))
    setIsCircleTurn(true)
    setMessage('starting...')
    setIsWin(false)
  }

  const calcWinner = (cells) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a]
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
        <Footer onRestart={handleRestart} message={message} />
      </StyledContainer>
    </div>
  )
}

export default App
