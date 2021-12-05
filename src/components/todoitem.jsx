import React from "react";



function Todoitem(props){

    // const [isDone, setIsDone] = React.useState(false);

    // function done() {
    //     setIsDone(prev => !prev);
    // }
    return(
        <div 
            onClick={()=>{
                props.done(props.id);
            }}
        >

        <li>{props.item} </li>
        </div>
    )
}

export default Todoitem;