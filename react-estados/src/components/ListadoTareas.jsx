import React, { useEffect, useState } from "react";
import { Button, ListGroup, Spinner } from "react-bootstrap";
import {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
} from "../utils/localStorage.util";

const ListadoTareas = () => {
  const [listadoTareas, setListadoTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setListadoTareas([...listadoTareas, tarea]);
    // limpiar el formulario
    setTarea("");
  }

  useEffect(() => {
    const tareasGuardadas = obtenerDeLocalStorage("listadoTareas");
    console.log(tareasGuardadas);
    setListadoTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    // Código que se ejecuta al montar o actualizar
    console.log("Componente cargado");
    guardarEnLocalStorage("listadoTareas", listadoTareas);
    //codigo que se ejecuta al desmontar
  }, [listadoTareas]);

  return (
    <div className="container mt-2">
      <h1>Listado de tareas</h1>
      {/* <Spinner animation="border" variant="primary" /> */}
      <form onSubmit={handleSubmit} className="d-flex w-50 ">
        <input
          type="text"
          placeholder="Ingrese la tarea"
          className="form-control m-2"
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
        />
        {/* <button type="submit" className="btn btn-primary">
          Guardar
        </button> */}
        <Button type="submit" variant="primary">
          Guardar
        </Button>
      </form>
      <h3>Listado</h3>
      <ListGroup>
        {" "}
        {/* Mostrar el listado de tareas */}
        {listadoTareas.map((item, indice) => {
          return (
            <ListGroup.Item variant="primary" key={indice}>
              {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ListadoTareas;
