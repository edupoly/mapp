import React from 'react'

function Counter(props) {
  console.log(props)
  var [count,setCount] = React.useState(100)
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  return (
    <div className='border border-3 p-2 border-success'>
      <h1>Counter</h1>
      <h2 style={((count%2)===0)?{backgroundColor:'red'}:{backgroundColor:'blue'}}>Count:{count}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default Counter