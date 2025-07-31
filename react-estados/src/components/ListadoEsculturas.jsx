import { useState } from "react";
import { sculptureList } from "../db/data";

const ListadoEsculturas = () => {
  //   console.log(sculptureList);
  const [indice, setIndice] = useState(0);

  function handleNext() {
    if (indice < sculptureList.length - 1) {
      setIndice((prev) => prev + 1);
    } else {
      setIndice(0);
    }
  }
  function handlePrev() {
    if (indice < 1) {
      setIndice(sculptureList.length - 1);
    } else {
      setIndice(indice - 1);
    }
  }

  let sculpture = sculptureList[indice];
  const { name, alt, artist, description, url } = sculpture;

  return (
    <div className="container py-4">
      <button
        onClick={handlePrev}
        type="button"
        class="btn btn-outline-primary me-2"
      >
        Anterior
      </button>
      <button
        onClick={handleNext}
        type="button"
        class="btn btn-outline-primary"
      >
        Siguiente
      </button>
      <h2>
        <i>{name}</i> POR {artist}{" "}
      </h2>
      <p>({indice + 1} de 12)</p>
      <img src={url} alt={alt} width={200} height={200} />
      <p>{description}</p>
    </div>
  );
};

export default ListadoEsculturas;
