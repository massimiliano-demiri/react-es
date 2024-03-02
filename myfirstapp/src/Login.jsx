import { useState } from "react"

export function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setCheckbox] = useState(false)

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }
    function handleCheckboxChange(e){
        setCheckbox(e.target.checked)
    }
    return(
        
        <div>
            <input type="text" value={username} onChange={handleUsernameChange}></input>
            <input type="password" value={password} onChange={handlePasswordChange}></input>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
        </div>
    )
}