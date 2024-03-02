import { useState } from "react"

export function Counter({defaultValue, inc }){
    const [counter, setCounter] = useState(defaultValue)

function handleButtonClick(){
    setCounter(counter + inc)
}
    return(
        <div>
            <button onClick={handleButtonClick}>Incrementami</button>
            <h2>{counter}</h2>
        </div>

    )
}