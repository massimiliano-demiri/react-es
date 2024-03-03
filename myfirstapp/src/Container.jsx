import { useState } from "react"

export function Container({ children, title }){
const [flagstate, setFlag] = useState(false);
    function handleTitleClick(){
        setFlag(!flagstate);
    }
    return (
<div style={{ backgroundColor: 'white', border: '1px solid red' }}>
  <h1 onClick={handleTitleClick}>{title}</h1>
    {!flagstate ? children : ''}
</div>
    )
}