import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoItem } from "./TodoItem";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    handleTodo,
    todosCount,
    pendingCount,
    handleToggleTodo,
    deleteTodo,
    todos,
  } = useTodos();
  return (
    <div className="text-warning">
      <h1>
        Todo APP: {todosCount}
        <small>pendientes: {pendingCount}</small>
      </h1>

      <hr />

      <div className=" container justify-content-center align-items-center text-align-center row d-flex">
        <div className="col-7">
          {/* Todo List */}
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onToggleTodo={handleToggleTodo}
          />
          {/* End Todo List  */}
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleTodo}></TodoAdd>
        </div>
      </div>
    </div>
  );
};
