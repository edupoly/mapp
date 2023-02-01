import React from 'react'

function YourForm(props,a) {
  return (
    <div className='border border-3 p-2 m-2 border-info'>
      <h1>YourForm</h1>
      <input type="text" ref={a}/>
    </div>
  )
}

export default React.forwardRef(YourForm)