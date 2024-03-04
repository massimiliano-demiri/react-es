import { useEffect, useContext, useState } from "react"
import { LanguageContext } from "./LanguageContext"

export function Clock(){
    const language = useContext(LanguageContext)
   
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(()=>{
      const intervalId = setInterval(() =>{
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(intervalId);
        
    }, [])
    const formattedTime = currentTime.toLocaleTimeString()
    return(
        <h2>{language==='it' ? `Ora corrente: ${formattedTime}` : `Current time: ${formattedTime}` }</h2>
    )
}