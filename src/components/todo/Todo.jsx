import React, {useState} from 'react'
import TodoForm from './TodoForm'
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

        if(edit.id) {
            return <TodoForm edit={edit} onSubmit={submitUpdate} />
        }
    }

    if(props.todos) {
        const todoList = props.todos.map((todo, index) => (
            <div className='todo-row' key={index}>
            
                <div key={todo.id}>
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
  } 
}

export default Todo
