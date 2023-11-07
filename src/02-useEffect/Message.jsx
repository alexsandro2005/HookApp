import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coordenadas = { x, y };
      console.log(coordenadas);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      <h1>El usuario ya existe</h1>
    </>
  );
};
