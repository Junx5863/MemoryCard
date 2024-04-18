

import { initGame } from "../../../app.js";
import { actualizarLevel, loadingLevel } from "../user_cases/change_nivel.js";
import { setNivelActual } from "../variables_global.js";



document.querySelectorAll(".reiniciar").forEach((element) => {
  element.addEventListener("click", () => {
    setNivelActual(0);
    actualizarLevel(0);
    initGame();
  });
});


document.querySelector("#subir").addEventListener("click", ()=>{
loadingLevel();
});