import { useEffect, useState } from "react"

export function Clock(){

    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(()=>{
      const intervalId = setInterval(() =>{
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(intervalId);
        
    }, [])
    const formattedTime = currentTime.toLocaleTimeString()
    return(
        <h2>{formattedTime}</h2>
    )
}