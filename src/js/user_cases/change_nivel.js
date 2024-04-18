import { initGame } from "../../../app.js";
import { getNivelActual, setNivelActual } from "../variables_global.js";


const upLevel = () => {
  const currentLevel = getNivelActual();
  const newLevel = currentLevel + 1;

  setNivelActual(String(newLevel));

  return newLevel;

};

const actualizarLevel = (nivelActual) => {
  let levelText = Number(nivelActual)+1;
  if (levelText < 10) {
    levelText = "0" + levelText;
  }

  document.querySelector("#level").innerHTML = levelText;
};

 const loadingLevel = () => {
  const newLevel = upLevel();
  actualizarLevel(newLevel);
   initGame();
};


export { loadingLevel, actualizarLevel };
