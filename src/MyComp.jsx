import React from 'react'

function MyComp() {
  console.log("First line of MyComp")
  const [a, setA] = React.useState(100)
  const [b, setB] = React.useState(200)
  function incA(){
    setA(a+10)
  }
  function incB(){
    setB(b+10)
  }
  React.useEffect(()=>{
    console.log("MyComp useEffect with empty dependency array called")
  },[])
  React.useEffect(()=>{
    console.log("MyComp useEffect without dependency array called")
  })
  React.useEffect(()=>{
    console.log("India")
  },[a])
  React.useEffect(()=>{
    console.log("USA")
  },[b])
  return (
    <div className='border border-3 p-2 m-2 border-info'>
      <h1>my comp</h1>
      <h1>A:{a}</h1>
      <h1>B:{b}</h1>
      <button onClick={incA}>IncA</button>
      <button onClick={incB}>IncB</button>
    </div>
  )
}

export default MyComp

// hooks in react
// useState
// useEffect
// useCallback
// useRef