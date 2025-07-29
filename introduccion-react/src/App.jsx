import Header from "./components/Header";
import ListadoJugadores from "./components/ListadoJugadores";
import Mensaje from "./components/Mensaje";

const App = () => {
  let tituloPagina = "Página web de AFA";
  return (
    <>
      <Header tituloPagina={tituloPagina} colorDeFondo="Rojo"></Header>
      <Mensaje></Mensaje>
      <main>
        <h2>Los 11 Titulares de este finde</h2>
        {/* iria nuestra seccion con las tarjetas e los jugadores */}
        <ListadoJugadores></ListadoJugadores>
      </main>
    </>
  );
};

export default App;
