import React from "react";

export default function machete() {
  // 🔹 Estado para el filtro
  const [busqueda, setBusqueda] = useState("");

  // 🔹 Filtrar alumnos (case insensitive)
  const alumnosFiltrados = alumnos.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  return (
    <>
      <form
        className="d-flex col-6 m-3"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control"
          type="search"
          placeholder="Buscar alumno"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} // 🔹 Actualiza estado
        />
        <button
          class="btn btn-outline-primary"
          onClick={handleClickBuscar}
          type="submit"
        >
          <img
            src="https://img.icons8.com/?size=100&id=p3miLroKw4iR&format=png&color=000000"
            alt="Buscar"
            width="25dvh"
          />
        </button>
      </form>



      
      <TablaAlumnos alumnos={alumnosFiltrados}></TablaAlumnos>
    </>
  );
}
