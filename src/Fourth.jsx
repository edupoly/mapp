import React from 'react'
import MyDetailsContext from './MyDetails.context'
function Fourth() {
  const details = React.useContext(MyDetailsContext);

  return (
    <div className='border m-2 border-2 p-2 border-secondary'>
      <h1>Fourth</h1>
      <h2>{details.firstname}</h2>
    </div>
  )
}

export default Fourth