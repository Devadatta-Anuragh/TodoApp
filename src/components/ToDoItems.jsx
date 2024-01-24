import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ todoItems, settodoItems }) => {
  const deleteTask = (todoName) => {
    const newTasks = todoItems.filter(
      (deleteItem) => deleteItem.name !== todoName
    );
    settodoItems(newTasks);
  };

  return (
    <div className={styles.itemsContainer}>
      {todoItems.length === 0 && (
        <h3 className={styles.message}>No Tasks Assigned...</h3>
      )}

      {todoItems.length !== 0 &&
        todoItems.map((item) => (
          <ToDoItem
            deleteTask={deleteTask}
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></ToDoItem>
        ))}
    </div>
  );
};
export default ToDoItems;
