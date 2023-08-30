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
  return (
    <div className="App">
      <StyledContainer>
        <Header />
        <Main />
        <Footer />
      </StyledContainer>
    </div>
  )
}

export default App
