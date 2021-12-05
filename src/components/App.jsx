import React from "react";
import InputArea from "./inputarea";
import Todoitem from "./todoitem";

function App() {
  const [input, setInput] = React.useState();
  const [items, setItems] = React.useState([]);


  function addItem(input) {
    setItems((prev) => {
      if (input === "") {
        return [...prev];
      } else {
        return [input, ...prev];
      }
    });
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
      <InputArea  set={addItem}  />
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
