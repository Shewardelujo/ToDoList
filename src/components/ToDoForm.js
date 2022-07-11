import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //when we submit, we want to take the search term in this case the userInput and use it to call a callback in the parent component
    addTask(userInput);
    //Then afterwards, we want to set the input field to be empty
    setUserInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          placeholder="Enter task..."
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
