import { useState } from "react";

export function TodoList() {
  const [todos, updateList] = useState([]);
  const [newtodo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    updateList([...todos, newtodo]);
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
function handleRemoveLi(indexToRemove) {
  updateList(todos.filter((_, index) => index !== indexToRemove));
}


  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
          <li>{todo}</li>
          <button onClick={() => handleRemoveLi(index)}>Rimuovi</button>
        </div>
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
