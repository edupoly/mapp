import React from 'react'
import Todo from './Todo';

function Todolist() {
  console.log("Todolist rendered")
  var [todos,setTodos] = React.useState([
    {
      title:'clear bills',
      status:false
    },
    {
      title:'Moksha School',
      status:true
    },
    {
      title:'Manas Bus Fee',
      status:false
    },
    {
      title:'Gold Bill',
      status:false
    },
    {
      title:'Current Bill',
      status:true
    },
  ])
  function addTask(){
    var newtask = document.getElementById('task').value;
    setTodos([...todos,{title:newtask,status:false}])
  }
  var done=React.useCallback(function(i){
    var temp = [...todos];
    temp[i].status=!temp[i].status;
    setTodos([...temp])
  },[])
  return (
    <div className='border border-2 p-2 m-2'>
      <h1>Todolist</h1>
      <input type="text" id='task' />
      <button onClick={addTask}>Add Task</button>
      {
        todos.map((todo,i)=>{
          return <Todo title={todo.title} status={todo.status} done={done} i={i}></Todo>
        })
      }
    </div>
  )
}

export default Todolist