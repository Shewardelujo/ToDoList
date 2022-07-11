import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(todo.id);
  };
  return (
    <div className={todo.complete ? "strike" : ""} onClick={handleClick}>
      {todo.task}
    </div>
  );
};
//strike in styled in index.css
export default ToDo;
