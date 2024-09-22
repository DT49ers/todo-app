import "./App.css";
import React, { useState } from "react";

// Functional component
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodos = (e) => {
    e.preventDefault(); // This prevents a REFRESH which is the default behavior after form submit from button
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="app">
      <center>
        <h1>Welcome to My TODO List</h1>
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button style={{ color: "red" }} type="submit" onClick={addTodos}>
            ADD TODO
          </button>
        </form>
        <h2>List of Todos</h2>
        {todos.map((todo, i) => (
          <p>
            {i + 1}. {todo}
          </p>
        ))}
      </center>
    </div>
  );
}

export default App;
