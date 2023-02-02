import React from 'react'
import MyDetailsContext from './MyDetails.context';
function Third(props) {
  const details = React.useContext(MyDetailsContext)
  console.log(details)
  return (
    <div className='border m-2 border-2 p-2 border-primary'>
      <h1>HI, {details.firstname} {details.lastname}</h1>
      <h1>Third Component:{props.y}</h1>
      <button onClick={details.shoutHI}>Say HI</button>
    </div>
  )
}

export default Third