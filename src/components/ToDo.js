import React from "react";
import "../style/ToDo.css";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(todo.id);
  };
  return (
    <div
      className={todo.complete ? "strike eachTodo" : "eachTodo"}
      onClick={handleClick}
    >
      {todo.task}
    </div>
  );
};
//strike in styled in index.css
export default ToDo;
