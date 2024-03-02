export function Welcome({ name = "Giovanni", age }) {
  return (
    <div>
      <p>Welcome, <b>{name}</b>!</p>
      <p>Your age is: {age}</p>
    </div>
  );
}
