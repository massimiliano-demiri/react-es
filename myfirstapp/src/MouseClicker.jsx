export function MouseClicker() {
  function handleButtonClick(e) {
    console.log(e.target.name);
  }
  function handleImgClick(e) {
    console.log(e.target.src);
  }
  return (
    <button name="one" onClick={handleButtonClick}>
      <img
        onClick={handleImgClick}
        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNvbmF8ZW58MHx8MHx8fDA%3D"
      ></img>
    </button>
  );
}
