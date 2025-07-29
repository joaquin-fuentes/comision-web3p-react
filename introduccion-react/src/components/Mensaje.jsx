function Mensaje() {
  let estaLogueado = false;

  return (
    <div>
      {estaLogueado ? (
        <p>Bienvenido de nuevo</p>
      ) : (
        <p>Necesitas loguearte, te redireccionamos al login</p>
      )}
    </div>
  );
}

export default Mensaje;
