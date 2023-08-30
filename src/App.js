import { styled } from 'styled-components'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
  height: 100vh;
`

function App() {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [isCircleTurn, setIsCircleTurn] = useState(true)
  const handleRestart = () => {
    setCells(Array(9).fill(null))
    setIsCircleTurn(true)
  }
  return (
    <div className="App">
      <StyledContainer>
        <Header />
        <Main />
        <Footer onRestart={handleRestart} />
      </StyledContainer>
    </div>
  )
}

export default App
