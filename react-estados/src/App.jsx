// import React, { useState } from "react";
import Contador from "./components/Contador";
import ListadoEsculturas from "./components/ListadoEsculturas";
import ListadoTareas from "./components/ListadoTareas";
import Temporizador from "./components/Temporizador";
import { Button, ListGroup, Spinner } from "react-bootstrap";

const App = () => {
  // const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      {/* <Contador></Contador> */}
      {/* <ListadoEsculturas></ListadoEsculturas> */}
      <ListadoTareas></ListadoTareas>
      {/* <Button
        variant={mostrar ? "danger" : "primary"}
        onClick={() => setMostrar((prev) => !prev)}
      >
        {mostrar ? "Desmontar" : "Montar"}
      </Button> */}
      {/* {mostrar ? <Temporizador></Temporizador> : <p>Desmontado</p>} */}
    </div>
  );
};

export default App;
