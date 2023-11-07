import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClickBtn = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };
  return (
    <div className=" text-align-center align-items-center justify-content-center">
      <h2 className="text-white">FOCUS SCREEN </h2>

      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingresa tu nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-4" onClick={onClickBtn}>
        Set Focus
      </button>
    </div>
  );
};
