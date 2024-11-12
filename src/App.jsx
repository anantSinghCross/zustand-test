import { useShallow } from "zustand/shallow";
import Square from "./Square";
import { useGameStore } from "./store";

function App() {
  const [squares, setSquares] = useGameStore(useShallow((state) => [state.squares, state.setSquares]));
  const [nextMove, changeNextMove] = useGameStore(useShallow(state => [state.nextMove, state.changeNextMove]));

  const handleClick = (i) => {
    if(squares[i]) return;
    const newSquares = [...squares];
    newSquares[i] = nextMove === null ? 'X' : nextMove === 'X' ? 'O' : 'X';
    setSquares(newSquares);
    changeNextMove();
  }

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 grid-rows-3 gap-5 m-5">
        {
          squares?.map((item, i) => {
            return <Square value={item} key={i} onSquareClick={() => handleClick(i)}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
