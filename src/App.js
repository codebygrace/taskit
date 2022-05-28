import React, {useState} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>taskit - a to-do list app</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList/>
    </div>
  );
}

export default App;
