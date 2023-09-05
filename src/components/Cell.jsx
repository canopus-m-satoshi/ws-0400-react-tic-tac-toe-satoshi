import { styled } from 'styled-components'

const StyledCell = styled.div`
  font-size: 2rem;
  background: #ffffff;
  text-align: center;
  cursor: pointer;
`

const Cell = ({ onCellClick, value }) => {
  return <StyledCell onClick={onCellClick}>{value}</StyledCell>
}
export default Cell
