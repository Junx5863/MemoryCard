import { renderCard } from "./src/js/render_card.js/render_cards.js";
import { startCronometro } from "./src/js/render_cronometo/cronometro.js";
import { showCard } from "./src/js/user_cases/show_card.js";
import { maxContador, setMovimientos } from "./src/js/user_cases/update_contador.js";


export const initGame = () => {
  renderCard();
  document.querySelector("#mov").innerHTML = "00";

  document.querySelector('#endGame').classList.remove('visible');
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector('#gameOver').classList.remove('visible');
  document.querySelector("#subeNivel").classList.remove("visible");


  maxContador();
  setMovimientos();
  
  
  document.querySelectorAll(".tarjeta").forEach(function(element) {
    element.addEventListener("click", ()=>{
        showCard(element);
    });
  });

  startCronometro();

  
};

initGame();

