import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, incrementValue } = useCounter(10);
  const [show, setShow] = useState(true);

  const memoValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="text-white">
      <h1>
        Counter: <Small value={counter}></Small>
      </h1>

      <hr />

      <h4 className="text-white">{memoValue}</h4>

      <button onClick={() => incrementValue()} className="btn btn-primary">
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary"
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
