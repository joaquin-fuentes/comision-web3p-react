import Header from "./components/Header";

const App = () => {
  let saludo = <div>hola mundo </div>;

  return (
    <>
      <Header></Header>
      {saludo}
      <footer className="btn btn-primary">Hola soy el footer</footer>
    </>
  );
};

export default App;
