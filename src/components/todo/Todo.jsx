import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        props.updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })

    }

    if(props.todos) {
        const tForm = edit.id ? [<TodoForm key={edit.id} edit={edit} onSubmit={submitUpdate} />] : []
        let todos = props.todos;
        if (props.filter && props.filter !== '') {
            todos = props.todos.filter((todo) => (todo.text.toLowerCase().includes(props.filter)))
        }

        const newTodos = todos.map((todo, index) => (
            <div className='todo-row' key={index}>
            
                <div className='todo-text' key={todo.id}>
                    {todo.text}
                </div>

                <div className='icons'>
                    <FontAwesomeIcon 
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        icon={faPencil}
                        className='edit-icon hoverable'
                    />
                    
                    <FontAwesomeIcon
                        onClick={() => props.removeTodo(todo.id)}
                        icon={faTrashCan}
                        className='delete-icon hoverable'
                    />
                </div>

            </div>
        ))

        return tForm.concat(newTodos); 
  } 
}

export default Todo
