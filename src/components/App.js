import { useState } from "react";
import "../style/App.css";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import data from "../mock-data/data.json";
import Header from "./Header";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      //task.id === Number(id) is only true for the currently clicked to do item, and so only the value of the complete key of the currently clicked item is toggled.
      // if we didn't do the comparison , that is for id, it will be that for every id, toggle
      //Number() is to ensure that whatever id passed in is a number
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      //filter returns a new array
      //simply returning only task that has it's complete key value to be false
      //my code
      //if (task.complete === false) return task;
      return task.complete === false;
      //his code  return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    //so we are updating the data.json file, the toDoList by copying the current list (which is an array of objects) and then adding a new object which we customize for the newly added file
    setToDoList([
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ]);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
