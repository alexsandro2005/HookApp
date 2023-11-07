import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";
export const Main = () => {
  return (
    <UserProvider>
      <div className="text-white" style={{ textDecoration: "none" }}>
        <NavBar></NavBar>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<LoginPage />}></Route>
        <Route path="/*" element={<Navigate to={"/about"}></Navigate>}></Route>
      </Routes>
    </UserProvider>
  );
};
