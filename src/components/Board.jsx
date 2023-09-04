import { styled } from 'styled-components'
import Cell from './Cell'

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

const Board = ({ onCellClick, cells }) => {
  return (
    <StyledBoard>
      {cells.map((cell, i) => (
        <Cell key={i} value={cells[i]} onCellClick={() => onCellClick(i)} />
      ))}
    </StyledBoard>
  )
}

export default Board
