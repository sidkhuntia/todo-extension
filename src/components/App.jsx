import React from "react";
import Todoitem from "./todoitem";

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

  function deleteItem(index) {
    setItems((prev) => {
      return prev.filter((item, i) => {
        return i !== index;
      });
    }); 
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
          {items.map((item,index) => (
            <Todoitem 
            key={index}
            id={index}
            done={deleteItem}
            item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
