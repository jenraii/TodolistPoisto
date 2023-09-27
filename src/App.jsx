import { useState } from 'react';
import './App.css';

const App = () => {
const [todo, setTodo] = useState({date: '', description: ''});
const [todos, setTodos] = useState([]);

const inputChanged = (event) => {
  setTodo({...todo, [event.target.name]: event.target.value });
}

const addTodo = event => {
  event.preventDefault();
  setTodos([...todos, todo]);
  setTodo({ date: '', description: '' });
}

const deleteTodo = index => {
  setTodos(todos.filter((todo, i) => i !== index));
}

  return (
    <div className="App">
    <header>
      <h1>Simple Todolist</h1>
    </header>
    <main>
      <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo:</legend>
          <label>Date:
            <input type="text" name="date" onChange={inputChanged} value={todo.date} />
          </label>
          <label>Description:
            <input type="text" name="description" onChange={inputChanged} value={todo.description} />
          </label>
          <input type="submit" value="Add" />
        </fieldset>
      </form>

    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.description}</td>
          <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
          </tr>)}
      </tbody>
    </table>
    </main>
    </div>
  );
};

export default App

