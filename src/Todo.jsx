import React from 'react'

function Todo(props) {
  console.log("Todo rendered")
  return (
    <div>
      <li className={props.status?'bg-success m-2 p-2':'bg-danger m-2 p-2'}>
        {props.title}
        <button onClick={()=>{props.done(props.i)}}>Done</button>
        <button onClick={()=>{}}>Undo</button>
      </li>
    </div>
  )
}

export default Todo