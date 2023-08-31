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
      <Cell value={cells[0]} onCellClick={() => onCellClick(0)} />
      <Cell value={cells[1]} onCellClick={() => onCellClick(1)} />
      <Cell value={cells[2]} onCellClick={() => onCellClick(2)} />
      <Cell value={cells[3]} onCellClick={() => onCellClick(3)} />
      <Cell value={cells[4]} onCellClick={() => onCellClick(4)} />
      <Cell value={cells[5]} onCellClick={() => onCellClick(5)} />
      <Cell value={cells[6]} onCellClick={() => onCellClick(6)} />
      <Cell value={cells[7]} onCellClick={() => onCellClick(7)} />
      <Cell value={cells[8]} onCellClick={() => onCellClick(8)} />
    </StyledBoard>
  )
}

export default Board
