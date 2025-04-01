import { useState } from 'react'
import "./App.css";

function App() {
  // let count = 0;

  let [count, setCount] = useState(0)

  const handleClickIncrement = () => setCount(count + 1)

  return (
    <>
      <header>
        <h1>Hello!</h1>
        <p>This is an amazing lecture!</p>
      </header>
      <div>
        <h2>My count: { count }</h2>
        <button onClick={handleClickIncrement}>Increment</button>
      </div>
    </>
  );
}

export default App;
