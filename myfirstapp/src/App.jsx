import { AllertClock } from "./AllertClock"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"


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
      <AllertClock handlerFunction={handleButtonClick} />
    </div>
  )
}

export default App
