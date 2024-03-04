import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState('');
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          // setError(new Error('User not found'))
        }
        return response.json();
      })
      .then(
        (json) => {
        //   console.log(json);
          setData(json);
        },
        [username]
      );
  });
  const imgsrc = data.avatar
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.login}</h1>
      <img src={imgsrc}></img>
    </div>
  );
}
