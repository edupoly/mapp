import React from 'react'

function IplTeam(props) {
  console.log(props)
  return (

      <div className='betterview'>
        <h1>{props.tname}</h1>
        {
          props.team.map((player)=>{
            return <li>{player}</li>
          })
        }
      </div>

  )
}

export default IplTeam