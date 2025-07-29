import "./listadoJugadores.css";
const ListadoJugadores = () => {
  const jugadoresSeleccionArgentina = [
    {
      nombre: "Lionel Messi",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    },
    {
      nombre: "Emiliano Martínez",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Emiliano_Mart%C3%ADnez_2022.jpg",
    },
    {
      nombre: "Rodrigo De Paul",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Rodrigo_De_Paul_2022.jpg",
    },
    {
      nombre: "Julián Álvarez",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Juli%C3%A1n_%C3%81lvarez_2022.jpg",
    },
    {
      nombre: "Cristian Romero",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Cristian_Romero_2022.jpg",
    },
  ];

  function handleClick(nombre) {
    alert(`Jugador: ${nombre} agregado a favoritos`);
  }

  return (
    <div>
      Listado de convocados:
      <section className="contenedorTarjetas">
        {/* cada una de mis tarjetas */}
        {jugadoresSeleccionArgentina.map((jugador, indice) => (
          <article key={indice}>
            <img
              src={jugador.imagen}
              alt={jugador.nombre}
              style={{
                border: "1px solid red",
                width: "100px",
                height: "100px",
              }}
            />
            <p>{jugador.nombre}</p>
            <button onClick={() => handleClick(jugador.nombre)}>
              Agregar a favoritos
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ListadoJugadores;
