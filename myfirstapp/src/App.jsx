import { Hello } from "./Hello"
import { Welcome } from "./Welcome"

function App() {

  return (
    <div>
      <Hello />
      <Welcome name="Luca" age={64}/>
    </div>
  )
}

export default App
