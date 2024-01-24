import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const onAddBtn = (textValue, dateValue) => {
    const newAdd = { name: textValue, dueDate: dateValue };
    settodoItems([...todoItems, newAdd]);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onAddBtn={onAddBtn}></AddToDo>
      <ToDoItems
        todoItems={todoItems}
        settodoItems={settodoItems}
        onAddBtn={onAddBtn}
      ></ToDoItems>
    </center>
  );
}

export default App;
