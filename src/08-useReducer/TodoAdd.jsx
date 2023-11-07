import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { onInputChange, description, onResetForm } = useForm({
    description: "",
  });
  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) {
      alert("No ingresaste la descripción");
      return;
    }
    const newTodo = {
      id: new Date().getTime() * 3,
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Que hay para hacer?"
          className="form-control"
          name="description"
          value={description}
          onInput={onInputChange}
        />
        <button type="submit" className="btn btn-outline-warning mt-2">
          Agregar Todo
        </button>
      </form>
    </div>
  );
};
