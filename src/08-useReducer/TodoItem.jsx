export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <div>
      <li
        className="list-group-item d-flex justify-content-between"
        style={{ marginTop: "20px" }}
      >
        <span
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    </div>
  );
};
