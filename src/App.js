import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className='border border-2 p-2 border-danger'>
      <Counter initialCount={100}></Counter>
      <Counter initialCount={200}></Counter>
      <h1 style={{color:'red'}}>Edupoly</h1>
      <h1 style={{color:'green'}}>Praveen</h1>
    </div>
  );
}

export default App;
