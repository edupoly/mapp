
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Quiz from './Quiz';
function App() {
  return (
    <Provider store={store}>
      <div className='border border-2 p-2 border-success'>
        <Quiz></Quiz>
      </div>
    </Provider>
  );
}

export default App;
