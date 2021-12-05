import React from "react";

function InputArea(props) {
    
    const [input, setInput] = React.useState();

    function change(data) {
        const value = data.target.value;
        setInput(value);
      }


  return (
    <div className="form">
        <input onChange={change} value={input} type="text" />
        <button onClick={ () => {
            props.set(input);
            setInput("");
            }}
        >
            <span>Add</span>
        </button>
    </div>
  );
}

export default InputArea;
