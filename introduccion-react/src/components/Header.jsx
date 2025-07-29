import { Logo } from "./Logo";

const Header = ({ tituloPagina, colorDeFondo = "Azul" }) => {
  return (
    <header>
      <Logo />
      <p>Titulo:{tituloPagina}</p>
      <p>Color: {colorDeFondo} </p>
    </header>
  );
};

export default Header;
