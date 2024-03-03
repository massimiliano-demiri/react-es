import { useState } from "react";

export function TodoList() {
  const [todos, updateList] = useState([]);
  const [newtodo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    updateList([todos, newtodo]);
    setTodo("");
    console.log(todos);
    console.log(newtodo);
  }

  function handleInputChange(event) {
    setTodo(event.target.value);
  }

  function handleResetForm(event) {
    event.preventDefault()
    updateList([]);
    setTodo("")
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} onReset={handleResetForm}>
        <input value={newtodo} onChange={handleInputChange}></input>
        <button type="submit">Add todo</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
