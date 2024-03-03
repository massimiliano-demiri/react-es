import { useEffect, useRef } from "react";

export function FocusableInput(){
    const inputRef = useRef(null);
    useEffect(()=>{
inputRef.current?.focus()
    },[])
    console.log(inputRef.current)
    return(

        <input type="text" ref={inputRef}></input>    
        
        
    )
}