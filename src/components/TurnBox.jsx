import { styled } from 'styled-components'

const StyledTurnBox = styled.div`
  display: flex;
  justify-content: center;
`
const StyledTurn = styled.div`
  font-size: 1.5rem;
  padding: 10px 28px;

  /* TODO */
  &.js-active {
    border-bottom: 4px solid v.$accent-color;
  }
`

const TurnBox = () => {
  return (
    <StyledTurnBox>
      <StyledTurn>⚪︎</StyledTurn>
      <StyledTurn>×</StyledTurn>
    </StyledTurnBox>
  )
}
export default TurnBox
