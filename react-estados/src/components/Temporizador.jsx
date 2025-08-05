import { useState, useEffect } from "react";

export default function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  
  useEffect(() => {
    console.log("🟢 Componente montado");

    const intervalo = setInterval(() => {
      setSegundos((seg) => seg + 1);
    }, 1000);

    return () => {
      console.log("🔴 Componente desmontado");
      clearInterval(intervalo);
    };
  }, []);

  return <h2>Tiempo transcurrido: {segundos} segundos</h2>;
}
