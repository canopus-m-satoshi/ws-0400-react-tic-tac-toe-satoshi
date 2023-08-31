import Board from './Board'
import TurnBox from './TurnBox'

const Main = ({ onCellClick, cells, isCircleTurn }) => {
  return (
    <main>
      <TurnBox isCircleTurn={isCircleTurn} />
      <Board onCellClick={onCellClick} cells={cells} />
    </main>
  )
}
export default Main
