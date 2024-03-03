import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ defaultValue, inc }) {
  const [counter, setCounter] = useState(defaultValue);
  const counterChangeRef = useRef({value: counter, direction: null})

useEffect(() =>{
  if (counterChangeRef.current.value < counter){
    counterChangeRef.current.direction = "up"
  } else if (counterChangeRef.current.value > counter){
    counterChangeRef.current.direction ="down"
  }
counterChangeRef.current.value = counter;
}, [counter])

useEffect(() =>{
  if (counterChangeRef.current.value !== null){
    console.log(counterChangeRef.current.direction)
  }
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
