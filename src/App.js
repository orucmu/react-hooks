import { useState } from "react";

function App(props) {
  const [count, setCount] = useState(props.count)
  return (
    <>
      <p>Butona {count} kez tıkladınız.</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
    </>
  );
}

export default App;
