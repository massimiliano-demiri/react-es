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
import { Mounted } from "./Mounted"
import { TodoList } from "./TodoList"
import { Color } from "./Color"
import { Colors } from "./Colors"
import { Container } from "./Container"


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
      <hr></hr>
      <Mounted />
      <hr></hr>
      <TodoList />
      <hr></hr>
      <Color color={{name: 'red', id: 1}}/>
      <Colors objects={[{name: 'red', id: 1}, {name: 'green', id: 2}, {name: 'purple', id: 4}]}/>
      <Container title={"Test Title prop"} >
<h3>Test of Children prop</h3>
      </Container>
    </div>
  )
}

export default App
