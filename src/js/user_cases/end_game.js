import {  getNivelActual, niveles } from "../variables_global.js";

export const endGame = () => {
    const nivelActual = getNivelActual();

    clearInterval(0);
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");

  }
};
