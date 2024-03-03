import { AllertClock } from "./AllertClock"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
import { Clock } from "./Clock"
import { MouseClicker } from "./MouseClicker"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin"
import { FocusableInput } from "./FocusableInput"


function App() {
  function handleButtonClick(){
    const currentTime = new Date()
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    alert(`Current time is: ${currentHour}:${currentMinute}:${currentSecond}`)
}

  return (
    <div>
      <Hello />
      <Welcome name="Luca" age={15}/>
      <hr></hr>
      <AllertClock handlerFunction={handleButtonClick} />
      <hr></hr>
      <Counter defaultValue={9} inc={2} />
      <hr></hr>
      <Clock />
      <hr></hr>
      <MouseClicker />
      <hr></hr>
      <InteractiveWelcome />
      <hr></hr>
      <Login />
      <hr></hr>
      <UncontrolledLogin />
      <hr></hr>
      <FocusableInput />
    </div>
  )
}

export default App
