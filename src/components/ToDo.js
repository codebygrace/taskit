import React from "react";

const Todo = ({text, todos, todo, setTodos}) => {
  //events
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  };
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <div className="task-btn-container">
        <button onClick={completeHandler} className="complete-btn">
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;