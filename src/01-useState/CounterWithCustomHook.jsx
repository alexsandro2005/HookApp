import React from "react";
import { useCounter } from "../hooks/index";

export const CounterWithCustomHook = () => {
  const { counter, incrementValue, decrementValue, resetValue } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {counter} </h1>
      <hr />
      <button className="btn btn-primary" onClick={incrementValue}>
        +1
      </button>
      <button className="btn btn-warning" onClick={resetValue}>
        reset
      </button>
      <button className="btn btn-danger" onClick={decrementValue}>
        -1
      </button>
    </>
  );
};
