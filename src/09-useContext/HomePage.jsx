import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-white">
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-primary">Guardar Usuario</button>
    </div>
  );
};
