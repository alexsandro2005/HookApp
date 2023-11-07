import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="text-white">
      <h1>Login Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        onClick={() =>
          setUser({ id: 123, name: "Alejandro ", email: "alejandro@gmail.com" })
        }
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  );
};
