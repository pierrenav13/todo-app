import './App.css';
import { Login } from './components/Login';
// import Todo from './components/todo/Todo';
import TodoList from './components/todo/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className='r-labs'>rapptr labs</h1>
      {/* <Login /> */}
      <TodoList />

    </div>
  );
}

export default App;
