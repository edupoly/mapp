import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './store/store';
import { Provider } from 'react-redux';
import Todolist from './Todolist';
import Quiz from './Quiz';
import QuizComponent from './QuizComponent';
import { Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <div className='border border-2 p-2 border-success'>
        <Link to="/quiz">Quiz</Link>
        <Link to="/categories">Categories</Link>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
