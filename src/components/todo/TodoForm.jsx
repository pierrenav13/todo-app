import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
      setInput(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });

      setInput('');
    }



  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input 
            type="text" 
            placeholder='Update task' 
            value={input} 
            name='text'
            className='todo-input'
            onChange={handleChange}
          />
          <button className='todo-button hoverable'>Update</button>
        </>
      ) : (
          <>
            <input
              type="text"
              placeholder='Add a task'
              value={input}
              name='text'
              className='todo-input'
              onChange={handleChange}
            />
            <button className='todo-button hoverable'>Save</button>
          </>
      )} 
    </form>
  )
}

export default TodoForm
