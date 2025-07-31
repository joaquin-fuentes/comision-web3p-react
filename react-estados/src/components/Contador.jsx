import { useState } from "react";

const Contador = () => {
  // let array = useState(10);
  // let count = array[0];
  // let setCount = array[1];

  const [count, setCount] = useState(0);

  function handleDecrement() {
    // if (count > 0) {
    //   setCount((prev) => prev - 1);
    //   //  setCount(count - 1)  Este si
    //   //  setCount(count--)   Este no funciona
    // } else {
    //   alert("NO SE ACEPTAN NUMEROS NEGATIVOS");
    // }
    count > 0
      ? setCount((prev) => prev - 1)
      : alert("NO SE ACEPTAN NUMEROS NEGATIVOS");
  }

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="text-center mt-4">
      <div>Numero: {count}</div>
      <button className="btn btn-primary m-2" onClick={handleDecrement}>
        Restar 1
      </button>{" "}
      <button className="btn btn-primary m-2" onClick={handleReset}>
        Resetear
      </button>
      <button className="btn btn-primary m-2" onClick={handleIncrement}>
        Sumar 1
      </button>
    </div>
  );
};

export default Contador;
