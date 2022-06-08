import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText === ""){
      alert("No empty tasks allowed");
    } else {
      setTodos([
        ...todos, 
        {text: inputText, completed: false, id: Math.random() * 1000}
      ]); 
      setInputText("");
    }
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form className="todo-form">
      <div className="input-container">
        <input 
        value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input"
        placeholder="add a task"></input>
        <button onClick={submitTodoHandler} className="todo-btn" type="submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;