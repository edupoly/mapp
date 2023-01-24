import React from 'react'

function Todolist() {
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
  return (
    <div className='border border-2 p-2 m-2'>
      <h1>Todolist</h1>
    </div>
  )
}

export default Todolist