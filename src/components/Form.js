import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input"></input>
      <button className="todo-btn" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}

export default Form;