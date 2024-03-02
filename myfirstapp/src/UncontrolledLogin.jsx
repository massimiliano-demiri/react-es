export function UncontrolledLogin() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(event.target)
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      isChecked: formData.get('checkbox'),
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
