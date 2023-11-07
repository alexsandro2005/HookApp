import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Alejandro",
    email: "alejandro@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("Dependices del use Effect");
  }),
    [];

  useEffect(() => {
    // console.log("Changed Form State");
  }, [formState]);

  return (
    <div className="container w-25 text-align-center justify-content-center align-items-center center">
      <h1>Formulario Simple</h1>
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

      {username === "filipito" && <Message></Message>}
    </div>
  );
};
