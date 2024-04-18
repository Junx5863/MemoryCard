// import { movimientos } from "../variables_global.js";

import { getNivelActual, niveles } from "../variables_global.js";
import { gameOver } from "./game_over.js";



let movimientos = 0;

const updateContador = () =>{
    let moveText = 0;
    movimientos++;
    moveText = movimientos;

    const currentLevel = getNivelActual();


    if(movimientos > niveles[currentLevel].movimientosMAx){
        gameOver();
        return;
    }

    if(movimientos < 10){
        moveText = "0" + movimientos;
    }

    document.querySelector("#mov").innerHTML = moveText;
}

const setMovimientos = () =>{
    movimientos = 0;
}

const maxContador = () => {
    const currentlevel = getNivelActual();
    let movimientosMAxText = niveles[currentlevel].movimientosMAx;
    if(movimientos < 10){
        movimientosMAxText = "0" + movimientosMAxText;
    }
    document.querySelector("#mov-total").innerHTML = movimientosMAxText;
}


export  {
    movimientos,
    updateContador,
    setMovimientos,
    maxContador
}