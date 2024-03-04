import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  //   const [username, setUsername] = useState("");
  const [usernameList, updateList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    updateList([...usernameList, e.target.elements.user.value]);
  }
  console.log(usernameList);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user"></input>
        <button type="submit">Search for username</button>
      </form>
      <ul>
        {usernameList.map((username, index) => (
          <li key={index}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}
