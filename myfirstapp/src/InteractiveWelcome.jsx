import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){
    const [currentInput, setCurrentInput] = useState('')
function handleInputChange(e){
    setCurrentInput(e.target.value)
}
    return(
        <div>
            <input value={currentInput} onChange={handleInputChange}></input>
            <Welcome name={currentInput} />
        </div>
    )
}