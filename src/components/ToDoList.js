import React from "react";
import ToDo from "./ToDo";
import "../style/ToDoList.css";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div className="todo-list">
      {/* <div>Pending task</div> */}
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} key={todo.id} />;
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
