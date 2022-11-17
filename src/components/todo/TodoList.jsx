import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(todo.text.length === 0 || todo.text.length > 25){
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        // if (newValue.text.length === 0 || newValue.text.length > 25) {
        //     return;
        // }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

  return (
    <div className='todo-list'>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList
