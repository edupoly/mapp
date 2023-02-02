import './App.css';
import First from './First';
import React from 'react';
import MyDetailsContext from './MyDetails.context';
import Fourth from './Fourth';
const mydetails = {
  firstname:'praveen',
  lastname:'gubbala',
  shoutHI:()=>{
    alert('hi')
  }
}
function App() {
  return (
    <div className='border m-2 border-2 p-2 border-danger'>
      <MyDetailsContext.Provider value={mydetails}>
        <First></First>
        <Fourth></Fourth>
      </MyDetailsContext.Provider>
    </div>
  );
}

export default App;
