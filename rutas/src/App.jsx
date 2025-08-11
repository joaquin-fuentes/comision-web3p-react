import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Routes, Route, NavLink } from "react-router";

const App = () => {
  return (
    <div>
      <header>
        {" "}
        <nav>
          <NavLink to="/">Home</NavLink>
          {" | "}
          <NavLink to="/contacto">Contacto</NavLink>
          {" | "}
          <NavLink to="/login">Login</NavLink>
          {" | "}
          <NavLink to="/sobrenosotros">Sobre nosotros</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/contacto" element={<div>Contacto</div>}></Route>
        <Route path="/login" element={<div>Login</div>}></Route>
        <Route path="*" element={<div>Error 404</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;
