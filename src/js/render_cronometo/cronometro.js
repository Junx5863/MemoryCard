import { timeOut } from "../user_cases/time_out.js";

let cronometro = 0;
const startCronometro = () => {
  let seconds = 10;
  let minutos = 0; 
  let segundoText = 0; 
  let minutosText = 0;

  const updateTime = () => {
    seconds--;
    if(seconds < 0){
        seconds = 59;
        minutos--;
    }
    if(minutos < 0){
        seconds = 0;
        minutos = 0;
        clearInterval(cronometro);
        // timeOut();
    }
    segundoText = seconds;
    minutosText = minutos;

    if(seconds < 10){
        segundoText = "0" + seconds;
    }
    if(minutos < 10){
        minutosText = "0" + minutos;
    }

    document.querySelector("#minutos").innerText = minutosText;
    document.querySelector("#segundos").innerText = segundoText;

  };

  cronometro = setInterval(updateTime, 1000);
};

export { startCronometro, cronometro };
