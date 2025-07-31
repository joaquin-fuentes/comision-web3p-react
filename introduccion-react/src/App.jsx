import Header from "./components/Header";
import ListadoJugadores from "./components/ListadoJugadores";
import Mensaje from "./components/Mensaje";

const App = () => {
  let tituloPagina = "Página web de AFA";
  let contador = 2;
  function handleClick() {
    contador++;
  }
  console.log(contador);
  return (
    <>
      <Header tituloPagina={tituloPagina} colorDeFondo="Rojo"></Header>
      <Mensaje></Mensaje>
      <main>
        <h2>Los 11 Titulares de este finde</h2>
        {/* iria nuestra seccion con las tarjetas e los jugadores */}
        <button onClick={handleClick}>Aumentar contador</button>
        <span
          // style={{ backgroundColor: "red", padding: "20px", margin: "20px" }}
          className="btn btn-primary"
        >
          {contador}
        </span>
        <ListadoJugadores></ListadoJugadores>
      </main>
    </>
  );
};

export default App;
