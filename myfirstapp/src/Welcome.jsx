import { Age } from "./Age";

export function Welcome({ name = "Giovanni", age }) {
  return (
    <div>
      <p>Welcome, <b>{name}</b>!</p>
      <Age age={age}/>
      
    </div>
  );
}
