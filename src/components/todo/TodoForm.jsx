import React, { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState('');

  return (
    <form className='todo-form'>
        <input type="text" placeholder=''></input>
    </form>
  )
}

export default TodoForm