// import { movimientos } from "./user_cases/update_contador.js";

let grupoTarjetas = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["🙂‍↔️","😛","😜","🥳","😠","😭","😫","🤓","😘","😚","😍","🤯","😳"],
];

let nivelActual = 0;

const getNivelActual = () => {
  const value = localStorage.getItem("nivelActual");
  return Number(value);
};

const setNivelActual = (nuevoNivel) => {
  localStorage.setItem("nivelActual", nuevoNivel);
};

const niveles = [
  {
    tarjeta: grupoTarjetas[0],
    movimientosMAx: 3,
  },
  {
    tarjeta: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMAx: 8,
  },
  {
    tarjeta: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMAx: 12,
  },
];

export { grupoTarjetas, niveles, getNivelActual, setNivelActual };
