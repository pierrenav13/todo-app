import './App.css';
import { Login } from './components/Login';
// import Todo from './components/todo/Todo';
import TodoList from './components/todo/TodoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className='r-labs'>rapptr labs</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/todos" element={<TodoList/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
