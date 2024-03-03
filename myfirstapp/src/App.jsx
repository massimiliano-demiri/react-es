import { AllertClock } from "./AllertClock";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { FocusableInput } from "./FocusableInput";
import { Mounted } from "./Mounted";
import { TodoList } from "./TodoList";
import { Color } from "./Color";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { HelloWorld } from "./HelloWorld";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSelect(language) {
    setLanguage(language);
  }
  function handleButtonClick() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    alert(`Current time is: ${currentHour}:${currentMinute}:${currentSecond}`);
  }

  return (
    <div>
      <Container title={"Test Title prop"}>
        <LanguageContext.Provider value={language}>
          <HelloWorld />
          <Hello />
          <Welcome name="Luca" age={15} />
          <hr></hr>
          <AllertClock handlerFunction={handleButtonClick} />
          <hr></hr>
          <Counter defaultValue={9} inc={2} />
          <hr></hr>
          <select onChange={(e) => handleSelect(e.target.value)}>
            <option value="it">ITALIANO</option>
            <option value="en">INGLESE</option>
          </select>
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
          <Color color={{ name: "red", id: 1 }} />
          <Colors
            objects={[
              { name: "red", id: 1 },
              { name: "green", id: 2 },
              { name: "purple", id: 4 },
            ]}
          />

          <h3>Test of Children prop</h3>
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}

export default App;
