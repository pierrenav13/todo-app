import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import {useNavigate} from 'react-router-dom';
import $ from 'jquery';

function TodoList(props) {
    const ls = require('local-storage')
    const todoArray = ls.get('todos') ? JSON.parse(ls.get('todos')) : []
    const [todos, setTodos] = useState(todoArray);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        ls.set('todos', JSON.stringify(todos))
    }, [todos])


    const addTodo = todo => {
        if(todo.text.length === 0 || todo.text.length > 25){
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        hideForm();
    }
    
    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
        hideForm();
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    const navigate = useNavigate()

    const handleLogout = e => {
        e.preventDefault();
        navigate('/')
    }

    const showForm = () => {
        $('#new-form').removeClass('hidden')
    }

    const hideForm = () => {
        $('#new-form').addClass('hidden')
    }

  return props.edit ? (
    <>
        <button className='logout hoverable' onClick={handleLogout}>Logout</button>
        <div className='todo-list'>
            <div className='header'>
                <input className='search' value={filter} onChange={(e) => setFilter(e.target.value)} type="text" placeholder='search'/>
                <button onClick={showForm} className='todo-button hoverable'>New</button>
            </div>
            <div id='new-form' className='hidden'>
                  <TodoForm edit={props.edit} onSubmit={props.submitUpdate} hideForm={hideForm} />
            </div>
            <div className='todos'>
                <Todo filter={filter} todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
            </div>
        </div>
    </>
    
  ) : (
    <>
        <button className='logout hoverable' onClick={handleLogout}>Logout</button>
        <div className='todo-list'>
            <div className='header'>
                <input className='search' value={filter} onChange={(e) => setFilter(e.target.value)} type="text" placeholder='search' />
                <button onClick={showForm} className='todo-button hoverable'>New</button>
            </div>
            <div id='new-form' className='hidden'>
                <TodoForm onSubmit={addTodo} hideForm={hideForm} />
            </div>
                <Todo filter={filter} todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    </>
  )
}

export default TodoList
