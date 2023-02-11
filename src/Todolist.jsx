import { connect } from "react-redux"
import React,{useState} from 'react';

function Todolist(props) {
  console.log("props::",props)
  const [newtodo, setNewtodo] = useState('')
  return (
    <div className="border border-2 border-info p-2">
      <h1>Todolist</h1>
      <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
      <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtodo})}}>Add Todo</button>
      {
        props.todos.todos.map((todo,i)=>{
          return <li key={i}>{todo}</li>
        })
      }
    </div>
  )
}
export default connect(function(store){return store})(Todolist)