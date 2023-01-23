import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main';
import IplTeam from './IplTeam';
import React from 'react';
function App() {
  
  const [allteams, setAllteams] = React.useState([
    {
      teamname:'Mumbai Indians',
      players:[
        'Rohit',
        'surya',
        'kishan',
        'bhumra',
        'david'
      ]
    },
    {
      teamname:'Royal Challengers Bengaluru',
      players:[
        'Faf',
        'Virat',
        'DK',
        'Maxi',
        'Siraj'
      ]
    },
    {
      teamname:'Sunrisers Hyderabad',
      players:[
        'Kane Williamson',
        'Manish',
        'Bhuvi',
        'Warner',
        'Karan'
      ]
    },
    {
      teamname:'Chennai Super Kings',
      players:[
        'Dhoni',
        'Raina',
        'Jadeja',
        'Rayudu',
        'Ben Stokes'
      ]
    }
  ])
  return (
    <div className='betterview'>
      <h1>Welcome to Edupoly React</h1>
      {
        allteams.map((team)=>{
          return <IplTeam team={team.players} tname={team.teamname}></IplTeam>
        })
      }
    </div>
  );
}

export default App;
