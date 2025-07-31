import React, { useState } from "react";

const ListadoTareas = () => {
  const [listadoTareas, setListadoTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setListadoTareas([...listadoTareas, tarea]);
  }
  console.log(listadoTareas);
  return (
    <div className="container mt-2">
      <h1>Listado de tareas</h1>
      <form onSubmit={handleSubmit} className="d-flex w-50 ">
        <input
          type="text"
          placeholder="Ingrese la tarea"
          className="form-control m-2"
          onChange={(event) => setTarea(event.target.value)}
        />
        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
      </form>
      <h3>Listado</h3>
      <ul>
        <li>Sacar a pasear al firulais</li>
      </ul>
    </div>
  );
};

export default ListadoTareas;
