import React, { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h1>Conteo 1: {counter1} </h1>
      <h1>Conteo 2: {counter2} </h1>
      <h1>Conteo 3: {counter3} </h1>

      <hr />
      <button
        className="btn btn-warning w-25"
        onClick={() =>
          setState({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
