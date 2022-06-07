import React, {useState} from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
      <div className="App">
        <Header/>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
        <TodoList setTodos={setTodos} todos={todos}/>
      </div>
  );
}

export default App;
