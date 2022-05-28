import React from "react";
//import components
import ToDo from "./ToDo";

function ToDoList() {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <ToDo />
      </ul>
    </div>
  );
}

export default ToDoList;