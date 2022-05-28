import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {text: inputText, completed: false, id: Math.random() * 1000}
    ]); 
    setInputText("");
  }
  return (
    <form>
      <input 
      value={inputText} 
      onChange={inputTextHandler} 
      type="text" 
      className="todo-input"></input>
      <button onClick={submitTodoHandler} className="todo-btn" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}

export default Form;