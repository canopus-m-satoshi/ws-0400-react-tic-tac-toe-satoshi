import { styled } from 'styled-components'

const StyledTurnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const StyledTurn = styled.div`
  font-size: 1.5rem;
  padding: 10px 28px;
  /* TODO : DOMにprops渡すとError出る */
  ${(props) => props.isCircleTurn && 'border-bottom: 4px solid #000'};
`

const TurnBox = ({ isCircleTurn }) => {
  return (
    <StyledTurnBox>
      {/* <StyledTurn isCircleTurn={() => isCircleTurn}>⚪︎</StyledTurn>
      <StyledTurn isCircleTurn={() => !isCircleTurn}>×</StyledTurn> */}
      <StyledTurn>⚪︎</StyledTurn>
      <StyledTurn>×</StyledTurn>
    </StyledTurnBox>
  )
}
export default TurnBox
