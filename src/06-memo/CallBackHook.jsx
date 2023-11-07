import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFunction = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <div className="text-white">
      <h1>useCallBack Hook: {counter}</h1>

      <hr />

      <ShowIncrement increment={incrementFunction} />
    </div>
  );
};
