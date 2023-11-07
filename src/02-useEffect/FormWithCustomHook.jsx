import { useEffect } from "react";
import { useForm } from "../hooks/index";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  // funcion para remover los valores de los campos
  // const { username, email, password } = formState;
  return (
    <div className="container w-25 text-align-center justify-content-center align-items-center center">
      <h1 className=" text-white">Formulario Con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Nombre de Usuario"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Ingresa el correo"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Ingresa tu contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-danger mt-2">
        Borrar
      </button>
    </div>
  );
};
