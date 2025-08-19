import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoNav from "./assets/imagenesSimpsons/logo.png";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="d-flex flex-column border-2 alturaMinimaContenedor">
      <Header></Header>
      <main>
        <HomePage></HomePage>
      </main>
      <Footer logoSrc={LogoNav}></Footer>
    </div>
  );
};

export default App;
