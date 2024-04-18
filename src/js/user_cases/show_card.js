import { compareCards } from "./compare_card.js";
import { updateContador } from "../user_cases/update_contador.js";
import { endGame } from "./end_game.js";






/** 
*
* @param {HTMLDivElement} element
*/
export const showCard = (element) => {

  const totalShowCards = document.querySelectorAll(".descubierta:not(.acertada)");
  
  
  
  if (totalShowCards.length > 1) {
    return;
  }
  element.classList.add("descubierta");
  document
    .querySelector("#sonido-carta")
    .cloneNode()
    .play();
  
  const descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }
  
  compareCards(descubiertas);
  updateContador();
  
  const tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  
    if(tarjetasPendientes.length === 0){
      // document.querySelector("#feedback").classList.add("visible");
      setTimeout(endGame,1000);
    }


    
   };