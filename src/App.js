import React, { useState, useRef } from 'react';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = todoInputRef.current.value.trim();
    if (newTodo !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="todo-input-container">
        <input type="text" ref={todoInputRef} placeholder="Add a new todo" />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? 'even' : 'odd'}
            onClick={() => handleRemoveTodo(index)}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
