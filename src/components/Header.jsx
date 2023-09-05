import { styled } from 'styled-components'
const StyledHeader = styled.header`
  font-size: 1.2em;
  background-color: #fff;
`

const Header = () => {
  return (
    <StyledHeader>
      <h1>TIC TAC TOE</h1>
    </StyledHeader>
  )
}
export default Header
