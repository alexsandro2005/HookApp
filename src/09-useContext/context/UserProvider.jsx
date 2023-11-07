import React, { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 23,
//   name: "Alejandro",
//   email: "alejandro@gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    // <UserContext.Provider value={{ hola: "mundo", user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
