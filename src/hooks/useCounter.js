import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  // creamos los metodos para incrementar, decrementar, y resetear el valor inicial

  // metodo para incrementar
  const incrementValue = () => {
    setCounter(counter + 1);
  };
  const decrementValue = () => {
    if (counter === 0) {
      return alert("El valor no puede ser menor a 0");
    }
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    incrementValue,
    decrementValue,
    resetValue,
  };
};
