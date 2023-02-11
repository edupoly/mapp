import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './store/store';
import { Provider } from 'react-redux';
import Todolist from './Todolist';
function App() {
  return (
    <Provider store={store}>
      <div className='border border-2 p-2 border-success'>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
