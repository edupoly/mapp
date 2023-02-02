import React,{useState} from 'react'
import Second from './Second'

function First() {
  const [first, setFirst] = useState(100)
  return (
    <div className='border m-2 border-2 p-2 border-success'>
      <h1>First Component:100</h1>
      <Second x={first}></Second>
    </div>
  )
}

export default First