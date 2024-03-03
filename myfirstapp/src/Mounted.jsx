import { useEffect, useRef } from "react"

export function Mounted(){
const isMounted = useRef(false);
    useEffect(()=>{
        isMounted.current = true;
        if (isMounted.current) {
            console.log("Mounted for the first time")
        } else {
            isMounted.current = false;
          
        }
    }, [])
    return(
<h1>Mounted Components</h1>
    )
}