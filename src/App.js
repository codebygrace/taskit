import React, {useState} from 'react';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  let Component 
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/contact":
      Component = Contact
      break
  }

  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <>
      <div className="App">
        <Navbar/>
        <Component/>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
        <TodoList setTodos={setTodos} todos={todos}/>
      </div>
    </>
  );
}

export default App;
