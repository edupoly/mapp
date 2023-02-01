import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import MyComp from './MyComp';
import MyForm from './MyForm';

function App() {
  return (
    <div className='border border-2 p-2 border-danger'>
      <MyForm></MyForm>
      <MyComp></MyComp>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
