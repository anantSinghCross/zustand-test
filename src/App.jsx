import { useCounter } from "./store";

function App() {
  const count = useCounter(state => state.count);
  const increase = useCounter(state => state.increase);
  return (
    <>
      <button onClick={increase}>count is {count}</button>
    </>
  );
}

export default App;
