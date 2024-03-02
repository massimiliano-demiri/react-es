export function UncontrolledLogin() {
  function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.elements.namedItem("username").value;
    const password = e.target.elements.namedItem("password").value;
    const isChecked = e.target.elements.namedItem("checkbox").checked;
    const data = {
      username,
      password,
      isChecked,
    };
    console.log(data);
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text"></input>
      <input name="password" type="text"></input>
      <input name="checkbox" type="checkbox"></input>
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
