import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "[TODO] Delete Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    deleteTodo,
    handleTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingCount: todos.filter((todo) => !todo.done).length,
    todos,
  };
};
