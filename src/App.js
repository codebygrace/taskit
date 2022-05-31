import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Navbar/>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
