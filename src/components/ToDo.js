import React from "react";

const ToDo = () => {
  return (
    <div className="todo">
      <li className="todo-item">Task #1</li>
      <button className="complete-btn"><i className="fa-solid fa-check"></i></button>
      <button className="trash-btn"><i className="fa-solid fa-trash-can"></i></button>
    </div>
  );
}

export default ToDo;