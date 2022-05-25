import React from "react";

const Form = ({setInputText, todos, setTodos}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText}
    ])
  }
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input"></input>
      <button onClick={submitTodoHandler} className="todo-btn" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}

export default Form;