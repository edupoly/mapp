import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className='border border-2 p-2 border-success'>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
