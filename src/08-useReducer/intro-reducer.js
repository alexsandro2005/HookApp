const listaInicial = [
  {
    id: 1,
    names: "Gabriela",
    surnames: "Quevedo",
    job: "Aboagada",
    done: false,
  },
];

const todoReducer = (state = listaInicial, action = {}) => {
  if (action.type === "[TODO} add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  names: "Camilo",
  surnames: "Castro",
  job: "Ingeniero",
  done: false,
};

const addTodoAction = {
  type: "[TODO} add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
