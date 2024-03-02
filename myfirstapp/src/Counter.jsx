import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ defaultValue, inc }) {
  const [counter, setCounter] = useState(defaultValue);
useEffect(() =>{
    console.log(counter)
}, [counter])
  function handleButtonClickIncrement() {
    setCounter(counter + inc);
  }
  function handleButtonClickDecrement() {
    setCounter(counter - inc);
  }
  function handleButtonClickReset() {
    setCounter(defaultValue);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleButtonClickIncrement}>Incrementami</button>

      <button onClick={handleButtonClickDecrement}>Decrementami</button>
      <button onClick={handleButtonClickReset}>Resettami</button>
    </div>
  );
}
