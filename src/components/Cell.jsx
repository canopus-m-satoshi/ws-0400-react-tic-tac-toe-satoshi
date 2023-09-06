import { styled } from 'styled-components'

const StyledCell = styled.div`
  font-size: 2rem;
  background: #ffffff;
  text-align: center;
  cursor: pointer;
`

const Cell = ({ onClick, value }) => {
  return <StyledCell onClick={onClick}>{value}</StyledCell>
}
export default Cell
