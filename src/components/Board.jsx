import { styled } from 'styled-components'

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.9fr);
  grid-template-rows: repeat(3, 0.9fr);
  gap: 1px;
  width: 148px;
  height: 148px;
  border: 1px solid #000000;
  background: #000000;
`

const StyledCell = styled.div`
  font-size: 2rem;
  background: #ffffff;
  text-align: center;
  cursor: pointer;
`

const Board = () => {
  return (
    <StyledBoard>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
      <StyledCell></StyledCell>
    </StyledBoard>
  )
}

export default Board
