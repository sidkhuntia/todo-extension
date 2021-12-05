import React from "react";



function Todoitem(props){

    const [isDone, setIsDone] = React.useState(false);

    function done() {
        setIsDone(prev => !prev);
    }
    return(
        <div onClick={ done }>

        <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.item} </li>
        </div>
    )
}

export default Todoitem;