import React from 'react'
import YourForm from './YourForm';

function MyForm() {
  var ref1 = React.useRef()
  var ref2 = React.useRef()
  var ref3 = React.useRef();
  React.useEffect(()=>{
    ref1.current.focus()
  },[])
  function checkEnter(e){
    if(e.key==='Enter'){
      ref2.current.focus();
    }
  }
  function checkEnter2(e){
    if(e.key==='Enter'){
      ref3.current.focus();
    }
  }
  return (
    <div className='border border-3 p-2 m-2 border-success'>
      <h1>MyForm</h1>
      <input type="text" ref={ref1} onKeyUp={checkEnter}/>
      <input type="text" ref={ref2} onKeyUp={checkEnter2} />
      <YourForm ref={ref3}></YourForm>

    </div>
  )
}

export default MyForm