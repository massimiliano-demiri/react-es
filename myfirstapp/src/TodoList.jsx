import { useState } from "react";

export function TodoList() {
  const [todos, updateList] = useState([]);
  const [newtodo, setTodo] = useState('');

  function handleSubmit(event) {
event.preventDefault();
updateList([... todos, newtodo]);
console.log(todos)
console.log(newtodo)
  }

  function handleInputChange(event) {
    setTodo(event.target.value)
      }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newtodo} onChange={handleInputChange}></input>
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}
