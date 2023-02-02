
import React, { useContext } from 'react'
import MyDetailsContext from './MyDetails.context'
import Third from './Third'
function Second(props) {
  var details=useContext(MyDetailsContext)
  return (
    <div className='border m-2 border-2 p-2 border-info'>
      <h1>How are you, {details.firstname}</h1>
      <h1>Second Component:{props.x}</h1>
      <Third y={props.x}></Third>
    </div>
  )
}

export default Second