import React, { useState } from 'react'

function TodoForm(props) {
    const initialInput = props.edit ? props.edit.value : ''
    const [input, setInput] = useState(initialInput);
  
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
      console.log('props:', props)
      props.hideForm();
    }




  if (props.edit){
      return (
        <form className='todo-form' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Update Task'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
          />
          <button className='todo-button hoverable'>Update</button>
        </form>
      )
  }else {
    return (
      <form className='todo-form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Add a task'
          value={input}
          name='text'
          className='todo-input'
          onChange={handleChange}
        />
        <button className='todo-button hoverable'>Save</button>
      </form>
    )
  }
}

export default TodoForm
