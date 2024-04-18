// import { startCronometro } from "../render_cronometo/cronometro.js";

import { getNivelActual, niveles } from "../variables_global.js";
// import { renderbuttons } from "../render_btn/events.js";



const barajaTarjetas = (grupoTarjetas) => {
  const totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

  const resultado = totalTarjetas.sort(() => {
    return 0.5 - Math.random();
  });
  return resultado;
};

const renderCard = () => {
  const currentLevel = getNivelActual();

  const mesa = document.querySelector("#mesa");

  const tarjetasBarajadas = barajaTarjetas(niveles[currentLevel].tarjeta);
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (element) {
    let tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor= " +
      element +
      " >" +
      "<div class='tarjeta__contenido'>" +
      element +
      "</div>";
    ("</div>");
    mesa.appendChild(tarjeta);
  });
  
  
};






export { renderCard,  };

