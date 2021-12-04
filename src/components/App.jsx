import React from "react";

function App() {
  const [input, setInput] = React.useState();
  const [items, setItems] = React.useState([]);

  function change(data) {
    const value = data.target.value;
    setInput(value);
  }
  function set() {
    setItems((prev) => {
      if (input === "") {
        return [...prev];
      } else {
        return [input, ...prev];
      }
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={change} value={input} type="text" />
        <button onClick={set}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
