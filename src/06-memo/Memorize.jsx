import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, incrementValue } = useCounter(10);

  const [show, setShow] = useState();
  return (
    <>
      <h1>
        Counter: <Small value={counter}></Small>
      </h1>

      <hr />

      <button onClick={() => incrementValue()} className="btn btn-primary">
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary"
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
