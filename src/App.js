import React from 'react';
import './App.css';
import { Link,Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border border-2 p-2 border-danger'>
      <h1>My App</h1>
      <Link to='/myform'>Your Form</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
