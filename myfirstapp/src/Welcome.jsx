import { Age } from "./Age";

export function Welcome({ name = "Giovanni", age }) {
  return (
    <div>
      <p>
        Welcome, <b>{name}</b>!
      </p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === "Jhon" && <Age age={age} />}
    </div>
  );
}
