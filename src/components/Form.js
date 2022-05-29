import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) => {
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
  return (
    <form className="todo-form">
      <input 
      value={inputText} 
      onChange={inputTextHandler} 
      type="text" 
      className="todo-input"
      placeholder="add a task"></input>
      <button onClick={submitTodoHandler} className="todo-btn" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}

export default Form;