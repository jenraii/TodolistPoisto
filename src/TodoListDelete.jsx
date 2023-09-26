import React from 'react'
import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [descValue, setDescValue] = useState('');
    const [dateValue, setDateValue] = useState('');

function handleChange1(e){
    setDescValue(e.target.value)
  }

  function handleChange2(e){
    setDateValue(e.target.value)
  }
  
  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, descValue, dateValue])
    setDescValue('')
    setDateValue('');
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  
    return (
      <div>
        <h1>Simple Todolist</h1>
        <form>
         <p>Description: <input type='text' value={descValue} onChange={handleChange1}/> Date: <input type='text' value={dateValue} onChange={handleChange2}/>
          <button class="add-button" onClick={handleSubmit}>Add</button></p>
        </form>
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    )
  }
  
  export default TodoList