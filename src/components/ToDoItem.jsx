function ToDoItem({ todoName, todoDate, deleteTask }) {
  return (
    <div className="container">
      <div className="row each-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger each-btn"
            onClick={() => deleteTask(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
